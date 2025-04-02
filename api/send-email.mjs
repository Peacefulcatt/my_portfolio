let EmailJS;
try {
  EmailJS = await import('emailjs');
} catch (error) {
  console.error('Failed to import emailjs:', error);
  throw error;
}

export default async (req, res) => {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const server = EmailJS.server.connect({
      user: process.env.EMAILJS_SERVICE_ID,
      password: process.env.EMAILJS_PRIVATE_KEY,
      host: 'smtp.emailjs.com',
      ssl: true
    });

    await server.send({
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
    return res.status(500).json({ error: error.message });
  }
};