const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  // SMTP setup (use Gmail, Outlook, etc.)
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "krithikgr323@gmail.com",   // your email
      pass: "ehdi srrf uqwa neuv",     // use App Password (not normal password!)
    },
  });

  let mailOptions = {
    from: email,
    to: "krithikgr323@gmail.com",
    subject: `New Enquiry from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Message Sent Successfully!");
  } catch (error) {
    res.status(500).send("Error sending email: " + error.message);
  }
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
