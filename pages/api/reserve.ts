import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed" });
  }

  try {
    const { name, email, date, time, guests } = req.body;

    if (!name || !email || !date || !time || !guests) {
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields" });
    }

    await resend.emails.send({
      from: "Restaurant <onboarding@resend.dev>",
      to: email,
      subject: "Reservation Confirmation",
      html: `
        <h2>Reservation Confirmed</h2>
        <p>Hi ${name},</p>
        <p>Your table for ${guests} on ${date} at ${time} has been successfully reserved.</p>
        <p>We look forward to hosting you.</p>
        <p> The La Belle Restaurant Team</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return res
      .status(500)
      .json({ success: false, message: "Failed to send email" });
  }
}
