// Use the exact package name shown in npm
const EmailJS = require('emailjs').default;

module.exports = async (req, res) => {
  console.log('Incoming request'); // Verify function is triggered

  try {
    // 1. Verify environment variables
    if (!process.env.EMAILJS_SERVICE_ID || !process.env.EMAILJS_PRIVATE_KEY) {
      throw new Error('Missing EmailJS credentials in environment variables');
    }

    // 2. Only allow POST requests
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    // 3. Parse request body
    const { name, email, message } = typeof req.body === 'string' 
      ? JSON.parse(req.body) 
      : req.body;

    // 4. Initialize EmailJS
    const emailjs = EmailJS.server.connect({
      user: process.env.EMAILJS_SERVICE_ID,
      password: process.env.EMAILJS_PRIVATE_KEY,
      host: 'smtp.emailjs.com',
      ssl: true
    });

    // 5. Send email
    await emailjs.send({
      from: email,
      to: 'umutyldz2626@gmail.com', // Your receiving email
      subject: `New message from ${name}`,
      text: message,
      attachment: [{
        data: `<p><strong>Name:</strong> ${name}<br><strong>Email:</strong> ${email}<br><strong>Message:</strong> ${message}</p>`,
        alternative: true
      }]
    });

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error('Full error details:', {
      message: error.message,
      stack: error.stack,
      environment: {
        hasServiceId: !!process.env.EMAILJS_SERVICE_ID,
        hasPrivateKey: !!process.env.EMAILJS_PRIVATE_KEY
      }
    });
    return res.status(500).json({ 
      error: 'Failed to send email',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};