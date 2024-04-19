const { Router } = require("express");
const fs = require('node:fs/promises');
const path = require("node:path");
const router = Router();
const Plants = require('../models/Plants');

router.get("plants", async (req, res) => {
    try {
      const articles = await UserPlant.getPlants();
      res.json(articles);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

  router.post("/user-plants", async (req, res) => {
    try {
      // Code pour récupérer les données de l'API
      // (Votre code existant pour récupérer les données de l'API va ici)
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
      // Enregistrer la plante dans la base de données SQLite
      const plantFromDatabase = await Plants.findOrCreate(plantName, plantDetails);
      // Assurez-vous que findOrCreate est implémenté dans votre modèle de plante (Plant)
  
      // Enregistrer l'image dans le dossier et obtenir le chemin du fichier
      const filename = path.join(__dirname, "../uploads/users", `${req.user.id}_${req.body.plant_id}-${Date.now()}.jpg`);
      await fs.writeFile(filename, imgBuffer);
  
      // Enregistrer les données dans la table user-plants de la base de données SQLite
      const article = await UserPlant.createUserPlant({
        image: filename,
        plant_id: plantFromDatabase.id,
        user_id: req.user.id,
      });
  
      res.status(201).json(article);
    } catch (error) {
      console.error(error)
      res.status(500).send(error.message);
    }
  });