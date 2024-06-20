const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// serveur utilisé pour envoyer des emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "******@gmail.com",
    pass: "******"
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Prêt à envoyer");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.prénom + req.body.nom;
  const email = req.body.email;
  const message = req.body.message;
  const téléphone = req.body.téléphone;
  const mail = {
    from: nom,
    to: "*****@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Nom: ${nom}</p>
           <p>Email: ${email}</p>
           <p>Téléphone: ${téléphone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message envoyer" });
    }
  });
});
