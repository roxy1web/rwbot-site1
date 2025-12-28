const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<title>RW Botlar</title>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: url('/background.png') no-repeat center center fixed;
  background-size: cover;
  color: white;
}

.overlay {
  background: rgba(0,0,0,0.7);
  min-height: 100vh;
  padding: 40px;
}

.bot {
  background: rgba(20,20,20,0.9);
  padding: 20px;
  border-radius: 15px;
  margin-bottom: 20px;
}

button {
  background: #5865F2;
  border: none;
  padding: 10px 20px;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 10px;
}

.details {
  display: none;
  margin-top: 10px;
  color: #ddd;
}

a {
  color: white;
  text-decoration: none;
}
</style>

<script>
function toggle(id){
  const el = document.getElementById(id);
  el.style.display = el.style.display === "none" ? "block" : "none";
}
</script>
</head>

<body>
<div class="overlay">

<h1>🤖 RW Bot Ailesi</h1>
<p>Sunucunuzu güçlendiren Discord botları</p>

<div class="bot">
  <h2>🤖 RW"bot</h2>
  <button onclick="toggle('bot1')">Özellikleri Göster</button>
  <div id="bot1" class="details">
    <p><b>Prefix:</b> !</p>
    <ul>
      <li>Sohbet sistemi</li>
      <li>Moderasyon</li>
      <li>Eğlence komutları</li>
      <li>Anti chat spam</li>
      <li>Link koruması</li>
    </ul>
  </div>
</div>

<div class="bot">
  <h2>🎭 R"Wroleplay</h2>
  <button onclick="toggle('bot2')">Özellikleri Göster</button>
  <div id="bot2" class="details">
    <ul>
      <li>Sunucuda Roleplay sistemi</li>
      <li>Chat koruma</li>
      <li>Spam engelleme</li>
      <li>RP komutları</li>
    </ul>
  </div>
</div>

<div class="bot">
  <h2>💬 Discord Sunucumuz</h2>
  <p>Sunucumuza katılanlara <b>ücretsiz komutlar</b>, özel özellikler ve destek!</p>
  <button>
    <a href="https://discord.gg/zFyVu5uq3W" target="_blank">
      Discord Sunucumuza Katıl
    </a>
  </button>
</div>

</div>
</body>
</html>
`);
});

app.use(express.static(__dirname));

app.listen(process.env.PORT || 3000);
