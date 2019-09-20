const db = require('../db/database.js')

/*les requetes sur la table des factures*/
let Factures = {};

/* requete pour la creation d'une facture */
Factures.newFacture = () => {
    return new Promise((resolve, reject) => {
        const params = [
            factures.factureNum,
            factures.date,
            factures.commandeNum,
            factures.prixHt,
            factures.taxe,
            factures.etat,
            factures.id,
        ];
        const query = 'INSERT INTO facture (factureNum, date, commandeNum, prixHt, taxe, etat, id,) VALUES (?, ?, ?, ?, ?, ?, ?,)';
        db.query(query, params, (err, res) => {
            if (err) return reject(err);
            resolve(res);
        });
    });
};

/* requete pour obtenir la liste complète de la table facture */
Factures.findAllFactures = () => {
    return new Promise((resolve, reject) => {
        db.query('Select * From facture', (err, res) => {
            if (err) return reject(err)
            return resolve(res)
        });
    });
};

/* requete pour récuperer une facture spécifique grâce à un id*/
Factures.findOneFacture = factureid => {
    return new Promise((resolve, reject) => {
        db.query('Select * From facture Where factureId = ?', [factureid], (err, res) => {
            if (err) return reject(err)
            return resolve(res)
        });
    });
};

/* requete pour la modification d'une facture */
Factures.updateFacture = () => {
    return new Promise((resolve, reject) => {
        const params = [
            factures.factureNum,
            factures.date,
            factures.commandeNum,
            factures.prixHt,
            factures.taxe,
            factures.etat,
            factures.id,
            factureId,
        ];
        'UPDATE facture SET factureNum = ?, date = ?, commandeNum = ?, prixHt = ?, taxe = ?, etat = ?, id = ? WHERE id = ?';
        db.query(query, params, (err, res) => {
            if (err) return reject(err);
            resolve(res);
        });
    });
};

/* requete pour la suppression d'une facture*/
Factures.deleteFacture = factureid => {
    return new Promise((resolve, reject) => {
        db.query('DELETE FROM facture WHERE factureId = ?', [factureid], (err, res) => {
            if (err) return reject(err);
            resolve(res);
        });
    });
};

module.exports = Factures;