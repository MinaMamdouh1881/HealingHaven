'use server';
import { Resend } from 'resend';
export default async function appointmentAction(formData: FormData) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('Missing RESEND_API_KEY environment variable.');
  }
  const resend = new Resend(apiKey);
  try {
    const res = await resend.emails.send({
      from: formData.get('email') as string,
      to: 'menamamdouh852456@gmail.com',
      subject: 'Appointment Request',
      text: 'You have received a new appointment request.',
    });
    console.log(res);
  } catch (error) {
    console.log('Error sending email:', error);
  }
  // console.log(formData);
}
