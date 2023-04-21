const db = require('../model/db');
const helper = require('../helper');


// To get all the salary_workers.
async function getAllSalaryWorkers(){

    const rows = await db.query(`SELECT * FROM salary_workers`);
    return rows;
}

// To get a specific salary_worker by his name.
async function getSalaryWorkerByName(name){

    const query = 'SELECT * FROM salary_workers WHERE name = ?';
    const [rows, ] = await db.query(query, [name]);
    const data = helper.emptyOrRows(rows);

    if (!rows){

        throw Error("Erreur lors de la récupération du salarie :( !");
        return[];
    }

    return data;
}

module.exports = {
    getAllSalaryWorkers,
    getSalaryWorkerByName
};
