import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// هادا غنجيبوه من الموقع ديال Resend (غنشرح ليك كيفاش لتحت)
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, program } = body;

    // 1. إرسال إيميل للطالب
    await resend.emails.send({
      from: 'AFTA Academy <onboarding@resend.dev>', // من بعد غتبدلها بالدومين ديالك
      to: email,
      subject: 'تأكيد التسجيل - أكاديمية AFTA',
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #ea580c;">مرحباً ${name}،</h2>
          <p>لقد توصلنا بطلب التسجيل الخاص بك في تخصص <strong>${program}</strong>.</p>
          <p>رقم الهاتف الذي أدخلته: <span dir="ltr">${phone}</span></p>
          <p>سيتصل بك أحد مستشارينا في أقرب وقت لتحديد موعد المقابلة.</p>
          <br/>
          <p>مع تحيات،<br/>إدارة أكاديمية AFTA</p>
        </div>
      `
    });

    return NextResponse.json({ success: true, message: 'تم إرسال الإيميل بنجاح' });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'وقع مشكل في إرسال الإيميل' }, { status: 500 });
  }
}