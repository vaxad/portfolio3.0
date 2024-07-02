import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { b64pdf } from "../../../lib/constants"

async function sendMail(subject: string, toEmail: string, body: string, attachments: any[]) {
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
    text: body,
    attachments: attachments
  };

  await new Promise((res, rej) => {
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error, info);
        res(error)
      } else {
        console.log("Email Sent");
        rej(info)
      }
    });
  })
}

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json()
    const emailSucess = await sendMail(`Thank you for your message`, email, `Thank you ${email} for reaching out to me. I have received your email and will make it a priority to respond to your inquiry as promptly as possible.\n\nIf you did not initiate contact with me recently or this email was received in error, please disregard this message.\n\nFor your convenience, I have attached my resume to this email for your reference. Feel free to review it, and if you have any specific questions or require further information, please don't hesitate to let me know.\n\nThank you once again for getting in touch. I look forward to connecting with you soon.\n\nThis is an auto-generated response to acknowledge the receipt of your email.`, [
      {   // file on disk as an attachment
        filename: "Varad's Resume.pdf",
        path: b64pdf
      }
    ])
    return NextResponse.json({ emailSucess: emailSucess })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: error })
  }
}