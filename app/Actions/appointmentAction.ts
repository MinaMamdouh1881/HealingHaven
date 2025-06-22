'use server';
import nodemailer from 'nodemailer';

export default async function appointmentAction(
  prevState: unknown,
  formData: FormData
) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    subject: 'New Appointment Request',
    html: `
      <h2>New Appointment Request</h2>
      <table border="1" cellpadding="6" cellspacing="0" style="border-collapse:collapse;">
        <tr><th>Doctor</th><td>${formData.get('doctor')}</td></tr>
        <tr><th>Department</th><td>${formData.get('department')}</td></tr>
        <tr><th>Name</th><td>${formData.get('name')}</td></tr>
        <tr><th>Email</th><td>${formData.get('email')}</td></tr>
        <tr><th>Phone</th><td>${formData.get('phone')}</td></tr>
        <tr><th>Date</th><td>${formData.get('date')}</td></tr>
        <tr><th>Time</th><td>${formData.get('time')}</td></tr>
      </table>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Appointment request sent successfully.');
    return { error: false, message: 'Appointment request sent successfully.' };
  } catch (error) {
    console.log('Error sending email:', error);
    return {
      error: true,
      message: 'Error sending appointment request. Please try again later.',
    };
  }
}