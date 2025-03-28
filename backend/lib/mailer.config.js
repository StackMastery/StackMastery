import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const mailer = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER_NAME,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendMail = async ({ to, subject, text, html }) => {
  try {
    const info = await mailer.sendMail({
      from: process.env.EMAIL_USER_NAME,
      to,
      subject,
      text,
      html,
    });
    return { success: true, info };
  } catch (error) {
    return { success: false, error: error.message };
  }
};
