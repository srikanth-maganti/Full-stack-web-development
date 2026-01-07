import nodemailer from "nodemailer"
import Mailgen from "mailgen"

const sendmail=async (subject,toEmail,content)=>{

    //creating mail transporter
    const transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_HOST,
    port: process.env.MAILTRAP_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS,
    },
    });

    //creating mail body
    const  mailGenerator = new Mailgen({
    theme: 'default',
    product: {
        // Appears in header & footer of e-mails
        name: 'Auth app',
        link: 'https:/localhost:3000/'
        // Optional product logo
        // logo: 'https://mailgen.js/img/logo.png'
    }

    
    });
    const emailBody = mailGenerator.generate(content);
    let emailText = mailGenerator.generatePlaintext(content);

    const email={
    from: 'magantisrikanth45@gmail.com',
    to: toEmail,
    subject:subject,
    text:emailText, // plain‑text body
    html: emailBody, // HTML body
  }

   try{
    await transporter.sendMail(email);
   } 
   catch(err)
   {
    console.log("Unable to send mail as mail service failed");
   }

   
}

const emailverificationcontent=(username,verificationUrl)=>{
 return {
    body: {
        name: username,
        intro: 'Welcome to our app! We\'re very excited to have you.',
        action: {
            instructions: 'To get your email verified, please click here:',
            button: {
                color: '#22BC66', // Optional action button color
                text: 'Verfiy your accout',
                link: verificationUrl
            }
        },
        outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
    }
};
}

const forgotpasswordverificationcontent=(username,verificationUrl)=>{
 return {
    body: {
        name: username,
        intro: 'Welcome to our app! We\'re very excited to have you.',
        action: {
            instructions: 'please click here to reset your password',
            button: {
                color: '#22BC66', // Optional action button color
                text: 'Reset Password',
                link: verificationUrl
            }
        },
        outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
    }
};
}

export {
    sendmail,
    emailverificationcontent,
    forgotpasswordverificationcontent,
}