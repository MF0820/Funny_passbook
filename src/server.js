const knex = require("./knex.js");
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

const PORT = 8080;

// app.use("/", express.static("../public"));
app.use(express.static(path.join(__dirname, "../build")));

// ↓local環境で開発時ブラウザのセキュリティ機能により異なるオリジン間のリクエストが制限されている。
// npm install corsでミドルウェアを入れ、以下のように使用することでエラーを回避できるそです。
// app.use(cors());

app.use((req, res, next) => {
  // res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://funny-passbook.onrender.com"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

// ↓受信されるリクエストボディに 'application/json'というContent-Type headerがあるときにJSONをパースするミドルウェアが追加される。
// このミドルウェアが使われるときは、JSON.parseやJSON.stringifyをしなくてもよい。
app.use(express.json());

// 指定アカウントで登録されている情報を取得するAPI
app.get("/passbookInfo/:account_id", async (req, res) => {
  const account_id = Number(req.params.account_id);
  console.log(account_id);
  const allItems = async function () {
    return knex
      .select({
        id: "id",
        date: "date",
        usage: "usage",
        deposit: "deposit",
        drawer: "drawer",
        amount: "amount",
        account_id: "account_id",
      })
      .from("passbookTbl")
      .where("account_id", account_id);
  };
  const result = await allItems();
  console.log("result:", result);
  res.send(result);
});

app.get("/", (req, res) => {
  console.log("つながった");
  res.send("つながった");
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}/ ⭐️⭐️`);
});
