require("dotenv").config();
const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Step 1: Get Access Token
async function getAccessToken() {
  const auth = Buffer.from(
    `${process.env.CONSUMER_KEY}:${process.env.CONSUMER_SECRET}`
  ).toString("base64");

  const response = await axios.get(
    "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
    {
      headers: { Authorization: `Basic ${auth}` },
    }
  );

  return response.data.access_token;
}

// Step 2: STK Push endpoint
app.post("/stkpush", async (req, res) => {
  try {
    const { phone, amount } = req.body;
    const token = await getAccessToken();

    const timestamp = new Date()
      .toISOString()
      .replace(/[-T:.Z]/g, "")
      .substring(0, 14);

    const password = Buffer.from(
      process.env.SHORTCODE + process.env.PASSKEY + timestamp
    ).toString("base64");

    const response = await axios.post(
      "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
      {
        BusinessShortCode: process.env.SHORTCODE,
        Password: password,
        Timestamp: timestamp,
        TransactionType: "CustomerPayBillOnline",
        Amount: amount,
        PartyA: phone,
        PartyB: process.env.SHORTCODE,
        PhoneNumber: phone,
        CallBackURL: process.env.CALLBACK_URL,
        AccountReference: "KFC Order",
        TransactionDesc: "Payment for Order",
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    res.json(response.data);
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: "STK Push Failed" });
  }
});

// Step 3: Callback URL
app.post("/callback", (req, res) => {
  console.log("M-Pesa Callback:", req.body);
  res.sendStatus(200);
});

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
