

import { useRef, useState } from "react";

import "./App.css";



const translations = {

  en: {

    welcome: "WELCOME TO HAWAI",

    choose: "Choose your language",

    chooseSub: "Select your preferred language to continue.",

    continue: "Continue →",

    setup: "Let's set up your business.",

    setupSub: "Set up your shop once. Create promotions anytime.",

    shop: "Shop name",

    shopPlaceholder: "e.g. Sri Lakshmi Stores",

    category: "Business category",

    selectCategory: "Select category",

    phone: "Contact number",

    phonePlaceholder: "Enter 10-digit mobile number",

    phoneError: "Enter a valid 10-digit mobile number.",

    save: "Save Profile →",

    dashboard: "MERCHANT DASHBOARD",

    hello: "Hey",

    promote: "What would you like to promote today?",

    offers: "Offers & Discounts",

    offersDesc: "Promote multiple discounted products",

    coupons: "Coupon Codes",

    couponsDesc: "Create special customer coupons",

    branch: "New Branch",

    branchDesc: "Announce your store opening",

    updates: "General Updates",

    updatesDesc: "Share business announcements",

    reminder: "Customer Re-engagement",

    reminderDesc: "Bring back customers with WhatsApp offers",

    back: "← Back to Dashboard",

    campaign: "CREATE YOUR CAMPAIGN",

    enter: "Fill in the details or use voice input.",

    voice: "🎙️ Speak your promotion",

    voiceSub: "Telugu • Hindi • English",

    product: "Product name",

    quantity: "Quantity",

    original: "Original price (₹)",

    offer: "Offer price (₹)",

    validity: "Offer valid until",

    add: "+ Add Another Product",

    remove: "Remove ✕",

    productTitle: "Products in this offer",

    discount: "discount",

    invalidOffer: "Check products. Offer price must be lower than original price.",

    couponCode: "Coupon code",

    discountType: "Discount type",

    percentage: "Percentage",

    fixed: "Fixed Amount (₹)",

    discountValue: "Discount value",

    minimum: "Minimum purchase (₹)",

    couponValidity: "Coupon valid until",

    branchName: "Branch name",

    address: "Branch address / Location",

    opening: "Opening date",

    branchPhone: "Branch contact number",

    title: "Announcement title",

    message: "Announcement message",

    updateValidity: "Valid until (optional)",

    preview: "CAMPAIGN PREVIEW",

    ready: "Your promotion is ready! 🎉",

    was: "Was",

    off: "OFF",

    minPurchase: "Minimum purchase",

    grand: "GRAND OPENING!",

    createAnother: "Create Another Promotion",

    customerName: "Customer name",

    customerPhone: "Customer WhatsApp number",

    inactive: "Last visit / Inactive period",

    days15: "15 days",

    days30: "30 days",

    days60: "60 days",

    days90: "90 days",

    specialOffer: "Special offer for this customer",

    specialPlaceholder: "e.g. Get 15% off on your next visit",

    generateMessage: "Generate WhatsApp Message →",

    whatsappPreview: "WHATSAPP MESSAGE PREVIEW",

    sendWhatsApp: "Open WhatsApp to Send ↗",

    whatsappNote: "Review the message in WhatsApp and press Send.",

    categories: [

      "Grocery Store", "Vegetables & Fruits",

      "Clothing", "Electronics", "Restaurant", "Other"

    ],

    languageNames: ["English", "తెలుగు", "हिन्दी"],

    languageSub: [

      "Continue in English",

      "తెలుగులో కొనసాగించండి",

      "हिंदी में जारी रखें"

    ]

  },



  te: {

    welcome: "హవాయికి స్వాగతం",

    choose: "మీ భాషను ఎంచుకోండి",

    chooseSub: "కొనసాగించడానికి మీకు నచ్చిన భాషను ఎంచుకోండి.",

    continue: "కొనసాగించండి →",

    setup: "మీ వ్యాపారాన్ని ప్రారంభిద్దాం.",

    setupSub: "ఒకసారి మీ షాప్ వివరాలు నమోదు చేయండి.",

    shop: "షాప్ పేరు",

    shopPlaceholder: "ఉదా: శ్రీ లక్ష్మి స్టోర్స్",

    category: "వ్యాపార రకం",

    selectCategory: "వ్యాపార రకాన్ని ఎంచుకోండి",

    phone: "ఫోన్ నంబర్",

    phonePlaceholder: "10 అంకెల మొబైల్ నంబర్",

    phoneError: "సరైన 10 అంకెల మొబైల్ నంబర్ నమోదు చేయండి.",

    save: "వివరాలను సేవ్ చేయండి →",

    dashboard: "వ్యాపార డాష్‌బోర్డ్",

    hello: "నమస్కారం",

    promote: "ఈరోజు మీరు ఏమి ప్రచారం చేయాలనుకుంటున్నారు?",

    offers: "ఆఫర్లు & డిస్కౌంట్లు",

    offersDesc: "తగ్గింపు ధరల ఉత్పత్తులను ప్రచారం చేయండి",

    coupons: "కూపన్ కోడ్లు",

    couponsDesc: "కస్టమర్ల కోసం ప్రత్యేక కూపన్లు",

    branch: "కొత్త బ్రాంచ్",

    branchDesc: "కొత్త షాప్ ప్రారంభాన్ని ప్రకటించండి",

    updates: "సాధారణ సమాచారం",

    updatesDesc: "వ్యాపార ప్రకటనలను పంచుకోండి",

    reminder: "కస్టమర్లను తిరిగి ఆహ్వానించండి",

    reminderDesc: "వాట్సాప్ ఆఫర్లతో పాత కస్టమర్లను తిరిగి రప్పించండి",

    back: "← డాష్‌బోర్డ్‌కు వెనక్కి",

    campaign: "ప్రచారాన్ని రూపొందించండి",

    enter: "వివరాలు నమోదు చేయండి లేదా వాయిస్ ఉపయోగించండి.",

    voice: "🎙️ మీ ఆఫర్ గురించి మాట్లాడండి",

    voiceSub: "తెలుగు • హిందీ • ఇంగ్లీష్",

    product: "ఉత్పత్తి పేరు",

    quantity: "పరిమాణం",

    original: "అసలు ధర (₹)",

    offer: "ఆఫర్ ధర (₹)",

    validity: "ఆఫర్ గడువు తేదీ",

    add: "+ మరో ఉత్పత్తిని జోడించండి",

    remove: "తొలగించండి ✕",

    productTitle: "ఆఫర్‌లోని ఉత్పత్తులు",

    discount: "తగ్గింపు",

    invalidOffer: "ఆఫర్ ధర అసలు ధర కంటే తక్కువగా ఉండాలి.",

    couponCode: "కూపన్ కోడ్",

    discountType: "డిస్కౌంట్ రకం",

    percentage: "శాతం",

    fixed: "స్థిర మొత్తం (₹)",

    discountValue: "డిస్కౌంట్ విలువ",

    minimum: "కనీస కొనుగోలు (₹)",

    couponValidity: "కూపన్ గడువు తేదీ",

    branchName: "బ్రాంచ్ పేరు",

    address: "బ్రాంచ్ చిరునామా",

    opening: "ప్రారంభ తేదీ",

    branchPhone: "బ్రాంచ్ ఫోన్ నంబర్",

    title: "ప్రకటన శీర్షిక",

    message: "ప్రకటన వివరాలు",

    updateValidity: "గడువు తేదీ (ఐచ్ఛికం)",

    preview: "ప్రచార వివరాలు",

    ready: "మీ ప్రచారం సిద్ధంగా ఉంది! 🎉",

    was: "ముందు ధర",

    off: "తగ్గింపు",

    minPurchase: "కనీస కొనుగోలు",

    grand: "గ్రాండ్ ఓపెనింగ్!",

    createAnother: "మరో ప్రచారాన్ని రూపొందించండి",

    customerName: "కస్టమర్ పేరు",

    customerPhone: "కస్టమర్ వాట్సాప్ నంబర్",

    inactive: "చివరిసారి షాప్‌కి వచ్చిన సమయం",

    days15: "15 రోజులు",

    days30: "30 రోజులు",

    days60: "60 రోజులు",

    days90: "90 రోజులు",

    specialOffer: "ప్రత్యేక ఆఫర్",

    specialPlaceholder: "ఉదా: తదుపరి కొనుగోలుపై 15% తగ్గింపు",

    generateMessage: "వాట్సాప్ సందేశాన్ని రూపొందించండి →",

    whatsappPreview: "వాట్సాప్ సందేశం",

    sendWhatsApp: "వాట్సాప్‌లో పంపండి ↗",

    whatsappNote: "వాట్సాప్‌లో సందేశాన్ని పరిశీలించి Send నొక్కండి.",

    categories: [

      "కిరాణా దుకాణం", "కూరగాయలు & పండ్లు",

      "దుస్తులు", "ఎలక్ట్రానిక్స్", "రెస్టారెంట్", "ఇతర"

    ],

    languageNames: ["English", "తెలుగు", "हिन्दी"],

    languageSub: [

      "Continue in English",

      "తెలుగులో కొనసాగించండి",

      "हिंदी में जारी रखें"

    ]

  },



  hi: {

    welcome: "हवाई में आपका स्वागत है",

    choose: "अपनी भाषा चुनें",

    chooseSub: "जारी रखने के लिए अपनी पसंदीदा भाषा चुनें।",

    continue: "आगे बढ़ें →",

    setup: "आइए आपका व्यवसाय सेट करें।",

    setupSub: "एक बार अपनी दुकान सेट करें। कभी भी प्रचार बनाएँ।",

    shop: "दुकान का नाम",

    shopPlaceholder: "जैसे: श्री लक्ष्मी स्टोर्स",

    category: "व्यवसाय की श्रेणी",

    selectCategory: "श्रेणी चुनें",

    phone: "संपर्क नंबर",

    phonePlaceholder: "10 अंकों का मोबाइल नंबर",

    phoneError: "सही 10 अंकों का मोबाइल नंबर दर्ज करें।",

    save: "प्रोफ़ाइल सेव करें →",

    dashboard: "व्यापारी डैशबोर्ड",

    hello: "नमस्ते",

    promote: "आज आप क्या प्रचार करना चाहते हैं?",

    offers: "ऑफर और छूट",

    offersDesc: "छूट वाले उत्पादों का प्रचार करें",

    coupons: "कूपन कोड",

    couponsDesc: "ग्राहकों के लिए विशेष कूपन बनाएँ",

    branch: "नई शाखा",

    branchDesc: "नई दुकान के उद्घाटन की घोषणा करें",

    updates: "सामान्य अपडेट",

    updatesDesc: "व्यापार संबंधी घोषणाएँ साझा करें",

    reminder: "ग्राहकों को वापस बुलाएँ",

    reminderDesc: "WhatsApp ऑफर से पुराने ग्राहकों को वापस लाएँ",

    back: "← डैशबोर्ड पर वापस जाएँ",

    campaign: "अपना प्रचार बनाएँ",

    enter: "जानकारी भरें या वॉइस इनपुट का उपयोग करें।",

    voice: "🎙️ अपने ऑफर के बारे में बोलें",

    voiceSub: "तेलुगु • हिंदी • अंग्रेज़ी",

    product: "उत्पाद का नाम",

    quantity: "मात्रा",

    original: "मूल कीमत (₹)",

    offer: "ऑफर कीमत (₹)",

    validity: "ऑफर की अंतिम तारीख",

    add: "+ एक और उत्पाद जोड़ें",

    remove: "हटाएँ ✕",

    productTitle: "इस ऑफर के उत्पाद",

    discount: "छूट",

    invalidOffer: "ऑफर कीमत मूल कीमत से कम होनी चाहिए।",

    couponCode: "कूपन कोड",

    discountType: "छूट का प्रकार",

    percentage: "प्रतिशत",

    fixed: "निश्चित राशि (₹)",

    discountValue: "छूट की राशि",

    minimum: "न्यूनतम खरीदारी (₹)",

    couponValidity: "कूपन की अंतिम तारीख",

    branchName: "शाखा का नाम",

    address: "शाखा का पता",

    opening: "उद्घाटन की तारीख",

    branchPhone: "शाखा का संपर्क नंबर",

    title: "घोषणा का शीर्षक",

    message: "घोषणा का संदेश",

    updateValidity: "अंतिम तारीख (वैकल्पिक)",

    preview: "प्रचार का पूर्वावलोकन",

    ready: "आपका प्रचार तैयार है! 🎉",

    was: "पहले",

    off: "छूट",

    minPurchase: "न्यूनतम खरीदारी",

    grand: "भव्य उद्घाटन!",

    createAnother: "एक और प्रचार बनाएँ",

    customerName: "ग्राहक का नाम",

    customerPhone: "ग्राहक का WhatsApp नंबर",

    inactive: "आखिरी बार दुकान आने का समय",

    days15: "15 दिन",

    days30: "30 दिन",

    days60: "60 दिन",

    days90: "90 दिन",

    specialOffer: "विशेष ऑफर",

    specialPlaceholder: "जैसे: अगली खरीदारी पर 15% की छूट",

    generateMessage: "WhatsApp संदेश बनाएँ →",

    whatsappPreview: "WHATSAPP संदेश का पूर्वावलोकन",

    sendWhatsApp: "WhatsApp पर भेजें ↗",

    whatsappNote: "WhatsApp में संदेश जाँचें और Send दबाएँ।",

    categories: [

      "किराना दुकान", "सब्जियाँ और फल",

      "कपड़े", "इलेक्ट्रॉनिक्स", "रेस्टोरेंट", "अन्य"

    ],

    languageNames: ["English", "తెలుగు", "हिन्दी"],

    languageSub: [

      "Continue in English",

      "తెలుగులో కొనసాగించండి",

      "हिंदी में जारी रखें"

    ]

  }

};



