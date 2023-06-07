/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("passbookTbl").insert([
    {
      id: 1,
      date: "2023-04-08",
      usage: "相続金",
      deposit: 46300000,
      drawer: 0,
      amount: 46300000,
      account_id: 1,
    },
    {
      id: 2,
      date: "2023-04-08",
      usage: "ネットカジノへ送金",
      deposit: 0,
      drawer: 10000000,
      amount: 36300000,
      account_id: 1,
    },
    {
      id: 3,
      date: "2023-04-09",
      usage: "ネットカジノへ送金",
      deposit: 0,
      drawer: 16000000,
      amount: 20300000,
      account_id: 1,
    },
    {
      id: 4,
      date: "2023-04-10",
      usage: "ネットカジノへ送金",
      deposit: 0,
      drawer: 15000000,
      amount: 5300000,
      account_id: 1,
    },
    {
      id: 5,
      date: "2023-04-11",
      usage: "お引き出し",
      deposit: 0,
      drawer: 5000000,
      amount: 300000,
      account_id: 1,
    },
  ]);
};
