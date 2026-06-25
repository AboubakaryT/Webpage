require('dotenv').config();

const express = require("express");
const app = express();
const { Resend } = require('resend');
const resend = new Resend(process.env.RESEND_API_KEY);

const cors = require("cors");
const allowedOrigins = [
  "https://atraore.com",
  "https://www.atraore.com",
  "https://aboubakaryt.github.io",
  "http://localhost:5173",
];

app.use(cors({ origin: allowedOrigins }));
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ status: "ok" });
});

app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "Missing fields" });
  }

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      replyTo: email,
      to: 'atraore.dev@gmail.com',
      subject: 'New contact form message',
      html: `Name: ${name}, Email: ${email}, Message: ${message}`,
    });
    res.json({ success: true });
  } catch (error) {
    console.error("Failed to send email:", error);
    res.status(500).json({ success: false, error: "Failed to send email" });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
