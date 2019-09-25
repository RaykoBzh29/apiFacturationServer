const db = require('../db/database.js')

/*la requete sur la table des fournisseur*/
let Fournisseurs = {};

/* requete pour obtenir la liste complète de la table fournisseur */
Fournisseurs.findAllFournisseurs = () => {
    return new Promise((resolve, reject) => {
        db.query('Select * From fournisseur', (err, res) => {
            if (err) return reject(err)
            return resolve(res)
        });
    });
};
/* requete pour récuperer une fournisseur spécifique grâce à un id*/
Fournisseurs.findOneFournisseur = id => {
    return new Promise((resolve, reject) => {
        db.query('Select * From fournisseur Where id = ?', [id], (err, res) => {
            if (err) return reject(err)
            return resolve(res)
        });
    });
};
/* requete pour la creation d'une fournisseur */
Fournisseurs.newFournisseur = fournisseur => {
    return new Promise((resolve, reject) => {
        const params = [
            fournisseur.id,
            fournisseur.fournisseurName,
            fournisseur.adresse,
            fournisseur.telephone,
            fournisseur.pays,
            fournisseur.ville,
            fournisseur.numCompte,
            fournisseur.swiftCode,
            fournisseur.ibanNum,
        ];
        const query = 'INSERT INTO fournisseur (id, fournisseurName, adresse , telephone, pays, ville, numCompte, swiftCode, ibanNum) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
        db.query(query, params, (err, res) => {
            if (err) return reject(err);
            resolve(res);
        });
    });
};
/* requete pour la modification d'un fournisseur */
Fournisseurs.editSupplier = (fournisseur, id) => {
    return new Promise((resolve, reject) => {
        const params = [
            fournisseur.fournisseurName,
            fournisseur.adresse,
            fournisseur.telephone,
            fournisseur.pays,
            fournisseur.ville,
            fournisseur.numCompte,
            fournisseur.swiftCode,
            fournisseur.ibanNum,
            id,
        ];
        'UPDATE fournisseur SET fournisseurName = ?, adresse = ?, telephone = ?, pays = ?, ville = ?, numCompte = ?, swiftCode = ?, ibanNum = ? WHERE id = ?';
        db.query(query, params, (err, res) => {
            if (err) return reject(err);
            resolve(res);
        });
    });
};
/* requete pour la suppression d'une fournisseur*/
Fournisseurs.deleteFournisseur = id => {
    return new Promise((resolve, reject) => {
        db.query('DELETE FROM fournisseur WHERE id = ?', [id], (err, res) => {
            if (err) return reject(err);
            resolve(res);
        });
    });
};
module.exports = Fournisseurs;