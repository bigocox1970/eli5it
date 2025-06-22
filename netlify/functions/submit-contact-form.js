require('dotenv').config();
const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { name, email, message } = JSON.parse(event.body);

  if (!name || !email || !message) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Name, email, and message are required' }) };
  }

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  try {
    // 1. Send confirmation email to the user
    await transporter.sendMail({
      from: `"eli5it.app" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "We've received your message!",
      html: `
        <div style="font-family: sans-serif; padding: 40px; text-align: center;">
          <h1 style="color: #333;">Thanks for reaching out!</h1>
          <p style="font-size: 16px; color: #555;">
            We've received your message and will get back to you as soon as possible.
          </p>
          <p style="font-size: 12px; color: #aaa; margin-top: 40px;">
            The eli5it.app Team
          </p>
        </div>
      `,
    });

    // 2. Send notification email to the admin
    await transporter.sendMail({
      from: `"eli5it.app Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.WAITLIST_EMAIL_ADDRESS, // Sending to the same address as the waitlist for now
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="background-color: #f4f4f4; border-left: 4px solid #ccc; padding: 10px;">${message}</p>
        </div>
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Successfully submitted form.' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'There was an error. Please try again later.' }),
    };
  }
}; 