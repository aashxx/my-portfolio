import { NextResponse } from 'next/server';
import { z } from 'zod';
import nodemailer from 'nodemailer';

const contactSchema = z.object({
    name: z.string().min(1, "Name is required").max(100),
    email: z.string().min(1, "Email is required").email("Invalid Email"),
    phone: z.string().min(5, "Phone number is required").max(20),
    service: z.string().min(1, "Service is required").max(50),
    message: z.string().min(1, "Message is required")
});

export async function POST(req) {
    try {
        const body = await req.json();

        const { name, email, phone, service, message } = contactSchema.parse(body);

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: "tmohamedaashir@gmail.com",
                pass: "paja wfnw hwph lesp"
            }
        });

        await transporter.sendMail({
            from: email,
            to: "tmohamedaashir@gmail.com",
            subject: `${name} Wants to Contact You!`,
            html: `<p>Name: ${name}</p><p>Service: ${service}</p><p>Phone: ${phone}</p><p>Email: ${email}</p><p>Message: ${message}</p>`
        });

        return NextResponse.json({
            message: "Email sent successfully!",
        }, { status: 200 });

    } catch (error) {
        return NextResponse.json({
            message: "Something went wrong!"
        }, { status: 500 });
    }
}