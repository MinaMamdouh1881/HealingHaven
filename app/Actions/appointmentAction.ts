'use server';
import nodemailer from 'nodemailer';

export default async function appointmentAction(formData: FormData) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: formData.get('email') as string,
    to: process.env.GMAIL_USER,
    subject: 'New Appointment Request',
    text:
      `You have a new appointment request from ${formData.get('name')}.\n\n` +
      `Phone: ${formData.get('phone')}\n` +
      `Date: ${formData.get('date')}\n` +
      `Time: ${formData.get('time')}\n`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Appointment request sent successfully.');
  } catch (error) {
    console.log('Error sending email:', error);
  }
}
