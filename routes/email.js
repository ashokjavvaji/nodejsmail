var express = require('express');
var router = express.Router();
var MailApi = require('../api/MailApi');

/* Send Text eMail. */
router.post('/text', function(req, res, next) {
  console.log('Text eMail Req: '+JSON.stringify(req.body));
  MailApi.sendTextEMail('',req.body.subject,req.body.message,function(err,data){
    res.send(data);
  });
});

router.post('/html', function(req, res, next) {
  console.log('HTML eMail Req: '+JSON.stringify(req.body));
  MailApi.sendHtmlEMail('',req.body.subject,req.body.message,function(err,data){
    res.send(data);
  });
});

module.exports = router;
