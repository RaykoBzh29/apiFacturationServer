const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const welcome =
    "Bienvenue sur l'API de facturation de l'entreprise BENETEAU cette application à pour but de fournir des information sur les factures et fournisseurs de l'entreprise en fonction des critère choisi par l'utilisateur";
  res.send(welcome);
});


module.exports = router;