/* definition d'express , du router et des requier eventuel*/
const express = require('express');
const fournisseurRouter = express.Router();

const Fournisseur = require('../controllers/fournisseurController.js');


/*route qui permet la lecture de tout les fournisseur dans la base de donnée*/
fournisseurRouter.get('/', async (req, res) => {
    try {
      let result = await Fournisseur.findAllFournisseur();
      res.json(result);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  });


/*route qui permet la lecture d'une fournisseur dans la base de donnée*/
  fournisseurRouter.get('/:fournisseurid', async (req, res) => {
    try {
      let result = await Fournisseur.findOneFournisseur(req.params.id);
      res.json(result);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  });

/*route qui permet l'ajout d'une fournisseur dans la base de donnée */
fournisseurRouter.post('/', async (req, res) => {
    try {
      const fournisseur = req.body;
      let result = await Fournisseur.newFournisseur(fournisseur);
      res.json(result);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  });

  /*route qui permet la mise à jour d'une fournisseur dans la basse de donnée */
fournisseurRouter.put('/:id', async (req, res) => {
    try {
      const fournisseur = req.body;
      let result = await Fournisseur.updateFournisseur(fournisseur, req.params.id);
      res.json(result);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  });

  /*route qui permet la suppression d'une fournisseur dans la base de donnée */
fournisseurRouter.delete('/:id', async (req, res) => {
    try {
      let result = await Fournisseur.deleteFournisseur(req.params.id);
      res.json(result);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  });

  module.exports = fournisseurRouter;