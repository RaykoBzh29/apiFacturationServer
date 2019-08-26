const db = require ('../db/database.js')

/*les requetes sur la table des factures*/
let Facture = {};

/* requete pour la creation d'une facture */
Facture.newFacture = () =>{
    return new Promise((resolve, reject) =>{
        const params = [
            facture.factureNum,
            facture.date,
            facture.commandeNum,
            facture.fournisseurId,
            facture.prixHt,
            facture.taxe,
            facture.prixTtc,
            facture.etat,
        ];
        const query = 'INSERT INTO invoice (facture_num, date, commandeNum , fournisseurId, prixHt, taxe, prixTtc, etat) VALUES (?, ?, ?, ?, ?, ?, ?)';
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
            facture.factureNum,
            facture.date,
            facture.commandeNum,
            facture.fournisseurId,
            facture.prixHt,
            facture.taxe,
            facture.prixTtc,
            facture.etat,
        ];
        'UPDATE facture SET facture_num = ?, date = ?, commandeNum = ?, fournisseurId = ?, prixHt = ?, taxe = ?, prixTtc = ?, etat = ? WHERE id = ?';
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