const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// public klasörünü kullan
app.use(express.static(path.join(__dirname, "public")));

// ana sayfa
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>RW Botlar</title>
        <style>
          body {
            margin: 0;
            font-family: Arial, sans-serif;
            background: #0f0f0f;
            color: white;
            text-align: center;
          }
          .container {
            padding: 50px;
          }
          .card {
            background: #1c1c1c;
            padding: 20px;
            margin: 20px auto;
            width: 300px;
            border-radius: 12px;
            box-shadow: 0 0 20px #00ffcc55;
          }
          button {
            padding: 12px 20px;
            border: none;
            border-radius: 8px;
            background: #00ffcc;
            font-weight: bold;
            cursor: pointer;
          }
          button:hover {
            background: #00ccaa;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>🤖 RW Botlar</h1>

          <div class="card">
            <h2>RW"bot</h2>
            <p>Prefix: !</p>
            <p>Sohbet • Moderasyon • Eğlence<br>Anti spam / link koruması</p>
            <button onclick="window.open('https://discord.com/oauth2/authorize?client_id=BOT1_CLIENT_ID&scope=bot&permissions=8')">
              Sunucuma Ekle
            </button>
          </div>

          <div class="card">
            <h2>R"W RolePlay</h2>
            <p>Sunucuda RP sistemi<br>Chat koruma • Spam önleme</p>
            <button onclick="window.open('https://discord.com/oauth2/authorize?client_id=BOT2_CLIENT_ID&scope=bot&permissions=8')">
              Sunucuma Ekle
            </button>
          </div>

          <br>
          <button onclick="window.open('https://discord.gg/zFyVu5uq3W')">
            💬 Discord Sunucumuza Katıl
          </button>
        </div>
      </body>
    </html>
  `);
});

// TEK VE SADECE TEK LİSTEN
app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});

