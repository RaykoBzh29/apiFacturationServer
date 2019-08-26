const db = require ('../db/database.js')

/*les requetes sur la table des factures*/
let Facture = {};

/* requete pour la creation d'une facture */
Facture.newFacture = () =>{
    return new Promise((resolve, reject) =>{
        const params = [
            facture.factureId,
            facture.factureNum,
            facture.date,
            facture.commandeNum,
            facture.fournisseurId,
            facture.prixHt,
            facture.taxe,
            facture.prixTtc,
            facture.etat,
        ];
        const query = 'INSERT INTO facture (factureId, factureNum, date, commandeNum, prixHt, taxe, etat, fournisseurId,) VALUES (?, ?, ?, ?, ?, ?, ?, ?,)';
        db.query(query, params, (err, res) => {
          if (err) return reject(err);
          resolve(res);
        });
      });
    };

    /* requete pour obtenir la liste complète de la table facture */
Facture.findAllFacture =() => {
    return new Promise((resolve, reject) =>{
        db.query('Select * From facture', (err,res)=>{
            if (err)return reject(err)
            return resolve(res)
        });
    });
};

/* requete pour récuperer une facture spécifique grâce à un id*/
Facture.findAllFacture = () => {
    return new Promise((resolve, reject)=>{
        db.query('Select * From facture Where id = ?',[id],(err,res)=>{
            if (err) return reject (err)
            return resolve(res)
        });
    });
};

/* requete pour la modification d'une facture */
Facture.updateFacture = () =>{
    return new Promise((resolve, reject) =>{
        const params = [
            facture.factureId,
            facture.factureNum,
            facture.date,
            facture.commandeNum,
            facture.prixHt,
            facture.taxe,
            facture.etat,
            facture.fournisseurId,
        ];
        'UPDATE facture SET factureId = ?, factureNum = ?, date = ?, commandeNum = ?, prixHt = ?, taxe = ?, etat = ?, fournisseurId = ? WHERE id = ?';
        db.query(query, params, (err, res) => {
          if (err) return reject(err);
          resolve(res);
        });
      });
    };

/* requete pour la suppression d'une facture*/
Facture.deleteFacture = id => {
    return new Promise ((resolve, reject) => {
        db.query('DELETE FROM facture WHERE id = ?', [id], (err,res) => {
            if (err) return reject(err);
            resolve(res);
        });
    });
};

    module.exports = Facture;