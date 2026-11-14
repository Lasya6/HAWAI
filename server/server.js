
import express from "express";
import multer from "multer";
import cors from "cors";
import dotenv from "dotenv";
import XLSX from "xlsx";
import path from "path";

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 15 * 1024 * 1024 }
});

app.get("/", (req, res) => {
  res.send("HAWAI Voice + WhatsApp API is running!");
});

// ------------------------------------
// SARVAM AI - VOICE TRANSCRIPTION
// ------------------------------------
app.post("/api/transcribe", upload.single("audio"), async (req, res) => {
  try {
    if (!process.env.SARVAM_API_KEY) {
      return res.status(500).json({
        error: "Sarvam API key is missing in .env"
      });
    }

    if (!req.file) {
      return res.status(400).json({
        error: "No audio file received"
      });
    }

    const formData = new FormData();

    const audioBlob = new Blob(
      [req.file.buffer],
      { type: req.file.mimetype }
    );

    formData.append(
      "file",
      audioBlob,
      req.file.originalname || "recording.webm"
    );

    formData.append("model", "saaras:v4");
    formData.append("mode", "transcribe");

    const response = await fetch(
      "https://api.sarvam.ai/speech-to-text",
      {
        method: "POST",
        headers: {
          "api-subscription-key": process.env.SARVAM_API_KEY
        },
        body: formData
      }
    );

    const result = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        error:
          result.message ||
          result.error ||
          "Sarvam transcription failed"
      });
    }

    return res.json({
      success: true,
      transcript: result.transcript,
      language: result.language_code
    });

  } catch (error) {
    console.error("Sarvam error:", error);

    return res.status(500).json({
      error: "Unable to process audio. Try again."
    });
  }
});

// ------------------------------------
// WHATSAPP - SEND CAMPAIGN MESSAGE
// Reads the first opted-in customer
// from data/customers.xlsx
// ------------------------------------
app.post("/api/whatsapp/test", async (req, res) => {
  try {
    const {
      WHATSAPP_ACCESS_TOKEN,
      WHATSAPP_PHONE_NUMBER_ID,
      GRAPH_API_VERSION = "v27.0"
    } = process.env;

    // Check WhatsApp credentials
    if (
      !WHATSAPP_ACCESS_TOKEN ||
      !WHATSAPP_PHONE_NUMBER_ID
    ) {
      return res.status(500).json({
        error: "WhatsApp credentials are missing in .env"
      });
    }

    // Get campaign message from frontend
    const message = String(
      req.body?.message || ""
    ).trim();

    if (!message) {
      return res.status(400).json({
        error: "Campaign message is empty"
      });
    }

    // Read customer Excel file
    const excelPath = path.join(
      process.cwd(),
      "data",
      "customers.xlsx"
    );

    const workbook = XLSX.readFile(excelPath);

    const sheet =
      workbook.Sheets[workbook.SheetNames[0]];

    const customers =
      XLSX.utils.sheet_to_json(sheet);

    // Select first customer who has opted in
    const customer = customers.find(
      row =>
        String(row.whatsapp_opt_in || "")
          .trim()
          .toLowerCase() === "yes"
    );

    if (!customer) {
      return res.status(400).json({
        error: "No opted-in customer found in Excel"
      });
    }

    // Format Indian phone number
    let to = String(customer.phone || "")
      .replace(/\D/g, "");

    if (to.length === 10) {
      to = "91" + to;
    }

    if (!/^\d{10,15}$/.test(to)) {
      return res.status(400).json({
        error: "Invalid customer phone number in Excel"
      });
    }

    // Send message using WhatsApp Cloud API
    const response = await fetch(
      `https://graph.facebook.com/${GRAPH_API_VERSION}/${WHATSAPP_PHONE_NUMBER_ID}/messages`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${WHATSAPP_ACCESS_TOKEN}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          to: to,
          type: "text",
          text: {
            body: message
          }
        })
      }
    );

    const result = await response.json();

    if (!response.ok) {
      console.error("WhatsApp API error:", result);

      return res.status(response.status).json({
        error:
          result.error?.message ||
          "WhatsApp message failed"
      });
    }

    return res.json({
      success: true,
      customerName:
        customer.customer_name || "Customer",
      messageId: result.messages?.[0]?.id
    });

  } catch (error) {
    console.error("WhatsApp error:", error);

    return res.status(500).json({
      error:
        error.message ||
        "Unable to send WhatsApp message"
    });
  }
});

// ------------------------------------
// START SERVER
// ------------------------------------
app.listen(PORT, () => {
  console.log(
    `HAWAI API running at http://localhost:${PORT}`
  );
});
