/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("passbookTbl", function (table) {
    table.integer("id").primary();
    table.date("date").notNullable;
    table.string("usage").notNullable;
    table.integer("deposit").notNullable;
    table.integer("drawer").notNullable;
    table.integer("amount").notNullable;
    table.integer("account_id").notNullable;
    table.foreign("account_id").references("accountTbl");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("passbookTbl");
};
