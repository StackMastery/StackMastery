import { sendMail } from "../lib/mailer.config.js";

const sendContactEmail = async (req, res) => {
  const { subject, text, html } = req.body;
  const to = process.env.EMAIL_USER_NAME;

  const response = await sendMail({ to, subject, text, html });

  if (response.success) {
    res.json({ msg: "Email Send Succes", succes: true });
  } else {
    res.status(500).json({ error: response.error });
  }
};
export { sendContactEmail };