function parseOfferVoiceText(input) {

  const text = input.replace(/\s+/g, " ").trim();



  const originalMatch = text.match(

    /(?:original\s*price|regular\s*price|mrp)\s*(?:is|of|:|-)?\s*(?:₹|rs\.?|rupees?)?\s*(\d+(?:\.\d+)?)/i

  );

  const offerMatch = text.match(

    /(?:offer\s*price|selling\s*price|sale\s*price)\s*(?:is|of|:|-)?\s*(?:₹|rs\.?|rupees?)?\s*(\d+(?:\.\d+)?)/i

  );



  const quantityMatch = text.match(

    /\b(\d+(?:\.\d+)?)\s*(kg|kgs|kilograms?|g|grams?|litres?|liters?|ltr|l|ml|pieces?|pcs|packets?|packs?|dozen)\b/i

  );



  let name = text

    .replace(/(?:original\s*price|regular\s*price|mrp)\s*(?:is|of|:|-)?\s*(?:₹|rs\.?|rupees?)?\s*\d+(?:\.\d+)?/ig, "")

    .replace(/(?:offer\s*price|selling\s*price|sale\s*price)\s*(?:is|of|:|-)?\s*(?:₹|rs\.?|rupees?)?\s*\d+(?:\.\d+)?/ig, "")

    .replace(/\b(?:original\s*price|regular\s*price|mrp|offer\s*price|selling\s*price|sale\s*price)\b/ig, "")

    .replace(/\b\d+(?:\.\d+)?\s*(?:kg|kgs|kilograms?|g|grams?|litres?|liters?|ltr|l|ml|pieces?|pcs|packets?|packs?|dozen)\b/ig, "")

    .replace(/[,:;.!-]+/g, " ")

    .replace(/\s+/g, " ")

    .trim();



  return {

    name: name || text,

    quantity: quantityMatch ? `${quantityMatch[1]} ${quantityMatch[2]}` : "",

    originalPrice: originalMatch ? originalMatch[1] : "",

    offerPrice: offerMatch ? offerMatch[1] : ""

  };

}



