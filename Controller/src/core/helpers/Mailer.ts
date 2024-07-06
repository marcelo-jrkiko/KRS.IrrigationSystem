import * as nodemailer from "nodemailer";
import { getGlobalConfiguration } from "../../GlobalContext";
import hbs from "nodemailer-express-handlebars";
import { create } from "express-handlebars";
import SMTPTransport from "nodemailer/lib/smtp-transport";

export function createMailer(): nodemailer.Transporter<SMTPTransport.SentMessageInfo> {
  const cfg = getGlobalConfiguration();

  let emailCfg: SMTPTransport.Options = {};

  if (cfg.Mailer?.Service == "gmail") {
    emailCfg = {
      service: cfg.Mailer?.Service,
      auth: {
        user: cfg.Mailer?.User,
        pass: cfg.Mailer?.Password,
      },
      tls: {
        rejectUnauthorized: false,
      },
    };
  } else {
    emailCfg = {
      host: cfg.Mailer?.Host,
      port: cfg.Mailer?.Port,
      secure: cfg.Mailer?.Secure,
      auth: {
        user: cfg.Mailer!.User,
        pass: cfg.Mailer!.Password,
      },
      tls: {
        rejectUnauthorized: false,
      },
    };
  }

  let transporter = nodemailer.createTransport(emailCfg);

  // https://gist.github.com/tracend/7522125 <- Operadores
  let handlebarsEngine = create({
    layoutsDir: "./src/emails/layouts",
    helpers: {
      ge: function (this: any, a: any, b: any) {
        var next = arguments[arguments.length - 1];
        return a >= b ? next.fn(this) : next.inverse(this);
      },
    },
  });

  transporter.use(
    "compile",
    hbs({
      viewEngine: handlebarsEngine,
      viewPath: "./src/emails/",
      extName: ".handlebars",
    })
  );

  return transporter;
}

export function getMailFrom() {
  const cfg = getGlobalConfiguration();

  return '"' + cfg.Mailer?.FromName + '" <' + cfg.Mailer?.FromEmail + ">";
}
