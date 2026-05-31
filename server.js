const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

// Simple homepage
app.get('/', (req, res) => {
  res.send(`
    <h1 style="text-align:center; margin-top:50px; font-family:sans-serif;">
      Welcome to <br><strong>Sleep in Miss</strong>
    </h1>
    <p style="text-align:center;">Home services bidding app</p>
    <p style="text-align:center; margin-top:30px;">
      <a href="/register" style="background:blue;color:white;padding:15px 30px;text-decoration:none;border-radius:8px;">
        Get Started
      </a>
    </p>
  `);
});

app.listen(port, () => {
  console.log(`✅ Sleep in Miss is running at http://localhost:${port}`);
});
