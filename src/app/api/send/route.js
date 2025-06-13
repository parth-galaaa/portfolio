import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
	const { email, subject, message } = await req.json();
	console.log(email, subject, message);
	try {
		const data = await resend.emails.send({
			from: 'Acme <onboarding@resend.dev>',
			to: fromEmail,
			subject: subject,
			reply_to: email,
			react: (
				<>
					<p><strong>From:</strong> {email}</p>
					<p>{message}</p>
				</>
			),
		});
		return NextResponse.json(data);
	} catch (error) {
		return NextResponse.json({ error });
	}
}