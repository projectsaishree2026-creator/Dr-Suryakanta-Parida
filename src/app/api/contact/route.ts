import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2),
  phone: z.string().min(10),
  email: z.string().email().optional().or(z.literal('')),
  concern: z.string().min(1),
  message: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    // In production: send via Resend, Nodemailer, or SMS gateway
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'noreply@drsuryakantaparida.com',
    //   to: 'contact@saishreedrhealthcare.com',
    //   subject: `New appointment request from ${data.name}`,
    //   html: `<p><strong>Name:</strong> ${data.name}</p>
    //          <p><strong>Phone:</strong> ${data.phone}</p>
    //          <p><strong>Concern:</strong> ${data.concern}</p>
    //          <p><strong>Message:</strong> ${data.message || 'N/A'}</p>`
    // });

    console.log('New contact request:', data);

    return NextResponse.json(
      { success: true, message: 'Appointment request received.' },
      { status: 200 }
    );
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: err.errors },
        { status: 422 }
      );
    }
    return NextResponse.json(
      { success: false, message: 'Server error. Please try again.' },
      { status: 500 }
    );
  }
}
