import nodemailer from 'nodemailer';

export default async (req, res) => {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Create a transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // Replace with your SMTP host
      port: 587, // Use 465 for SSL or 587 for TLS
      secure: false, // Set to true if using port 465
      auth: {
        user: process.env.SMTP_USER, // Your email address
        pass: process.env.SMTP_PASS, // Your email password or app-specific password
      },
    });

    // Send the email
    await transporter.sendMail({
      from: `"${name}" <${email}>`, // Sender's name and email
      to: 'umutyldz2626@gmail.com', // Recipient's email
      subject: `New message from ${name}`, // Email subject
      text: message, // Plain text body
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`, // HTML body
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ error: error.message });
  }
};