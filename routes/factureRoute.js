/* definition d'express , du router et des requier eventuel*/
const express = require('express');
const factureRouter = express.Router();

const Facture = require('../controllers/factureController.js');

/*route qui permet l'ajout d'une facture dans la base de donnée */
factureRouter.post('/', async (req, res) => {
    try {
      const facture = req.body;
      let result = await Facture.newFacture(facture);
      res.json(result);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  });

/* route qui permet la lecture de toutes les facture de la base de donéne*/
factureRouter.get('/', async (req, res) => {
    try {
      let result = await Facture.findAllFactures();
      res.json(result);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  });


/* route qui permet la lecture d'une facture spécifique dans la base de donnée*/
  factureRouter.get('/:id', async (req, res) => {
    try {
      let result = await Facture.findOneFacture(req.params.id);
      res.json(result);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  });

  /*route qui permet la mise à jour d'une facture dans la basse de donnée */
factureRouter.put('/:id', async (req, res) => {
  try {
    const facture = req.body;
    let result = await Facture.updateFacture(facture, req.params.id);
    res.json(result);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

  /*route qui permet la suppression d'une facture dans la base de donnée */
factureRouter.delete('/:id', async (req, res) => {
    try {
      let result = await Facture.deleteFacture(req.params.id);
      res.json(result);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  });

  module.exports = factureRouter;