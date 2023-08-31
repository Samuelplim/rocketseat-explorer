exports.up = (knex) =>
  knex.schema.hasTable("users").then((exists) => {
    if (!exists) {
      return knex.schema.createTable("users", (table) => {
        table.increments("id");
        table.text("name");
        table.text("email");
        table.text("password");

        table.timestamp("created_at").default(knex.fn.now());
        table.timestamp("updated_at").default(knex.fn.now());
      });
    } else {
      return knex.schema.up();
    }
  });

exports.down = (knex) => knex.schema.dropTable("users");
