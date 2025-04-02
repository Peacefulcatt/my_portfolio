const { default: EmailJS } = require('emailjs');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;

    const emailjs = EmailJS.server.connect({
      host: 'smtp.emailjs.com',
      ssl: true,
      // These are the ONLY credentials needed in 2024:
      user: process.env.EMAILJS_SERVICE_ID,  // Your SERVICE ID
      password: process.env.EMAILJS_PRIVATE_KEY // Your PRIVATE KEY
    });

    await emailjs.send({
      from: email,
      to: 'umutyldz2626@gmail.com',
      subject: `New message from ${name}`,
      text: message,
      attachment: [{
        data: `<p>Name: ${name}<br>Email: ${email}<br>Message: ${message}</p>`,
        alternative: true
      }]
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ 
      error: 'Failed to send email',
      details: error.message 
    });
  }
};