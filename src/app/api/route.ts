import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// تأكد أن RESEND_API_KEY كاين فـ Environment Variables فـ Vercel
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, program } = body;

    // صيفط الإيميل
    await resend.emails.send({
      from: 'onboarding@resend.dev', // استعمل هاد الإيميل فالبداية
      to: 'hhhhohyhu@gmail.com', // **دير هنا الإيميل ديالك اللي باغي توصل فيه المعلومات**
      subject: 'تسجيل جديد في أكاديمية AFTA',
      html: `
        <h1>تفاصيل طالب جديد</h1>
        <p>الاسم: ${name}</p>
        <p>البريد: ${email}</p>
        <p>الهاتف: ${phone}</p>
        <p>التخصص: ${program}</p>
      `,
    });

    return NextResponse.json({ message: 'Success' }, { status: 200 });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}