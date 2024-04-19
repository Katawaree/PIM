const knex = require('./db');
const UserPlant = require('./UserPlant');

async function createPlant(userplantData) {
    const [id] = await knex("plants").insert(plantData);
    return getUserPlantById(id);
}

function getPlants() {
    return knex("plants").select();
  }
  
  function getPlantById(id) {
    return knex("plants").where({ id }).first();
  }
  
  async function updatePlant(id, userplantData) {
    const result = await knex("plants").where({ id }).update(plantData);
    if (result === 0) {
      throw new Error("Plant not found");
    }
    return getPlantById(id);
  }
  
  function deletePlant(id) {
    return knex("plants").where({ id }).del();
  }
  

  module.exports = {
    createPlant,
    getPlants,
    getPlantById,
    updatePlant,
    deletePlant,
  };
