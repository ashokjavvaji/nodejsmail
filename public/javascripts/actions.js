function sendTexteMail() {
    var to="abc.def@xyz.com";
    var sub="Text Mail Subject";
    var message="This is the text body of the mail.\\nThis should be in next line.\\n\\nRegards,\\nTest Mail";
    var requestBody = prepareRequestBody(to, sub, message);
    var url="/email/text";
    sendPostRequest(url,requestBody);
};

function sendHtmleMail() {
    var to="abc.def@xyz.com";
    var sub="HTML Mail Subject";
    var message="This is the HTML body of the mail.<br>This should be in <b>next line</b>.<br><br>Regards,<br>Test Mail";
    var requestBody = prepareRequestBody(to, sub, message);
    var url="/email/html";
    sendPostRequest(url,requestBody);
};

function prepareRequestBody(to, subject, message) {
    return  '{"to":"'+to+'","subject":"'+subject+'","message":"'+message+'"}';
};

function sendPostRequest(url,body) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", url, false);// This is a synchronous call. To make it async change last parameter to true.
    xhttp.setRequestHeader("content-type", "application/json");
    xhttp.send(body);
    alert(xhttp.responseText);//required only for sync call. In async mode, it will always be empty.
};
