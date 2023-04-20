const express = require('express');

const router = express.Router();

const products = require('../services/products');

// Get all products.
router.get('/', async(req, res, next) =>{

    try{

        res.json(await products.getAllProducts());
    }

    catch(error){

        console.log('Erreur lors du chargement des produits :( !');
        next(error);
    }
});

// Get product by id.
router.get('/:id', async(req, res, next) =>{

    try{

        const product = await products.getProductById(req.params.id);

        if(!product){

            return res.status(404).send();
        }
        res.json(product);
    }

    catch(error){

        res.status(500).send();
        next(error);
    }
});

module.exports = router;
