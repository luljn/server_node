const db = require('../model/db');
const helper = require('../helper');


// To get all the users.
async function getAllUsers(){

    const rows = await db.query(`SELECT * FROM users`);
    return rows;
}

// To get a specific user by his identifier.
async function getUserById(id){

    const query = 'SELECT * FROM users WHERE id = ?';
    const [rows, ] = await db.query(query, [id]);
    const data = helper.emptyOrRows(rows);

    if (!rows){

        throw Error("Erreur lors de la récupération de l'utilisateur :( !");
        return[];
    }

    return data;
}

module.exports = {
    getAllUsers,
    getUserById
};