import {Resend} from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    try {
        const {name, email, message} = await request.json();

        await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "akrafted04@gmail.com",
            subject: "New Contact Submission - Akrafted",
            html:`
              <h2>New Message from Akrafted Website</h2 
              <p><strong>Name:</strong> ${name}</p> 
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong> ${message}</p>
            `,
            
        });
        return Response.json({success: true });
    }   catch (error) {
        console.error(error);
        return Response.json({success: false}, {status: 500});
    }
}
