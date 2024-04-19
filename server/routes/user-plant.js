const { Router } = require("express");
const fs = require('node:fs/promises');
const path = require("node:path");
const router = Router();
const UserPlant = require('../models/UserPlant');


router.get("/user-plants", async (req, res) => {
  try {
    const articles = await UserPlant.getUserPlants();
    res.json(articles);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/user-plants", async (req, res) => {
  const imgBuffer = Buffer.from(req.body.image.split(',')[1], 'base64');
  const apiData = new FormData();
  const blob = new Blob([imgBuffer]);
  apiData.append('images', blob);
  const response = await fetch('https://my-api.plantnet.org/v2/identify/all?lang=fr&api-key=2b10JeSv3oajQoQw3FzRf3auYu', {
    method: "POST",
    body: apiData
  });
  const result = await response.json();
  const plantName = result.bestMatch;
  const plantDetails = result.results[0].species;
  if (response.status === 404) {
    return res.status(404).json({
      msg: 'Plante non identifiable'
    });
  }
  try {
    console.log(plantName, plantDetails);
    //const plantFromDtabase = await Plant.findOrCreate(plantName, plantDetails);
    const plantFromDtabase = {
      id: 1
    }
    const filename = +path.join(__dirname, "../uploads/users", `${req.user.id}_${req.body.plant_id}-${Date.now()}.jpg`)
    await fs.writeFile(filename, imgBuffer);
    const article = await UserPlant.createUserPlant({
      image: filename,
      plant_id : plantFromDtabase.id,
      user_id: req.user.id,
    });
    res.status(201).json(article);
  } catch (error) {
    console.error(error)
    res.status(500).send(error.message);
  }
});

router.get("/user-plants/:id", async (req, res) => {
  try {
    const article = await UserPlant.getUserPlantById(parseInt(req.params.id));
    res.json(article);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.put("/user-plants/:id", async (req, res) => {
  try {
    const article = await UserPlant.updateUserPlant(
      parseInt(req.params.id),
      req.body
    );
    res.json(article);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.delete("/user-plants/:id", async (req, res) => {
  try {
    await UserPlant.deleteUserPlant(parseInt(req.params.id));
    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
