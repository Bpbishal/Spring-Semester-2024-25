const nodemailer = require('nodemailer');

async function test() {
  const transporter = nodemailer.createTransport({
    host: 'smtp.mailgun.org',
    port: 587,
    secure: false,
    auth: {
      user: 'postmaster@sandboxc21a7c0cbe0b471e96c5b19d5db131a6.mailgun.org', 
      pass: '30232967dbbcf14099817a1492cf0f9d-67bd41c2-c040ca78',
    },
  });

  const info = await transporter.sendMail({
    from: '"NextPhase" <postmaster@sandboxc21a7c0cbe0b471e96c5b19d5db131a6.mailgun.org>', 
    to: 'bishalpal816@gmail.com', // 👈 Replace this with your real email address
    subject: 'Test Email',
    text: 'This is a test',
  });

  console.log('Message sent: %s', info.messageId);
}

test().catch(console.error);
