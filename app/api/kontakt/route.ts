import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { jmeno, email, zprava } = await req.json();

  if (!jmeno || !email || !zprava) {
    return NextResponse.json({ error: "Chybí povinná pole." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Kafeterka formulář <formular@kafeterka.cz>",
    to: "kafeterka@email.cz",
    replyTo: email,
    subject: `Zpráva od ${jmeno}`,
    text: `Jméno: ${jmeno}\nE-mail: ${email}\n\nZpráva:\n${zprava}`,
  });

  if (error) {
    console.error("Resend error:", JSON.stringify(error));
    return NextResponse.json({ error: "Nepodařilo se odeslat zprávu.", detail: error }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
