require('dotenv').config();

//import express
const express = require("express");
const app = express();
//import resend
const { Resend } = require('resend');
const resend = new Resend(process.env.RESEND_API_KEY);

//cors
const cors = require("cors");
app.use(cors());


//req = everything the user sent.
//res = what I send back to the frontend
app.use(express.json());

app.post('/contact', async (req, res) => {
await resend.emails.send({
  from: 'onboarding@resend.dev',
  replyTo: req.body.email,
  to: 'atraore.dev@gmail.com',
  subject: 'Hello World',
  html: `Name: ${req.body.name}, Email: ${req.body.email}, Message: ${req.body.message}`
});
    res.json({ sucess: true });
})


app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})