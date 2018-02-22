var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',// Use appropriate email service provider
  auth: {
    user: 'your email Id',
    pass: 'your password'
  }
});

var textMailOptions = {
  from: 'your email Id',
  to: '',
  subject: '',
  text: ''
};

var htmlMailOptions = {
  from: 'your email Id',
  to: '',
  subject: '',
  html: ''
};


var MailApi = {

  sendTextEMail: function(toAddress, subject, body, callback) {
    textMailOptions.to = toAddress;
    textMailOptions.subject=subject;
    textMailOptions.text = body;
    var resp='Send eMail to ('+textMailOptions.to+'). Status:: ';

    //send email
    transporter.sendMail(textMailOptions, function(error, info){
      if(error) {
        resp = resp+'FAILED';
        console.log('Response: '+resp);
        console.log('Message: '+JSON.stringify(error));
      } else {
        resp=resp+'SUCCESS';     
        console.log('Response: '+JSON.stringify(info));
      }
      callback(null, resp)
    });
  },

  sendHtmlEMail: function(toAddress, subject, body, callback) {
    textMailOptions.to = toAddress;
    textMailOptions.subject=subject;
    textMailOptions.html = body;
    var resp='Send eMail to ('+textMailOptions.to+'). Status:: ';

    //send email
    transporter.sendMail(textMailOptions, function(error, info){
      if(error) {
        resp = resp+'FAILED';
        console.log('Response: '+resp);
        console.log('Message: '+JSON.stringify(error));
      } else {
        resp=resp+'SUCCESS';     
        console.log('Response: '+JSON.stringify(info));
      }
      callback(null, resp)
    });
  }

};

module.exports = MailApi;
