import { mailSender } from "../nodemailer";

export default async function handler(
  req,
  res
) {
  const data = JSON.parse(req.body);
  try {
    await mailSender(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("error");
  }
  res.status(200).send("success");
}