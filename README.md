# Send Emails using NodeJS
This project demonstrate how to send simple text and html emails via NodeJS using nodemailer.



## Running the code
In MailApi.js, update the appropriate details.

In actions.js, update the To address.

```node
cd nodejsmail
npm install
npm start
```

Open browser and navigate to http://localhost:3000/ to send the mails.

You can alternatively use any rest client if you wish not to use the UI.

## eMail REST end points
To send text emails use http://localhost:3000/email/text

To send html emails use http://localhost:3000/email/html

Request body to contain the below fields
```json
{
	"to":"to email address",
	"subject":"subject of the mail",
	"message":"body or content of the email"
}
```
