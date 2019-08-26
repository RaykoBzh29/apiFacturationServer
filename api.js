/* Importation d'express et d'autres dépendances pour que l'api puisse fonctionner */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

/* j'appel cors pour traiter des requetes provenant de la partie client grâce à body-parser */
app.use(cors());

/* utilisation de bodyParser pour le traitement des requêtes */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/* Importations des differentes routes de l'api */
const accueilRouter = require('./routes/accueil.js');
const fournisseurRouter = require('./routes/fournisseurRoute.js');
const factureRouter = require('./routes/factureRoute.js');

/* création de la route vers l'accueil  et qui commencera par /facturation/ */
app.use('/facturation/', accueilRouter);

/* création de la  route d'accès aux fournisseur */
app.use('/fournisseurs/', fournisseurRouter);

/* création de la  route d'accès aux factures */
app.use('/factures/', factureRouter);

module.exports = app;