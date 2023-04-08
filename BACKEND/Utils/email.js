const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport(
  "smtps://user%40gmail.com:pass@smtp.gmail.com"
);

const sendEmail = async (Option) => {
  // 1) Create a transporter
  // const transporter = nodemailer.createTransport({
  //   host: process.env.EMAIL_HOST,
  //   port: process.env.EMAIL_PORT,
  //   auth: {
  //     user: process.env.EMAIL_USERNAME,
  //     pass: process.env.EMAIL_PASSWORD
  //   }
  // });

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "avcfgb507@gmail.com",
      pass: "ovcivoxojtdgbnuo",
    },
  });

  // 2) Define the email options
  const mailOptions = {
    from: "SURGE <Surge@gmail.com>",
    to: options.email,
    subject: options.subject,
    html: options.message,
  };

  // 3) Actually send the email
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
