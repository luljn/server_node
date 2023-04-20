const express = require('express');

const router = express.Router();

const users = require('../services/users');

// Get all users.
router.get('/', async (req, res, next) =>{
    
    try{

        res.json(await users.getAllUsers());
    }

    catch(error){
        console.log('Erreur lors du chargement des utilisateurs :( !');
        next(error);
    }
});

// Get user by id.
router.get('/:id', async (req, res, next) =>{

    try{

        const product = await users.getUserById(req.params.id);

        if (!product){

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
