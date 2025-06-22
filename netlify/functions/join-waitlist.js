require('dotenv').config();
const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
  // Netlify functions are triggered by HTTP requests, we only want to handle POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { email } = JSON.parse(event.body);

  if (!email) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Email is required' }) };
  }

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: true, // true for 465, false for other ports
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
      subject: "You're on the waitlist for eli5it.app! 🎉",
      html: `
        <div style="font-family: sans-serif; text-align: center; padding: 40px;">
          <h1 style="color: #333;">Welcome aboard!</h1>
          <p style="font-size: 16px; color: #555;">
            Thanks for joining the waitlist for eli5it.app. You're one step closer to revolutionizing your learning.
          </p>
          <p style="font-size: 16px; color: #555;">We'll let you know as soon as we're ready for you.</p>
          <p style="font-size: 12px; color: #aaa; margin-top: 40px;">
            The eli5it.app Team
          </p>
        </div>
      `,
    });

    // 2. Send notification email to the waitlist address
    await transporter.sendMail({
      from: `"eli5it.app Waitlist" <${process.env.EMAIL_USER}>`,
      to: process.env.WAITLIST_EMAIL_ADDRESS,
      subject: `New Waitlist Signup: ${email}`,
      text: `A new user has joined the waitlist: ${email}`,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Successfully joined the waitlist.' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'There was an error. Please try again later.' }),
    };
  }
}; 