import { superValidate } from 'sveltekit-superforms';
import { contactMessageSchema as schema } from '$lib/zodschemas';
import { zod4 } from 'sveltekit-superforms/adapters';
import { setFlash } from 'sveltekit-flash-message/server';
import { fail } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { contactMessages } from '$lib/server/db/schema.js';
import type { Actions, PageServerLoad } from './$types.js';


export const load: PageServerLoad = async () => {
  const form = await superValidate(zod4(schema));

  return { form };
};


export const actions: Actions = {
  default: async ({ request, cookies }) => {
    const form = await superValidate(request, zod4(schema));
    console.log(form);

 if (!form.valid) {
      setFlash({ type: 'error', message: "Please check your form." }, cookies);
      return fail(400, { form });
    }
   
     const { name, email, phone, company, subject, message } = form.data;

     await db.insert(contactMessages).values({
        name,
        email,
        phone,
        company,
        subject,
        message
     });

    await sendEmails(form.data);
   

     

    setFlash({ type: 'success', message: "Message succefully sent!" }, cookies);
  }
};

import nodemailer from 'nodemailer';
import { HOST, PORT, USER, PASSWORD } from '$env/static/private';

const transporter = nodemailer.createTransport({
    host: HOST,
    port: PORT,
    secure: PORT === "465" ? true : false, // true for 465, false for others
    auth: {
        user: USER,
        pass: PASSWORD
    }
});

async function sendEmails(data: {
    name: string,
    email: string,
    phone: string,
    company: string,
    subject: string,
    message: string
}) {
    const { name, email, phone, company, subject, message } = data;

    const currentYear = new Date().getFullYear();
    const brandColor = '#2a2733';

    // Email to the user (confirmation)
    const htmlContent = `
    <div style="font-family: Arial, sans-serif; color: ${brandColor}; line-height: 1.6; max-width: 600px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 20px; padding-top: 45px;">
            <img src="https://oboleyancoffee.com/logo.webp" alt="Oboleyan Coffee Logo" style="width: 150px; height: auto;" />
        </div>
        <h2 style="color: ${brandColor};">Thank you for contacting Oboleyan Coffee</h2>
        <p>Hi ${name.split(" ")[0]},</p>
        <p>Thank you for reaching out to Oboleyan Coffee. We have received your inquiry and our export team will review the details.</p>
        <p>We will contact you shortly to discuss green bean availability, pricing, shipping options, and any other requirements.</p>
        <br>
        <p>Warm regards,<br><strong style="color: ${brandColor};">The Oboleyan Coffee Team</strong></p>
        <p style="text-align: center;">&copy; ${currentYear} <a href="https://oboleyancoffee.com" style="color: ${brandColor}; text-decoration: none;">Oboleyan Coffee</a> — All Rights Reserved.</p>
    </div>
    `;

    // Email to the admin (notification)
    const adminHtml = `
    <div style="font-family: Arial, sans-serif; color: ${brandColor}; line-height: 1.6; max-width: 600px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 20px; padding-top: 45px;">
            <img src="https://oboleyancoffee.com/logo.png" alt="Oboleyan Coffee Logo" style="width: 150px; height: auto;" />
        </div>
        <h2 style="color: ${brandColor};">New Inquiry Received — Oboleyan Coffee</h2>

        <p><strong style="color: ${brandColor};">Full Name:</strong> ${name}</p>
        <p><strong style="color: ${brandColor};">Email:</strong> ${email}</p>
        ${phone ? `<p><strong style="color: ${brandColor};">Phone:</strong> ${phone}</p>` : ''}
        ${company ? `<p><strong style="color: ${brandColor};">Company:</strong> ${company}</p>` : ''}
        ${subject ? `<p><strong style="color: ${brandColor};">Subject:</strong> ${subject}</p>` : ''}
        ${message ? `<p><strong style="color: ${brandColor};">Message:</strong> ${message}</p>` : ''}

        <br>
        <p style="text-align: center;">&copy; ${currentYear} <a href="https://oboleyancoffee.com" style="color: ${brandColor}; text-decoration: none;">Oboleyan Coffee</a> — All Rights Reserved.</p>
    </div>
    `;

    // Send confirmation email to the user
    await transporter.sendMail({
        from: `"Oboleyan Coffee" <${USER}>`,
        to: email,
        subject: "Thank you for contacting Oboleyan Coffee",
        html: htmlContent
    });

    // Send notification email to the admin
    await transporter.sendMail({
        from: `"Oboleyan Coffee Form" <${USER}>`,
        to: USER, // Admin email
        subject: "New Inquiry Received — Oboleyan Coffee",
        html: adminHtml
    });
}
