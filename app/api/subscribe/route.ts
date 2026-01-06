import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { message: 'Invalid email address' },
        { status: 400 }
      );
    }

    /**
     * هنا لاحقًا ممكن:
     * - تحفظ الإيميل في DB
     * - تبعته لـ Mailchimp
     * - Firebase
     */

    console.log('New subscriber:', email);

    return NextResponse.json(
      { message: 'Subscribed successfully' },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { message: 'Something went wrong' },
      { status: 500 }
    );
  }
}
