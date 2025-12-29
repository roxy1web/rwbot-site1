const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<title>RW Bot Ağı</title>
<style>
* { box-sizing: border-box; }
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: linear-gradient(135deg, #0f0f0f, #111827);
  color: #fff;
}
.header {
  background: #111;
  padding: 20px;
  text-align: center;
  box-shadow: 0 0 20px #00ffd5;
}
.header a {
  color: #00ffd5;
  text-decoration: none;
  font-weight: bold;
}
.container {
  padding: 40px;
  display: flex;
  gap: 30px;
  justify-content: center;
  flex-wrap: wrap;
}
.card {
  background: #1c1c1c;
  width: 320px;
  border-radius: 15px;
  padding: 25px;
  box-shadow: 0 0 25px #00ffd533;
  transition: transform 0.3s, box-shadow 0.3s;
}
.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 0 40px #00ffd5;
}
.card h2 {
  margin-top: 0;
  color: #00ffd5;
}
.prefix {
  background: #00ffd5;
  color: #000;
  display: inline-block;
  padding: 5px 10px;
  border-radius: 8px;
  font-weight: bold;
  margin-bottom: 10px;
}
.btn {
  margin-top: 15px;
  display: block;
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  background: #00ffd5;
  color: #000;
}
.btn:hover {
  background: #00c9a7;
}
.footer {
  text-align: center;
  padding: 20px;
  color: #aaa;
  font-size: 14px;
}
</style>
</head>
<body>

<div class="header">
  🎁 <b>Bedava Kodlar & BDFD Komutları İçin:</b>
  <a href="https://discord.gg/99xduqgEYA" target="_blank">
    Discord Sunucumuza Katıl
  </a>
</div>

<div class="container">

  <div class="card">
    <h2>@RoWo</h2>
    <div class="prefix">Prefix: R</div>
    <p>
      OWO bot benzeri eğlence ve oyun botu.<br>
      Kasa, savaş, item, eğlence ve daha fazlası.
    </p>
    <button class="btn"
      onclick="window.open('https://discord.com/oauth2/authorize?client_id=1436700314555383920&scope=bot%20applications.commands&permissions=2146958847')">
      Sunucuma Ekle
    </button>
  </div>

  <div class="card">
    <h2>@ErensiBot TR 🇹🇷</h2>
    <div class="prefix">Prefix: E?</div>
    <p>
      Moderasyon • Eğlence • Sohbet botu.<br>
      ErensiBot tarzı gelişmiş özellikler.
    </p>
    <button class="btn"
      onclick="window.open('https://discordapp.com/oauth2/authorize?client_id=1446616920521576492&scope=bot&permissions=2146958847')">
      Sunucuma Ekle
    </button>
  </div>

</div>

<div class="footer">
  © 2025 RW Bot Network
</div>

</body>
</html>
`);
});

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
