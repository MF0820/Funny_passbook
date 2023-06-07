const knex = require("./knex.js");
const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 8080;

app.use("/", express.static("../public"));

// ↓local環境で開発時ブラウザのセキュリティ機能により異なるオリジン間のリクエストが制限されている。
// npm install corsでミドルウェアを入れ、以下のように使用することでエラーを回避できるそです。
app.use(cors());

// ↓受信されるリクエストボディに 'application/json'というContent-Type headerがあるときにJSONをパースするミドルウェアが追加される。
// このミドルウェアが使われるときは、JSON.parseやJSON.stringifyをしなくてもよい。
app.use(express.json());

// 指定アカウントで登録されている情報を全て取得するAPI
app.get("/allItems", async (req, res) => {
  const allItems = await function () {
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
      .from("itemTbl");
  };
  const result = await allItems();
  // console.log("result:", result);
  res.send(result);
});

app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}/ ⭐️⭐️`);
});
