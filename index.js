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
  🎁 <b>Sunucumuza Katıl – Botunu Ekleyelim:</b>
  <a href="https://discord.gg/FPXyn9S38U" target="_blank">
    discord.gg/FPXyn9S38U
  </a>
</div>

<div class="container">

  <!-- BOT 1 -->
  <div class="card">
    <h2>RW Bot</h2>
    <div class="prefix">Prefix: !</div>
    <p>
      Moderasyon • Eğlence • Sohbet<br>
      Güçlü koruma sistemleri
    </p>
    <button class="btn"
      onclick="window.open('https://discord.com/oauth2/authorize?client_id=1454804540334280788&permissions=8&integration_type=0&scope=bot')">
      Sunucuma Ekle
    </button>
  </div>

  <!-- BOT 2 -->
  <div class="card">
    <h2>RW RolePlay</h2>
    <div class="prefix">Prefix: ?</div>
    <p>
      Roleplay sunucuları için özel bot<br>
      RP komutları & düzen sistemi
    </p>
    <button class="btn"
      onclick="window.open('https://discord.com/oauth2/authorize?client_id=1454550694504960081&permissions=8&integration_type=0&scope=bot')">
      Sunucuma Ekle
    </button>
  </div>

  <!-- BOT 3 -->
  <div class="card">
    <h2>@RoWo</h2>
    <div class="prefix">Prefix: R</div>
    <p>
      OWO benzeri eğlence & oyun botu<br>
      Kasa, item, savaş sistemi
    </p>
    <button class="btn"
      onclick="window.open('https://discord.com/oauth2/authorize?client_id=1436700314555383920&scope=bot%20applications.commands&permissions=2146958847')">
      Sunucuma Ekle
    </button>
  </div>

  <!-- BOT 4 -->
  <div class="card">
    <h2>@ErensiBot TR 🇹🇷</h2>
    <div class="prefix">Prefix: E?</div>
    <p>
      Moderasyon • Eğlence • Sohbet<br>
      ErensiBot tarzı gelişmiş yapı
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

