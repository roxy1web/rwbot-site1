const express = require("express");
const app = express();

// statik dosyalar (background.png için)
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<title>RW Bot Ailesi</title>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: url('/background.png') no-repeat center center fixed;
  background-size: cover;
  color: white;
}

.overlay {
  background: rgba(0,0,0,0.75);
  min-height: 100vh;
  padding: 40px;
}

h1 {
  text-align: center;
  margin-bottom: 10px;
}

p {
  text-align: center;
  color: #ccc;
}

.bot {
  background: rgba(25,25,25,0.95);
  padding: 20px;
  border-radius: 15px;
  margin: 20px auto;
  max-width: 600px;
}

button {
  background: #5865F2;
  border: none;
  padding: 12px 25px;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 10px;
  font-size: 15px;
}

button:hover {
  opacity: 0.85;
}

.details {
  display: none;
  margin-top: 15px;
  color: #ddd;
}

a {
  text-decoration: none;
  color: white;
}
</style>

<script>
function toggle(id) {
  const el = document.getElementById(id);
  el.style.display = el.style.display === "none" ? "block" : "none";
}
</script>
</head>

<body>
<div class="overlay">

<h1>🤖 Roxy"WEB botları</h1>
<p>Sunucunuzu güçlendiren ve insanları eğlendiren Discord botlarımızla tanışın!</p>

<!-- BOT 1 -->
<div class="bot">
  <h2>🤖 RW"bot</h2>

  <button onclick="toggle('bot1')">📜 Özellikleri Göster</button>
  <div id="bot1" class="details">
    <p><b>Prefix:</b> !</p>
    <ul>
      <li>Sohbet sistemi</li>
      <li>Moderasyon komutları</li>
      <li>Eğlence komutları</li>
      <li>Anti chat spam</li>
      <li>Link koruması</li>
    </ul>
  </div>

  <br>
  <a href="https://discord.com/oauth2/authorize?client_id=1454804540334280788&permissions=8&integration_type=0&scope=bot" target="_blank">
    <button>➕ Sunucuma Ekle</button>
  </a>
</div>

<!-- BOT 2 -->
<div class="bot">
  <h2>🎭 R"Wroleplay</h2>

  <button onclick="toggle('bot2')">📜 Özellikleri Göster</button>
  <div id="bot2" class="details">
    <ul>
      <li>Roleplay sistemi</li>
      <li>RP komutları</li>
      <li>Chat koruma</li>
      <li>Spam engelleme</li>
    </ul>
  </div>

  <br>
  <a href="https://discord.com/oauth2/authorize?client_id=1454550694504960081&permissions=8&integration_type=0&scope=bot"_blank">
    <button>➕ Sunucuma Ekle</button>
  </a>
</div>

<!-- DISCORD SUNUCU -->
<div class="bot">
  <h2>💬 Discord Sunucumuz</h2>
  <p>
    Sunucumuza katılanlara <b>botlarını sitemize ekliyor</b>, özel özellikler ve destek sağlıyoruz
  </p>

  <a href="https://discord.gg/zFyVu5uq3W" target="_blank">
    <button>🚀 Discord Sunucumuza Katıl</button>
  </a>
</div>

</div>
</body>
</html>
`);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("RW Bot sitesi çalışıyor");
});


const PORT = process.env.PORT || 3000;

app.use(express.static("public")); // varsa

app.get("/", (req, res) => {
  res.send("RW Bot Sitesi Çalışıyor 🚀");
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});