export default function App() {

  const [language, setLanguage] = useState("");

  const [languageConfirmed, setLanguageConfirmed] = useState(false);



  const [profile, setProfile] = useState({

    shopName: "",

    category: "",

    phone: ""

  });



  const [saved, setSaved] = useState(false);

  const [promotion, setPromotion] = useState("");

  const [generated, setGenerated] = useState(false);

  const [error, setError] = useState("");



  const [products, setProducts] = useState([

    { name: "", quantity: "", originalPrice: "", offerPrice: "" }

  ]);



  const [offerValidity, setOfferValidity] = useState("");



  const [coupon, setCoupon] = useState({

    code: "",

    discountType: "Percentage",

    discount: "",

    minPurchase: "",

    validity: ""

  });



  const [branch, setBranch] = useState({

    name: "",

    address: "",

    openingDate: "",

    contact: ""

  });



  const [announcement, setAnnouncement] = useState({

    title: "",

    message: "",

    validity: ""

  });



  const [customer, setCustomer] = useState({

    name: "",

    phone: "",

    inactiveDays: "30",

    offer: ""

  });



  const [customerMessage, setCustomerMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [sendStatus, setSendStatus] = useState("");



  // Sarvam AI voice input state

  const [isRecording, setIsRecording] = useState(false);

  const [isTranscribing, setIsTranscribing] = useState(false);

  const [voiceTranscript, setVoiceTranscript] = useState("");

  const [voiceLanguage, setVoiceLanguage] = useState("");

  const [voiceError, setVoiceError] = useState("");

  const recorderRef = useRef(null);

  const audioStreamRef = useRef(null);

  const audioChunksRef = useRef([]);



  const t = translations[language] || translations.en;



  const promotionTypes = [

    { id: "offers", icon: "🏷️", name: t.offers, desc: t.offersDesc },

    { id: "coupons", icon: "🎟️", name: t.coupons, desc: t.couponsDesc },

    { id: "branch", icon: "🏪", name: t.branch, desc: t.branchDesc },

    { id: "updates", icon: "📢", name: t.updates, desc: t.updatesDesc },

    { id: "reminder", icon: "💌", name: t.reminder, desc: t.reminderDesc }

  ];



  const addProduct = () => {

    setProducts(prev => [

      ...prev,

      { name: "", quantity: "", originalPrice: "", offerPrice: "" }

    ]);

  };



  const updateProduct = (index, key, value) => {

    setProducts(prev =>

      prev.map((p, i) =>

        i === index ? { ...p, [key]: value } : p

      )

    );

  };



  const removeProduct = index => {

    setProducts(prev => prev.filter((_, i) => i !== index));

  };



  const discountPercent = p =>

    Math.round(

      (1 - Number(p.offerPrice) / Number(p.originalPrice)) * 100

    );



  const handleGenerate = e => {

    e.preventDefault();

    setError("");



    if (promotion === "offers") {

      const invalid = products.some(p =>

        !p.name.trim() ||

        p.originalPrice === "" ||

        p.offerPrice === "" ||

        Number(p.originalPrice) <= 0 ||

        Number(p.offerPrice) < 0 ||

        Number(p.offerPrice) >= Number(p.originalPrice)

      );



      if (invalid) {

        setError(t.invalidOffer);

        return;

      }

    }



    if (

      promotion === "coupons" &&

      coupon.discountType === "Percentage" &&

      (Number(coupon.discount) <= 0 || Number(coupon.discount) > 100)

    ) {

      setError(t.invalidOffer);

      return;

    }



    if (promotion === "reminder") {

      if (!/^[6-9][0-9]{9}$/.test(customer.phone)) {

        setError(t.phoneError);

        return;

      }



      if (!customer.name.trim()) {

        setError(t.customerName + " is required.");

        return;

      }



      const messages = {

        en: `Hey ${customer.name}! 😊 It's been a while since your last visit to ${profile.shopName}. We miss seeing you! ${customer.offer ? `Here's something special for you: ${customer.offer}. ` : ""}We have exciting offers waiting for you. Visit us again soon!`,

        te: `నమస్కారం ${customer.name} గారు! 😊 మీరు ${profile.shopName} కి వచ్చి చాలా రోజులైంది. మిమ్మల్ని మళ్లీ చూడాలని ఉంది! ${customer.offer ? `మీ కోసం ప్రత్యేక ఆఫర్: ${customer.offer}. ` : ""}మా దగ్గర మంచి ఆఫర్లు ఉన్నాయి. మళ్లీ మా షాప్‌కి రండి!`,

        hi: `नमस्ते ${customer.name}! 😊 आपको ${profile.shopName} आए काफी समय हो गया है। हमें आपकी याद आती है! ${customer.offer ? `आपके लिए खास ऑफर: ${customer.offer}. ` : ""}हमारे पास आपके लिए शानदार ऑफर हैं। जल्द ही फिर से पधारें!`

      };



      setCustomerMessage(messages[language] || messages.en);
    } else if (promotion === "offers") {
      const productLines = products.map(product =>
        `${product.name}${product.quantity ? ` (${product.quantity})` : ""}: ₹${product.offerPrice} (was ₹${product.originalPrice})`
      ).join("\n");
      setCustomerMessage(`🎉 Special offers at ${profile.shopName}!
${productLines}
Offer valid until ${offerValidity}. Visit us today!`);
    } else if (promotion === "coupons") {
      const discountText = coupon.discountType === "Percentage" ? `${coupon.discount}% OFF` : `₹${coupon.discount} OFF`;
      setCustomerMessage(`🎟️ Special coupon from ${profile.shopName}!
Use code: ${coupon.code}
Get ${discountText}${coupon.minPurchase ? ` on purchases above ₹${coupon.minPurchase}` : ""}.
Valid until ${coupon.validity}. Visit us soon!`);
    } else if (promotion === "branch") {
      setCustomerMessage(`🏪 Exciting news from ${profile.shopName}!
Our new branch, ${branch.name}, is opening on ${branch.openingDate}.
Location: ${branch.address}${branch.contact ? `
Contact: ${branch.contact}` : ""}
We look forward to welcoming you!`);
    } else if (promotion === "updates") {
      setCustomerMessage(`📢 Update from ${profile.shopName}: ${announcement.title}
${announcement.message}${announcement.validity ? `
Valid until: ${announcement.validity}` : ""}`);
    }

    setSendStatus("");
    setGenerated(true);

  };



  const resetCampaign = () => {

    if (recorderRef.current && recorderRef.current.state !== "inactive") {

      recorderRef.current.stop();

    }

    setGenerated(false);

    setPromotion("");

    setError("");

    setCustomerMessage("");

    setVoiceTranscript("");

    setVoiceLanguage("");

    setVoiceError("");



    setProducts([

      { name: "", quantity: "", originalPrice: "", offerPrice: "" }

    ]);



    setOfferValidity("");



    setCoupon({

      code: "",

      discountType: "Percentage",

      discount: "",

      minPurchase: "",

      validity: ""

    });



    setBranch({

      name: "",

      address: "",

      openingDate: "",

      contact: ""

    });



    setAnnouncement({

      title: "",

      message: "",

      validity: ""

    });



    setCustomer({

      name: "",

      phone: "",

      inactiveDays: "30",

      offer: ""

    });

  };



  const sendWhatsApp = async () => {
    setSending(true);
    setSendStatus("");
    try {
      const response = await fetch("http://localhost:5000/api/whatsapp/test", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: customerMessage })
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "WhatsApp send failed");
      setSendStatus(`Message sent successfully to ${result.customerName || "customer"}!`);
    } catch (err) {
      setSendStatus(err.message || "Unable to send WhatsApp message");
    } finally {
      setSending(false);
    }
  };

  // Record up to 30 seconds and send the audio to our backend.

  const startVoiceRecording = async () => {

    setVoiceError("");

    setVoiceTranscript("");

    setVoiceLanguage("");



    if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) {

      setVoiceError("Your browser does not support microphone recording. Please use the latest Chrome or Edge.");

      return;

    }



    try {

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      audioStreamRef.current = stream;

      audioChunksRef.current = [];



      const mimeType = MediaRecorder.isTypeSupported("audio/webm;codecs=opus")

        ? "audio/webm;codecs=opus"

        : "audio/webm";

      const recorder = new MediaRecorder(stream, { mimeType });

      recorderRef.current = recorder;



      recorder.ondataavailable = event => {

        if (event.data && event.data.size > 0) {

          audioChunksRef.current.push(event.data);

        }

      };



      recorder.onerror = () => {

        setVoiceError("Recording failed. Please check your microphone and try again.");

        setIsRecording(false);

        stream.getTracks().forEach(track => track.stop());

      };



      recorder.onstop = async () => {

        stream.getTracks().forEach(track => track.stop());

        setIsRecording(false);

        setIsTranscribing(true);



        try {

          const audioBlob = new Blob(audioChunksRef.current, {

            type: recorder.mimeType || "audio/webm"

          });



          if (!audioBlob.size) {

            throw new Error("No audio was captured. Please record again.");

          }



          const formData = new FormData();

          formData.append("audio", audioBlob, "hawai-recording.webm");



          const response = await fetch("http://localhost:5000/api/transcribe", {

            method: "POST",

            body: formData

          });

          const result = await response.json();



          if (!response.ok) {

            throw new Error(result.error || "Transcription failed. Please try again.");

          }



          if (!result.transcript?.trim()) {

            throw new Error("No speech was detected. Please speak clearly and try again.");

          }



          setVoiceTranscript(result.transcript.trim());

          setVoiceLanguage(result.language || "");

        } catch (err) {

          setVoiceError(err.message || "Unable to transcribe audio. Please try again.");

        } finally {

          setIsTranscribing(false);

          audioChunksRef.current = [];

        }

      };



      recorder.start(250);

      setIsRecording(true);

    } catch (err) {

      setVoiceError(

        err.name === "NotAllowedError"

          ? "Microphone permission was blocked. Allow microphone access in your browser and try again."

          : "Could not access your microphone. Check that it is connected and try again."

      );

    }

  };



  const stopVoiceRecording = () => {

    if (recorderRef.current && recorderRef.current.state !== "inactive") {

      recorderRef.current.stop();

    }

  };



  // Apply the transcript to the main text field for the selected campaign.

  const applyVoiceTranscript = () => {

    const text = voiceTranscript.trim();

    if (!text) return;



    if (promotion === "offers") {

      const extracted = parseOfferVoiceText(text);

      setProducts(prev => prev.map((product, index) =>

        index === 0

          ? {

              ...product,

              name: extracted.name,

              quantity: extracted.quantity || product.quantity,

              originalPrice: extracted.originalPrice || product.originalPrice,

              offerPrice: extracted.offerPrice || product.offerPrice

            }

          : product

      ));

    } else if (promotion === "coupons") {

      setCoupon(prev => ({ ...prev, code: text.toUpperCase() }));

    } else if (promotion === "branch") {

      setBranch(prev => ({ ...prev, address: text }));

    } else if (promotion === "updates") {

      setAnnouncement(prev => ({ ...prev, message: text }));

    } else if (promotion === "reminder") {

      setCustomer(prev => ({ ...prev, offer: text }));

    }



    setVoiceError("");

  };



  const field = (label, props = {}) => (

    <>

      <label>{label}</label>

      <input {...props} />

    </>

  );



  return (

    <div className="app">

      <nav className="navbar">

        <h1>HAWAI<span>.</span></h1>

        <span>Merchant Studio</span>

      </nav>



      <main className="container">



        {/* LANGUAGE SELECTION */}

        {!languageConfirmed ? (

          <section className="panel language-panel">

            <p className="eyebrow">{t.welcome}</p>

            <h2>{t.choose}</h2>

            <p className="muted">{t.chooseSub}</p>



            <div className="language-options">

              {[

                { code: "en", name: "English", symbol: "A" },

                { code: "te", name: "తెలుగు", symbol: "అ" },

                { code: "hi", name: "हिन्दी", symbol: "अ" }

              ].map(item => (

                <button

                  type="button"

                  key={item.code}

                  className={`language-card ${

                    language === item.code ? "active-language" : ""

                  }`}

                  onClick={() => setLanguage(item.code)}

                >

                  <span className="language-symbol">{item.symbol}</span>

                  <strong>{item.name}</strong>

                  {language === item.code && (

                    <span className="language-check">✓</span>

                  )}

                </button>

              ))}

            </div>



            <button

              className="primary"

              disabled={!language}

              style={{ width: "100%" }}

              onClick={() => setLanguageConfirmed(true)}

            >

              {t.continue}

            </button>

          </section>

        ) : !saved ? (



          /* MERCHANT REGISTRATION */



          <section className="panel">

            <button

              className="back"

              type="button"

              onClick={() => setLanguageConfirmed(false)}

            >

              ← Change language

            </button>



            <p className="eyebrow">{t.welcome}</p>

            <h2>{t.setup}</h2>

            <p className="muted">{t.setupSub}</p>



            <form onSubmit={e => {

              e.preventDefault();

              setSaved(true);

            }}>

              {field(t.shop, {

                required: true,

                placeholder: t.shopPlaceholder,

                value: profile.shopName,

                onChange: e => setProfile({

                  ...profile,

                  shopName: e.target.value

                })

              })}



              <label>{t.category}</label>

              <select

                required

                value={profile.category}

                onChange={e => setProfile({

                  ...profile,

                  category: e.target.value

                })}

              >

                <option value="">{t.selectCategory}</option>

                {t.categories.map(c => <option key={c}>{c}</option>)}

              </select>



              {field(t.phone, {

                required: true,

                type: "tel",

                inputMode: "numeric",

                maxLength: 10,

                pattern: "[6-9][0-9]{9}",

                placeholder: t.phonePlaceholder,

                value: profile.phone,

                onChange: e => setProfile({

                  ...profile,

                  phone: e.target.value.split("").filter(char => char >= "0" && char <= "9").join("").slice(0, 10)

                })

              })}



              {profile.phone.length > 0 &&

                !/^[6-9][0-9]{9}$/.test(profile.phone) && (

                  <small style={{ color: "red" }}>{t.phoneError}</small>

                )}



              <button className="primary">{t.save}</button>

            </form>

          </section>



        ) : !promotion ? (



          /* DASHBOARD */



          <section>

            <p className="eyebrow">{t.dashboard}</p>

            <h2>{t.hello}, {profile.shopName}! 👋</h2>

            <p className="muted">{t.promote}</p>



            <div className="cards">

              {promotionTypes.map(item => (

                <button

                  key={item.id}

                  className="promo-card"

                  onClick={() => {

                    setPromotion(item.id);

                    setGenerated(false);

                    setVoiceTranscript("");

                    setVoiceLanguage("");

                    setVoiceError("");

                  }}

                >

                  <span className="promo-icon">{item.icon}</span>

                  <strong>{item.name}</strong>

                  <small>{item.desc}</small>

                </button>

              ))}

            </div>

          </section>



        ) : !generated ? (



          /* CAMPAIGN FORMS */



          <section className="panel">

            <button className="back" onClick={() => setPromotion("")}>

              {t.back}

            </button>



            <p className="eyebrow">{t.campaign}</p>

            <h2>{promotionTypes.find(p => p.id === promotion)?.name}</h2>

            <p className="muted">{t.enter}</p>



            <div className="voice-tools">

              <button

                className={`voice-button ${isRecording ? "recording" : ""}`}

                type="button"

                onClick={isRecording ? stopVoiceRecording : startVoiceRecording}

                disabled={isTranscribing}

              >

                {isRecording

                  ? "⏹ Stop recording"

                  : isTranscribing

                    ? "⏳ Transcribing your voice..."

                    : t.voice}

                <small>

                  {isRecording

                    ? "Speak now in Telugu, Hindi or English. Tap to stop."

                    : isTranscribing

                      ? "Please wait while Sarvam AI converts speech to text."

                      : t.voiceSub + " • Record up to 30 seconds"}

                </small>

              </button>



              {voiceError && <p className="voice-error" role="alert">{voiceError}</p>}



              {voiceTranscript && (

                <div className="voice-transcript">

                  <label htmlFor="voice-transcript">Recognised speech {voiceLanguage ? `(${voiceLanguage})` : ""}</label>

                  <textarea

                    id="voice-transcript"

                    rows={3}

                    value={voiceTranscript}

                    onChange={e => setVoiceTranscript(e.target.value)}

                  />

                  <button type="button" className="apply-transcript" onClick={applyVoiceTranscript}>

                    Use this text in the campaign →

                  </button>

                  <small>

                    Applies to {promotion === "offers" ? "the product name, quantity and prices when detected" : promotion === "coupons" ? "the coupon code" : promotion === "branch" ? "the branch address" : promotion === "updates" ? "the announcement message" : "the customer's special offer"}. You can edit it afterward.

                  </small>

                </div>

              )}

            </div>



            <form onSubmit={handleGenerate}>



              {/* OFFERS */}



              {promotion === "offers" && (

                <>

                  <h3>{t.productTitle}</h3>



                  {products.map((p, index) => (

                    <div className="product-entry" key={index}>

                      <div className="product-heading">

                        <strong>{t.product} {index + 1}</strong>

                        {products.length > 1 && (

                          <button

                            type="button"

                            className="remove-btn"

                            onClick={() => removeProduct(index)}

                          >

                            {t.remove}

                          </button>

                        )}

                      </div>



                      {field(t.product, {

                        required: true,

                        placeholder: "e.g. Tomatoes",

                        value: p.name,

                        onChange: e => updateProduct(index, "name", e.target.value)

                      })}



                      {field(t.quantity, {

                        placeholder: "e.g. 1 kg",

                        value: p.quantity,

                        onChange: e => updateProduct(index, "quantity", e.target.value)

                      })}



                      {field(t.original, {

                        required: true,

                        type: "number",

                        min: "0.01",

                        step: "0.01",

                        value: p.originalPrice,

                        onChange: e => updateProduct(index, "originalPrice", e.target.value)

                      })}



                      {field(t.offer, {

                        required: true,

                        type: "number",

                        min: "0",

                        step: "0.01",

                        value: p.offerPrice,

                        onChange: e => updateProduct(index, "offerPrice", e.target.value)

                      })}



                      {Number(p.originalPrice) > 0 &&

                        p.offerPrice !== "" &&

                        Number(p.offerPrice) < Number(p.originalPrice) && (

                          <small className="discount-label">

                            {discountPercent(p)}% {t.discount}

                          </small>

                        )}

                    </div>

                  ))}



                  <button type="button" className="add-product" onClick={addProduct}>

                    {t.add}

                  </button>



                  {field(t.validity, {

                    required: true,

                    type: "date",

                    value: offerValidity,

                    onChange: e => setOfferValidity(e.target.value)

                  })}

                </>

              )}



              {/* COUPONS */}



              {promotion === "coupons" && (

                <>

                  {field(t.couponCode, {

                    required: true,

                    placeholder: "HAWAI20",

                    value: coupon.code,

                    onChange: e => setCoupon({

                      ...coupon,

                      code: e.target.value.toUpperCase()

                    })

                  })}



                  <label>{t.discountType}</label>

                  <select

                    value={coupon.discountType}

                    onChange={e => setCoupon({

                      ...coupon,

                      discountType: e.target.value

                    })}

                  >

                    <option value="Percentage">{t.percentage}</option>

                    <option value="Fixed Amount (₹)">{t.fixed}</option>

                  </select>



                  {field(t.discountValue, {

                    required: true,

                    type: "number",

                    min: "1",

                    max: coupon.discountType === "Percentage" ? "100" : undefined,

                    value: coupon.discount,

                    onChange: e => setCoupon({

                      ...coupon,

                      discount: e.target.value

                    })

                  })}



                  {field(t.minimum, {

                    type: "number",

                    min: "0",

                    value: coupon.minPurchase,

                    onChange: e => setCoupon({

                      ...coupon,

                      minPurchase: e.target.value

                    })

                  })}



                  {field(t.couponValidity, {

                    required: true,

                    type: "date",

                    value: coupon.validity,

                    onChange: e => setCoupon({

                      ...coupon,

                      validity: e.target.value

                    })

                  })}

                </>

              )}



              {/* NEW BRANCH */}



              {promotion === "branch" && (

                <>

                  {field(t.branchName, {

                    required: true,

                    value: branch.name,

                    onChange: e => setBranch({

                      ...branch,

                      name: e.target.value

                    })

                  })}



                  <label>{t.address}</label>

                  <textarea

                    required

                    rows={3}

                    value={branch.address}

                    onChange={e => setBranch({

                      ...branch,

                      address: e.target.value

                    })}

                  />



                  {field(t.opening, {

                    required: true,

                    type: "date",

                    value: branch.openingDate,

                    onChange: e => setBranch({

                      ...branch,

                      openingDate: e.target.value

                    })

                  })}



                  {field(t.branchPhone, {

                    type: "tel",

                    inputMode: "numeric",

                    maxLength: 10,

                    pattern: "[6-9][0-9]{9}",

                    value: branch.contact,

                    onChange: e => setBranch({

                      ...branch,

                      contact: e.target.value.replace(/\D/g, "").slice(0, 10)

                    })

                  })}

                </>

              )}



              {/* GENERAL UPDATES */}



              {promotion === "updates" && (

                <>

                  {field(t.title, {

                    required: true,

                    value: announcement.title,

                    onChange: e => setAnnouncement({

                      ...announcement,

                      title: e.target.value

                    })

                  })}



                  <label>{t.message}</label>

                  <textarea

                    required

                    rows={5}

                    value={announcement.message}

                    onChange={e => setAnnouncement({

                      ...announcement,

                      message: e.target.value

                    })}

                  />



                  {field(t.updateValidity, {

                    type: "date",

                    value: announcement.validity,

                    onChange: e => setAnnouncement({

                      ...announcement,

                      validity: e.target.value

                    })

                  })}

                </>

              )}



              {/* CUSTOMER RE-ENGAGEMENT */}



              {promotion === "reminder" && (

                <>

                  {field(t.customerName, {

                    required: true,

                    placeholder: "e.g. Rahul",

                    value: customer.name,

                    onChange: e => setCustomer({

                      ...customer,

                      name: e.target.value

                    })

                  })}



                  {field(t.customerPhone, {

                    required: true,

                    type: "tel",

                    inputMode: "numeric",

                    maxLength: 10,

                    pattern: "[6-9][0-9]{9}",

                    placeholder: "10-digit WhatsApp number",

                    value: customer.phone,

                    onChange: e => setCustomer({

                      ...customer,

                      phone: e.target.value.split("").filter(char => char >= "0" && char <= "9").join("").slice(0, 10)

                    })

                  })}



                  <label>{t.inactive}</label>

                  <select

                    value={customer.inactiveDays}

                    onChange={e => setCustomer({

                      ...customer,

                      inactiveDays: e.target.value

                    })}

                  >

                    <option value="15">{t.days15}</option>

                    <option value="30">{t.days30}</option>

                    <option value="60">{t.days60}</option>

                    <option value="90">{t.days90}</option>

                  </select>



                  {field(t.specialOffer, {

                    placeholder: t.specialPlaceholder,

                    value: customer.offer,

                    onChange: e => setCustomer({

                      ...customer,

                      offer: e.target.value

                    })

                  })}



                  <small style={{ color: "#817b91", lineHeight: 1.5 }}>

                    Only send promotional messages to customers who have agreed to receive them.

                  </small>

                </>

              )}



              {error && (

                <p style={{ color: "red", fontSize: 13 }}>{error}</p>

              )}



              <button className="primary" type="submit">

                {promotion === "reminder" ? t.generateMessage : t.continue}

              </button>

            </form>

          </section>



        ) : (



          /* PREVIEW */



          <section className="panel preview-panel">

            <button className="back" type="button" onClick={resetCampaign}>← Back to dashboard</button>

            <p className="eyebrow">

              {promotion === "reminder" ? t.whatsappPreview : t.preview}

            </p>

            <h2 className="preview-ready">{t.ready}</h2>



            {promotion === "offers" && (

              <div className="campaign-preview offer-campaign">

                <div className="preview-brand">{profile.shopName}</div>

                <div className="preview-kicker">SPECIAL OFFER</div>

                <h2 className="preview-main-title">{t.offers}</h2>

                <div className="preview-product-list">

                  {products.map((p, i) => (

                    <article className="preview-product-card" key={i}>

                      <div className="preview-product-top">

                        <div>

                          <span className="preview-label">TODAY'S DEAL</span>

                          <h3>{p.name}</h3>

                          {p.quantity && <p className="preview-quantity">{p.quantity}</p>}

                        </div>

                        {Number(p.originalPrice) > 0 && Number(p.offerPrice) < Number(p.originalPrice) && (

                          <span className="preview-discount-badge">{discountPercent(p)}% OFF</span>

                        )}

                      </div>

                      <div className="preview-price-row">

                        <strong>₹{p.offerPrice}</strong>

                        <span>{t.was} <s>₹{p.originalPrice}</s></span>

                      </div>

                    </article>

                  ))}

                </div>

                <div className="preview-validity">⏳ {t.validity}: {offerValidity}</div>

                <div className="preview-footer">Visit us today • Limited-time offer</div>

              </div>

            )}



            {promotion === "coupons" && (

              <div className="campaign-preview coupon-campaign">

                <div className="preview-brand">{profile.shopName}</div>

                <div className="coupon-icon">🎟️</div>

                <div className="preview-kicker">A LITTLE SOMETHING FOR YOU</div>

                <h2 className="preview-main-title">EXCLUSIVE COUPON</h2>

                <div className="coupon-code-box">

                  <span>USE CODE</span>

                  <strong>{coupon.code}</strong>

                </div>

                <div className="coupon-discount">{coupon.discount}{coupon.discountType === "Percentage" ? "%" : "₹"} <span>OFF</span></div>

                <p className="preview-support-text">On your next purchase</p>

                <div className="preview-info-grid">

                  <div><span>MINIMUM PURCHASE</span><strong>₹{coupon.minPurchase || 0}</strong></div>

                  <div><span>VALID UNTIL</span><strong>{coupon.validity}</strong></div>

                </div>

              </div>

            )}



            {promotion === "branch" && (

              <div className="campaign-preview branch-campaign">

                <div className="branch-topline">{profile.shopName}</div>

                <div className="branch-hero-icon">🏪</div>

                <div className="preview-kicker">YOU'RE INVITED</div>

                <h2 className="branch-grand-title">{t.grand}</h2>

                <h3 className="branch-name">{branch.name}</h3>

                <div className="branch-date">📅 {branch.openingDate}</div>

                <div className="branch-details">

                  <p><strong>📍 Location</strong><br />{branch.address}</p>

                  {branch.contact && <p><strong>☎ Contact</strong><br />{branch.contact}</p>}

                </div>

                <div className="preview-footer">We look forward to welcoming you!</div>

              </div>

            )}



            {promotion === "updates" && (

              <div className="campaign-preview updates-campaign">

                <div className="preview-brand">{profile.shopName}</div>

                <div className="updates-icon">📢</div>

                <div className="preview-kicker">A MESSAGE FROM US</div>

                <h2 className="updates-title">{announcement.title}</h2>

                <p className="updates-message">{announcement.message}</p>

                {announcement.validity && <div className="preview-validity">Valid until: {announcement.validity}</div>}

                <div className="preview-footer">Thank you for being a valued customer</div>

              </div>

            )}



            <div className="whatsapp-send-section">
              <button
                type="button"
                className="primary preview-action"
                onClick={sendWhatsApp}
                disabled={sending || !customerMessage.trim()}
              >
                {sending ? "Sending..." : "Send WhatsApp ↗"}
              </button>
              {sendStatus && <p className="muted preview-note" role="status">{sendStatus}</p>}
            </div>

            <button className="primary preview-action" onClick={resetCampaign}>

              {t.createAnother}

            </button>

          </section>

        )}



      </main>

    </div>

  );

}
