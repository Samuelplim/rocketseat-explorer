const sqliteConnection = require("../../sqlite");

const createUser = require("./createUsers");

async function migrationsRun() {
  const schemas = [createUser].join("");

  sqliteConnection()
    .then((db) => db.exec(schemas))
    .catch((error) => console.error(error));
}
module.exports = migrationsRun;
