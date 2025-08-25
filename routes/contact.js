import { Router } from 'express';
import { createTransport } from "nodemailer";
const router = Router();
const transporter = createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.MAIL_SRC_ADDRESS,
        pass: process.env.MAIL_SRC_PASS,
    },
});
router.get('/', function (_req, res, _next) {
    res.render("contact");
});
router.post('/submit', function (req, res, _next) {
    console.log(req.body);
    if (typeof req.body.name === "string" && typeof req.body.content === "string") { // Check for existence of correct fields
        const nameLength = req.body.name.length;
        const contentLength = req.body.content.length;
        if (nameLength > 0 && nameLength < 100 && contentLength > 0 && contentLength < 10000) { // Check for reasonable content length
            const mailOptions = {
                to: process.env.MAIL_DST_ADDRESS,
                subject: "Email from " + req.body.name,
                text: req.body.content,
            };
            transporter.sendMail(mailOptions, (error, _info) => {
                if (error) {
                    console.error("Error sending email: ", error);
                    res.redirect("/");
                }
                else {
                    res.redirect("./success");
                }
            });
        }
        else {
            res.redirect("/"); // Some condition was not met
        }
    }
    else {
        res.redirect("/"); // Some condition was not met
    }
});
router.get('/success', function (_req, res, _next) {
    res.render("contact-success");
});
export default router;
