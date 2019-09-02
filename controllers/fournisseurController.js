const db = require('../db/database.js')

/*la requete sur la table des fournisseur*/
let Fournisseurs = {};

/* requete pour obtenir la liste complète de la table fournisseur */
Fournisseurs.findOneFournisseur = fournisseurid => {
    return new Promise((resolve, reject) => {
        db.query('Select * From fournisseur Where fournisseurId = ?', [fournisseurid], (err, res) => {
            if (err) return reject(err)
            return resolve(res)
        });
    });
};

/* requete pour récuperer une fournisseur spécifique grâce à un id*/
Fournisseurs.findOneFournisseur = fournisseurid => {
    return new Promise((resolve, reject) => {
        db.query('Select * From fournisseur Where fournisseurId = ?', [fournisseurid], (err, res) => {
            if (err) return reject(err)
            return resolve(res)
        });
    });
};

/* requete pour la creation d'une fournisseur */
Fournisseurs.newFournisseur = () => {
    return new Promise((resolve, reject) => {
        const params = [
            fournisseurs.fournisseurId,
            fournisseurs.fournisseurName,
            fournisseurs.adresse,
            fournisseurs.telephone,
            fournisseurs.pays,
            fournisseurs.ville,
            fournisseurs.numCompte,
            fournisseurs.swiftCode,
            fournisseurs.ibanNum,
        ];
        const query = 'INSERT INTO invoice (fournisseurId, fournisseurName, adresse , telephone, pays, ville, numCompte, swiftCode, ibanNum) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
        db.query(query, params, (err, res) => {
            if (err) return reject(err);
            resolve(res);
        });
    });
};

/* requete pour la modification d'un fournisseur */
Fournisseurs.updateFournisseur = (fournisseurs, fournisseurId) => {
    return new Promise((resolve, reject) => {
        const params = [
            fournisseurs.fournisseurName,
            fournisseurs.adresse,
            fournisseurs.telephone,
            fournisseurs.pays,
            fournisseurs.ville,
            fournisseurs.numCompte,
            fournisseurs.swiftCode,
            fournisseurs.ibanNum,
            fournisseurId,
        ];
        'UPDATE fournisseur SET fournisseurName = ?, adresse = ?, telephone = ?, pays = ?, ville = ?, numCompte = ?, swiftCode = ?, ibanNum = ? WHERE fournisseurId = ?';
        db.query(query, params, (err, res) => {
            if (err) return reject(err);
            resolve(res);
        });
    });
};

/* requete pour la suppression d'une fournisseur*/
Fournisseurs.deleteFournisseur = fournisseurid => {
    return new Promise((resolve, reject) => {
        db.query('DELETE FROM fournisseur WHERE fournisseurId = ?', [fournisseurid], (err, res) => {
            if (err) return reject(err);
            resolve(res);
        });
    });
};
module.exports = Fournisseurs;