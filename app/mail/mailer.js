// TODO: Fonction mailer faisable qu'avec NDD.

const nodemailer = require('nodemailer');
const log = require('log-to-file');
const { readdirSync} = require('fs');
const ejs = require('ejs');
const config = require('./configMail.json')

function mailer() {
    const transporter = nodemailer.createTransport({
        host: config.mailServer.host,
        port: config.mailServer.port,
        secure: config.mailServer.secure,
        requireTLS: config.mailServer.requireTLS,
        auth: {
            user: config.mailServer.auth.user,
            pass: config.mailServer.auth.pass,
        }
    })

    let mailOptions = {
        from: config.mailSender,
        to: config.mailReceivers,
        subject: "Watchdog"
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log(err);
        } else {
            log(
                `An email was sent from ${config.mailSender} to ${config.mailReceivers} ✅`,
                "./logs/email.log",
                "\n "
            );
        }
    });

}
module.exports = mailer;