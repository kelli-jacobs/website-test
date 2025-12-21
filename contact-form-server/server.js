const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: "1mb" }));

app.get("/", (req, res) => {
  res.send("Contact form server is running.");
});

app.post("/api/contact", async (req, res) => {
  const { name, email, phone, contactMethod, message } = req.body || {};

  if (!name || !email || !phone || !contactMethod || !message) {
    return res.status(400).json({
      ok: false,
      error: "Missing required fields: name, email, phone, contactMethod, message"
    });
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;
  const toAddress = process.env.CONTACT_TO || gmailUser;

  if (!gmailUser || !gmailPass) {
    return res.status(500).json({
      ok: false,
      error: "Server email is not configured"
    });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailPass
    }
  });

  const timestamp = new Date().toISOString();
  const subject = `New contact form message from ${name}`;
  const text = [
    `Time: ${timestamp}`,
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "N/A"}`,
    `Preferred Contact: ${contactMethod || "N/A"}`,
    "",
    message
  ].join("\n");

  try {
    await transporter.sendMail({
      from: gmailUser,
      to: toAddress,
      replyTo: email,
      subject,
      text
    });

    return res.json({ ok: true });
  } catch (err) {
    console.error("Email send failed", err);
    return res.status(500).json({
      ok: false,
      error: "Failed to send message"
    });
  }
});

app.listen(PORT, () => {
  console.log(`Contact form server listening on port ${PORT}`);
});
