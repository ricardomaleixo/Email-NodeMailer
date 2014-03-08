var nodemailer = require("nodemailer");


var smtpTransport = nodemailer.createTransport("SMTP",{
   service: "Gmail",  // sets automatically host, port and connection security settings
   auth: {
       user: "yourEmail@gmail.com",
       pass: "yourPassword"
   }
});

smtpTransport.sendMail({  
   from: "Sender Name <yourEmail@gmail.com>", 
   to: "Receiver Name <destEmail@live.com>",
   subject: "Não ta curioso pra saber quem é?",
   text: "Eai GERMANO MENDONCA LOCURA você está sendo convidado para uma conversa reservada no eTalk2me" 
}, function(error, response){ 
   if(error){
       console.log(error);
   }else{
       console.log("Message sent: " + response.message);
   }
   
   smtpTransport.close(); 
});



var smtpTransport = nodemailer.createTransport("SMTP",{
   service: "Gmail", 
   auth: {
       user: "yourEmail@gmail.com",
       pass: "yourPassword"
   }
});