const db = require ('../db/database.js')

/*le requete sur la table des fournisseur*/
let Fournisseur = {};

/* requete pour obtenir la liste complète de la table fournisseur */
Fournisseur.findAllFournisseur =() => {
    return new Promise((resolve, reject) =>{
        db.query('Select * From fournisseur', (err,res)=>{
            if (err)return reject(err)
            return resolve(res)
        });
    });
};

/* requete pour récuperer une fournisseur spécifique grâce à un id*/
Fournisseur.findAllFournisseur = () => {
    return new Promise((resolve, reject)=>{
        db.query('Select * From fournisseur Where id = ?',[id],(err,res)=>{
            if (err) return reject (err)
            return resolve(res)
        });
    });
};

/* requete pour la creation d'une fournisseur */
Fournisseur.newFournisseur = () =>{
    return new Promise((resolve, reject) =>{
        const params = [
            fournisseur.fournisseurId,
            fournisseur.fournisseurName,
            fournisseur.adresse,
            fournisseur.telephone,
            fournisseur.pays,
            fournisseur.ville,
            fournisseur.numCompte,
            fournisseur.swiftCode,
            fournisseur.ibanNum,
        ];
        const query = 'INSERT INTO invoice (fournisseurId, fournisseurName, adresse , telephone, pays, ville, numCompte, swiftCode, ibanNum) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
        db.query(query, params, (err, res) => {
          if (err) return reject(err);
          resolve(res);
        });
      });
    };

    /* requete pour la modification d'un fournisseur */
Fournisseur.updateFournisseur = () =>{
    return new Promise((resolve, reject) =>{
        const params = [
            fournisseur.fournisseurId,

            fournisseur.fournisseurName,
            fournisseur.adresse,
            fournisseur.telephone,
            fournisseur.pays,
            fournisseur.ville,
            fournisseur.numCompte,
            fournisseur.swiftCode,
            fournisseur.ibanNum,
        ];
        'UPDATE fournisseur SET fournisseurId = ?, fournisseurName = ?, adresse = ?, telephone = ?, pays = ?, ville = ?, numCompte = ?, swiftCode = ?, ibanNum = ? WHERE id = ?';
        db.query(query, params, (err, res) => {
          if (err) return reject(err);
          resolve(res);
        });
      });
    };

/* requete pour la suppression d'une fournisseur*/
Fournisseur.deleteFournisseur = id => {
    return new Promise ((resolve, reject) => {
        db.query('DELETE FROM fournisseur WHERE id = ?', [id], (err,res) => {
            if (err) return reject(err);
            resolve(res);
        });
    });
};
    module.exports = Fournisseur;