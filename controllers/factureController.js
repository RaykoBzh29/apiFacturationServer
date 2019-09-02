const db = require ('../db/database.js')

/*les requetes sur la table des factures*/
let Factures = {};

/* requete pour la creation d'une facture */
Factures.newFacture = () =>{
    return new Promise((resolve, reject) =>{
        const params = [
            factures.factureId,
            factures.factureNum,
            factures.date,
            factures.commandeNum,
            factures.fournisseurId,
            factures.prixHt,
            factures.taxe,
            factures.prixTtc,
            factures.etat,
        ];
        const query = 'INSERT INTO facture (factureId, factureNum, date, commandeNum, prixHt, taxe, etat, fournisseurId,) VALUES (?, ?, ?, ?, ?, ?, ?, ?,)';
        db.query(query, params, (err, res) => {
          if (err) return reject(err);
          resolve(res);
        });
      });
    };

    /* requete pour obtenir la liste complète de la table facture */
Factures.findAllFactures =() => {
    return new Promise((resolve, reject) =>{
        db.query('Select * From facture', (err,res)=>{
            if (err)return reject(err)
            return resolve(res)
        });
    });
};

/* requete pour récuperer une facture spécifique grâce à un id*/
Factures.findOneFacture = id => {
    return new Promise((resolve, reject)=>{
        db.query('Select * From facture Where id = ?',[id],(err,res)=>{
            if (err) return reject (err)
            return resolve(res)
        });
    });
};

/* requete pour la modification d'une facture */
Factures.updateFacture = () =>{
    return new Promise((resolve, reject) =>{
        const params = [
            factures.factureId,
            factures.factureNum,
            factures.date,
            factures.commandeNum,
            factures.prixHt,
            factures.taxe,
            factures.etat,
            factures.fournisseurId,
        ];
        'UPDATE facture SET factureId = ?, factureNum = ?, date = ?, commandeNum = ?, prixHt = ?, taxe = ?, etat = ?, fournisseurId = ? WHERE id = ?';
        db.query(query, params, (err, res) => {
          if (err) return reject(err);
          resolve(res);
        });
      });
    };

/* requete pour la suppression d'une facture*/
Factures.deleteFacture = id => {
    return new Promise ((resolve, reject) => {
        db.query('DELETE FROM facture WHERE id = ?', [id], (err,res) => {
            if (err) return reject(err);
            resolve(res);
        });
    });
};

    module.exports = Factures;