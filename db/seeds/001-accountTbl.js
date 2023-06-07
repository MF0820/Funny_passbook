/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("passbookTbl").del();
  await knex("accountTbl").del();
  await knex("accountTbl").insert([{ id: 1, name: "admin" }]);
};
