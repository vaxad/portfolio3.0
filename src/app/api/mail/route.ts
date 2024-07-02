import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

async function sendMail(subject: string, toEmail: string, body: string) {
  const email = process.env.EMAIL_ADDRESS
  const password = process.env.EMAIL_PASSWORD
  var transporter = await nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: email,
      pass: password,
    },
  });

  var mailOptions = {
    from: email,
    to: toEmail,
    subject: subject,
    text: body
  };

  await new Promise((res, rej) => {
    transporter.sendMail(mailOptions, function (error: any, info: any) {
      if (error) {
        console.log(error, info);
        rej(error)
        // return false;
      } else {
        console.log("Email Sent");
        res(info)
        // return true;
      }
    });
  })
}


export async function POST(req: NextRequest) {
  try {
    const { email, message } = await req.json()
    const emailSucess = await sendMail(`New Message from ${email}`, "varadprabhu111@gmail.com", `Email : ${email} \nMessage: ${message}`)
    return NextResponse.json({ emailSucess: emailSucess })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: error })
  }
}