const knex = require("./db");

async function createUserPlant(userplantData) {
  const [id] = await knex("user_plant").insert(userplantData);
  return getUserPlantById(id);
}

function getUserPlants() {
  return knex("user_plant").select();
}

function getUserPlantById(id) {
  return knex("user_plant").where({ id }).first();
}

async function updateUserPlant(id, userplantData) {
  const result = await knex("user_plant").where({ id }).update(userplantData);
  if (result === 0) {
    throw new Error("UserPlant not found");
  }
  return getUserPlantById(id);
}

function deleteUserPlant(id) {
  return knex("user_plant").where({ id }).del();
}

module.exports = {
  createUserPlant,
  getUserPlants,
  getUserPlantById,
  updateUserPlant,
  deleteUserPlant,
};
