
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY)


export const POST = async (req) => {
    try {
        const body = await req.json();
        const { name, email, message, role, phone } = body;

        if (!name || !email || !message) {
            return new Response(
                JSON.stringify({ error: 'All fields are required' }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }

        const msg = {
            to: 'okafohenrie@gmail.com', // Replace with your email
            from: 'noreply@em6429.impelement.com', // Verified sender
            subject: `New GatherGram Submission from ${name}`,
            text: message,
            html: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>I am the:</strong> ${role}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        };

        await sgMail.send(msg);

        return new Response(
            JSON.stringify({ success: 'Message sent successfully!' }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (error) {
        console.error('SendGrid Error:', error.response?.body || error.message);
        return new Response(
            JSON.stringify({ error: 'Failed to send message' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}
