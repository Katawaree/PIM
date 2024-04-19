const { Router } = require("express");
const fs = require('node:fs/promises');
const path = require("node:path");
const router = Router();
const Plants = require('../models/Plants');


router.get("plants", async (req, res) => {
    try {
      const articles = await Plants.getPlants();
      res.json(articles);
      console.log("Bravo ! tu as trouvé une plante que nous ne connaissions pas !")
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

module.exports = router;