const db = require('../model/db');
const helper = require('../helper');


// To get all the products.
async function getAllProducts(){

    const rows = await db.query('SELECT * FROM products');
    return rows;
}

// To get a product by his id.
async function getProductById(id){

    const query = 'SELECT * FROM products WHERE id = ?';
    const [rows, ] = await db.query(query, [id]); 
    const data = helper.emptyOrRows(rows);

    if(!rows){

        throw Error('Erreur lors du chargement du produit :( !');
        return[];
    }

    return data;
}

module.exports = {
    getAllProducts,
    getProductById
}
