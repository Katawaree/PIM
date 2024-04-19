const knex = require('./db');
const UserPlant = require('./UserPlant');

async function createPlant(plantData) {
    const [id] = await knex("plants").insert(plantData);
    return getPlantById(id);
}

function getPlants(filters = {}) {
    return knex("plants").select().where(filters);
  }
  
  function getPlantById(id) {
    return knex("plants").where({ id }).first();
  }
  
  async function updatePlant(id, plantData) {
    const result = await knex("plants").where({ id }).update(plantData);
    if (result === 0) {
      throw new Error("Plant not found");
    }
    return getPlantById(id);
  }
  
  function deletePlant(id) {
    return knex("plants").where({ id }).del();
  }

  async function findOrCreate(filters, data) {
    const result = await getPlants(filters);
    if(result.length) return result[0];
    return await createPlant(data);
  }
  

  module.exports = {
    createPlant,
    getPlants,
    getPlantById,
    updatePlant,
    deletePlant,
    findOrCreate
  };
