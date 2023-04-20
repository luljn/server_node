const express = require('express');

const router = express.Router();

const products = require('../services/products');

// Get all products.
router.get('/', async(req, res, next) =>{

    try{

        res.json(await products.getAllProducts());
        console.log("Produits obtenus avec success :) !");
    }

    catch(error){

        console.log('Erreur lors du chargement des produits :( !');
        res.status(500).send();
        //res.json({erreur : "Une Erreur est survenue :( !"});
        next(error);
    }
});

// Get product by id.
router.get('/:id', async(req, res, next) =>{

    try{

        const product = await products.getProductById(req.params.id);

        if(!product){

            res.json({message : "Le produit que vous cherchez n'existe pas :( !"});
            console.log("Le produit que vous cherchez n'existe pas :( !");
            return res.status(404).send();
        }

        res.json(product);
        console.log("Produit obtenu avec success :) !");
    }

    catch(error){

        console.log('Erreur lors du chargement du produit :( !');
        res.status(500).send();
        //res.json({erreur : "Une Erreur est survenue :( !"});
        next(error);
    }
});

// Add a new product in the database.
router.post('/add', async(req, res, next)=>{

    try{

        const newProduct = await products.addProduct(req.body);

        if(!newProduct){

            res.status(404).send();
            res.json({erreur : "Le produit n'a pas ete cree :( !"});
        }

        res.json({message : 'Produit ajoute a la base de donnees avec success :) !'});
        console.log('Produit ajoute a la base de donnees avec success :) !');
    }

    catch(error){

        res.status(500).send();
        console.error("Error : une erreur est survenue :( !");
        //res.json({erreur : "Une Erreur est survenue :( !"});
        next(error);
    }
});

// Delete a product from the database.
router.delete('/delete/:name', async(req, res, next) =>{

    try{

        const productToDelete = await products.deleteProduct(req.params.name);
        
        if(!productToDelete){

            res.status(404).send();
            res.json({erreur : "Le produit que vous voulez supprimer n'existe pas :( !"});
        }

        res.json({message : "Le produit a ete supprime avec success :) !"});
        console.log("Le produit a ete supprime avec success :) !");
    }

    catch(error){

        res.status(500).send();
        console.error("Erreur : une erreur est survenue :( !");
        //res.json({erreur : "Une Erreur est survenue :( !"});
        next(error);
    }
});

// Modify a product from the database.
router.put('/modify/:id', async(req, res, next) =>{

    try{

        const productToModify = await products.modifyProduct(req.body);

        if(!productToModify){

            res.status(404).send();
            res.json({erreur : "Le produit que vous voulez modifier n'existe pas :( !"});            
        }

        res.json({message : "Le produit a ete modifie avec success :) !"});
        console.log("Le produit a ete modifie avec success :) !");
    }

    catch(error){

        res.status(500).send();
        console.error("Erreur : une erreur est survenue :( !");
        //res.json({erreur : "Une Erreur est survenue :( !"});
        next(error);
    }
});

module.exports = router;
