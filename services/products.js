const db = require('../model/db');
const helper = require('../helper');


// To get all the products.
async function getAllProducts(){

    const rows = await db.query('SELECT * FROM products');
    return rows;
}

// To get a specific product by his id.
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

// To add a new product.
async function addProduct(product){

    const query = `INSERT INTO products (name, price, description, reduction, urlImage)
                   VALUES (?, ?, ?, ?, ?)`;
    const params = [product.name, product.price, product.description, product.reduction, product.urlImage];
    const result = await db.query(query, params);

    if(result != null){

        return successMessage = "Produit ajoute avec success a la base de donnees :) !";
    }

    return errorMessage = "Erreur lors de l'ajout du produit a la base de donnees :( !";
}

// To delete an existing product.
async function deleteProduct(name){

    const query = `DELETE FROM products WHERE name = ?`;
    const result = await db.query(query, [name]);

    if(result != null){

        return message = "Le produit n'a pas pu etre supprimer :( !";
    }

    return message = "Le produit a ete supprime avec success :) !";
}

// To modify an existing product in the database.
async function modifyProduct(product){

    const query = `UPDATE products SET name = ?, price = ?, description = ?, reduction = ?, urlImage = ?
                   WHERE id = ?`;
    const params = [product.name, product.price, product.description, product.reduction, product.urlImage, product.id];
    const result = await db.query(query, params);

    if(!result){

        return message = "Le produit n'a pas pu etre modifie :( !";
    }

    return message = "Le produit a ete modifie avec success :) !";
}

module.exports = {
    getAllProducts,
    getProductById,
    addProduct,
    deleteProduct,
    modifyProduct
}
