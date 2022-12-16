import nodemailer from "nodemailer";
import { EmailMessage } from "../src/containers/ContactContainer";

// async..await is not allowed in global scope, must use a wrapper
export async function mailSender(mailData: EmailMessage) {
  // create reusable transporter object using the default SMTP transport

  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.zoho.eu",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.REACT_APP_EMAIL,
        pass: process.env.REACT_APP_PASSWORD,
      },
    });

    // send mail with defined transport object
    await transporter.sendMail({
      from: process.env.REACT_APP_EMAIL, // sender address
      to: "ivailocvetkov365@gmail.com", // list of receivers
      subject: "Съобщение от Формата на сайта", // Subject line
      // text: "Hello world?", // plain text body
      html: `<div>
    <ul>
        <li>Име: ${mailData.name}</li>
        <li>Поща: ${mailData.email}</li>
        <li>Съобщение: ${mailData.message}</li>
    </ul>
</div>`, // html body
    });
  } catch (error) {
    console.log(error);
  }
}
