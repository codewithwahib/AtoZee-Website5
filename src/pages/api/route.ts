// import { NextResponse } from 'next/server';

// export async function POST(request: Request) {
//   try {
//     const { email } = await request.json();

//     // Validate email exists
//     if (!email) {
//       return NextResponse.json(
//         { error: 'Email is required' },
//         { status: 400 }
//       );
//     }

//     // Validate email format
//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//       return NextResponse.json(
//         { error: 'Invalid email format' },
//         { status: 400 }
//       );
//     }

//     // Here you would typically:
//     // 1. Save to a database, or
//     // 2. Send to an email service like Mailchimp, or
//     // 3. Forward to a third-party service like FormSubmit

//     // For now, we'll just log it and return success
//     console.log('New subscriber:', email);
    
//     return NextResponse.json(
//       { message: 'Thank you for subscribing!' },
//       { status: 200 }
//     );

//   } catch (error) {
//     console.error('Subscription error:', error);
//     return NextResponse.json(
//       { error: 'Internal server error' },
//       { status: 500 }
//     );
//   }
// }