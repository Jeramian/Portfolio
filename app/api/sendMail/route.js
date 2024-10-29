import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    const data = await request.json();
    const { name, email, subject, message } = data;

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_RECIPIENT,
            subject: `New message from ${name}`,
            text: `
              Name: ${name}
              Email: ${email}
              Subject: ${subject}
              Message: ${message}
            `,
        };

        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error("Error sending email", error);
        return NextResponse.json({ error: "Error sending email"}, { status: 500 });
    }
}
