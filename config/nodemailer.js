import nodemailer from "nodemailer";
import mailgen from "mailgen";

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

let mailGenerator = new mailgen({
  theme: "default",
  product: {
    name: "S-Mart E-commerce App",
    link: `${process.env.REACT_BASE_URL}`,
  },
});

export { transporter, mailGenerator };
