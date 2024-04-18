const knex = require("./models/db");
(async () => {
  await knex.schema
    .createTable("users", function (table) {
      table.increments("id");
      table.string("username");
      table.string("e-mail");
      table.string("password");
      table.integer("connexion_streak");
      table.foreign("code.id").references("sessions.session.id");

    })
    .then(() => {
      console.log("Table users created!");
    })
    .catch((err) => {
      console.log(err);
    });

  await knex.schema
    .createTable("user_plant", function (table) {
      table.increments("id");
      table.string("title");
      table.foreign("plant.id").references("plants.plant.id");
      table.foreign("user.id").references("users.user.id");
      table.foreign("image").references("session_plant.image");
    })
    .then(() => {
      console.log("Table user_plant created!");
    })
    .catch((err) => {
      console.log(err);
    });

    await knex.schema
    .createTable("sessions", function (table) {
      table.increments("id");
    })
    .then(() => {
      console.log("Table sessions created!");
    })
    .catch((err) => {
      console.log(err);
    });

    await knex.schema
    .createTable("session_plant", function (table) {
      table.increments("id");
      table.foreign("plant.id").references("plants.plant.id");
      table.string("image");
    })
    .then(() => {
      console.log("Table session_plant created!");
    })
    .catch((err) => {
      console.log(err);
    });
    
    await knex.schema
    .createTable("plants", function (table) {
      table.increments("id");
      table.string("name");
      table.string("latin_name");
      table.string("milieu");
      table.string("fun_fact");

    })
    .then(() => {
      console.log("Table session_plant created!");
    })
    .catch((err) => {
      console.log(err);
    });

  await knex.destroy();
})();
