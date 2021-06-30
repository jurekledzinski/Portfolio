const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

const {
  emailAddressSendTo,
  emailOfUser,
  providerHost,
  portProviderEmail,
  passwordUserEmail,
} = require("../configs/config");

router.post("/", (req, res) => {
  const { name, email, message } = req.body;

  const info = {
    alert: "",
    success: "",
  };

  if (!name || !email || !message) {
    info.alert = "Please fill in all fields";
    return res.status(404).json(info);
  }

  const output = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" lang="en-GB">
  <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <title>Cancel booking Hair planet</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <style type="text/css">
          a[x-apple-data-detectors] {color: inherit !important;}
      </style>
  </head>
  <body style="margin: 0; padding: 0;">
      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
          <tr>
              <td style="padding: 20px 0 30px 0;">
  <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse; border: 1px solid #cccccc;">
      <tr>
          <td align="center" bgcolor="#393939" style="padding: 0px 0 0px 0;">
              <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-628b9.appspot.com/o/Email-small-header.jpg?alt=media&token=48fd932a-0341-4dbd-922b-cb65ca582b4a" alt="Creating Email Magic." width="600" maxHeight="230" style="display: block;" />
          </td>
      </tr>
      <tr>
          <td bgcolor="#ffffff" style="padding: 0px 30px 40px 30px;">
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
                  <tr>
                      <td style="color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px; padding: 20px 0 10px 0;">
                          <h3 style="font-size: 18px; margin: 0;">Contact details:</h3>
                          <p style="margin: 0;">${name}</p>
                          <p style="margin: 0;">${email}</p>
                      </td>
                  </tr>
                  <tr>
              </tr>
                  <tr>
                      <td>
                          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
                              <tr>
                              <td style="color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px; padding: 20px 0 30px 0;">
                              <h3 style="font-size: 18px; margin: 0;">Message:</h3>
                              <p style="margin: 0;">${message}</p>
                      </td>
                              </tr>
                          </table>
                      </td>
                  </tr>
              </table>
          </td>
      </tr>
      <tr>
          <td bgcolor="#393939" style="padding: 30px 30px;">
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
                  <tr>
                      <td style="color: #ffffff; font-family: Arial, sans-serif; font-size: 14px;">
                          <p style="margin: 0;">&reg;Jurek Ledziński, All rights reserved &copy; ${new Date().getFullYear()}<br/></p>
                      </td>
                  </tr>
              </table>
          </td>
      </tr>
  </table>
              </td>
          </tr>
      </table>
  </body>
  </html>`;

  if (!Boolean(info.alert)) {
    let transporter = nodemailer.createTransport({
      host: providerHost,
      port: portProviderEmail,
      secure: true,
      auth: {
        user: emailOfUser,
        pass: passwordUserEmail,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    transporter.sendMail(
      {
        from: `"Message portfolio from" <${emailOfUser}>`,
        to: emailAddressSendTo,
        subject: "Portfolio message",
        text: "Message",
        html: output,
      },
      (err, info) => {
        if (err) {
          return res.status(500).json("Oops, something went wrong try later");
        }

        info.success = "Email has been sent";
        return res.status(200).json(info);
      }
    );
  }
});

module.exports = router;
