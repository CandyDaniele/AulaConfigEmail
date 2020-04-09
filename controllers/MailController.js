const nodemailer = require('nodemailer');

const transport = {
    //host: "smtp.mailtrap.io", 
    //port: 2525,
    service: "gmail",
    auth: {
        //user: "usuario do mailtrap",
        //pass: "senha do mailtrap"
        user: "email do gmail",
        pass: "senha do gmail"
    }
}
module.exports = {
    enviar: (req, res) => {
        //Criar o transporter
        const transporter = nodemailer.createTransport(transport);

        //Criando email
        const email = {
            from: "email do gmail",
            to: req.body.dest,
            subject: req.body.subj,
            text: req.body.msg,
            html: "<h1> Mensagem... </h1>"
            //html: fs.readfilesync(arquivo html em um arquivo)
            //imagens no email tem que estar na internet não pode estar no meu pc
        }     
        
        // Enviar email
        transporter.sendMail(email, 
                (error, info) => {
                    if(error){
                        console.log(error);
                        console.log(info);
                        res.send("deu xabu!");
                    } else {
                        console.log(info);
                        res.send("deu bom!");
                    }
                }
            )
    }
}