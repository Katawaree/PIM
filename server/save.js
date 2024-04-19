// App.js - Utilisation des opérations CRUD avec Knex

const db = require('./models/Plants');
const { getPlants } = require('./models/Plants');

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

async function main() {
  const boissons = {

  }

  for (boisson_name in boissons) {
    await db.createPlant(boisson_name, getPlants([boisson_name], boissons[boisson_name]));
  }

  // Read
  const getAllBoissons = await db.getAllBoissons();
  console.log('Tous les boissons :', getAllBoissons);
}

main().catch(err => console.error(err));
