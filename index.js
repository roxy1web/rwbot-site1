const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8" />
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    padding: 12px;
    border: none;
    border-radius: 12px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    background: #00ffd5;
    color: #000;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    transition: background 0.3s;
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
  .extra-buttons {
    margin-top: 50px;
    text-align: center;
  }
  .extra-buttons a {
    margin: 0 10px;
  }
</style>
</head>
<body>

<div class="header">
  🎉 <b>RW Bot Ağına Hoş Geldiniz</b>
</div>

<div class="container">

  <!-- BOT 1 -->
  <div class="card">
    <h2>RW"bot</h2>
    <div class="prefix">Prefix: !</div>
    <p>
      Moderasyon • Eğlence • Sohbet<br />
      Güçlü koruma sistemleri
    </p>
    <a href="https://discord.com/oauth2/authorize?client_id=1454804540334280788&permissions=8&integration_type=0&scope=bot" target="_blank" class="btn">
      Sunucuma Ekle
    </a>
  </div>

  <!-- BOT 2 -->
  <div class="card">
    <h2>RW RolePlay</h2>
    <div class="prefix">Prefix: ?</div>
    <p>
      Roleplay sunucuları için özel bot<br />
      RP komutları & düzen sistemi
    </p>
    <a href="https://discord.com/oauth2/authorize?client_id=1454550694504960081&permissions=8&integration_type=0&scope=bot" target="_blank" class="btn">
      Sunucuma Ekle
    </a>
  </div>

  <!-- BOT 3 -->
  <div class="card">
    <h2>RW SMS Bot</h2>
    <div class="prefix">Prefix: $</div>
    <p>
      SMS Bomber • SMS Saldırısı<br />
      Hızlı & güçlü sistem
    </p>
    <a href="https://discord.com/oauth2/authorize?client_id=1455961849567772785&permissions=8&integration_type=0&scope=bot" target="_blank" class="btn">
      Sunucuma Ekle
    </a>
  </div>

</div>

<!-- EKSTRA BUTONLAR -->
<div class="extra-buttons">
  <a href="https://github.com/RWwoxy" target="_blank" class="btn" style="background: linear-gradient(135deg, #24292e, #6cc644); color: white;">
    📂 Bedava Kod & BDFD Komutları Al
  </a>
  <a href="https://discord.gg/SXETYkhCHx" target="_blank" class="btn" style="background: linear-gradient(135deg, #5865F2, #3ba55d); color: white;">
    💬 Discord Sunucumuza Katıl & Botunu Ekleyelim
  </a>
  <a href="https://discord.gg/SXETYkhCHx" target="_blank" class="btn" style="background: linear-gradient(135deg, #ff5555, #ff9900); color: white;">
    🎮 Bedava Hile / Spoofer / Oyun
  </a>
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
