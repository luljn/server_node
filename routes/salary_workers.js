const express = require('express');

const router = express.Router();

const salary_workers = require('../services/salary_workers');

// Get all salary_workers.
router.get('/', async (req, res, next) =>{
    
    try{

        res.json(await salary_workers.getAllSalaryWorkers());
        console.log("Salaries obtenus avec success :) !");
    }

    catch(error){
        console.log('Erreur lors du chargement des salaries :( !');
        next(error);
    }
});

// Get salary_worker by name.
router.get('/:name', async (req, res, next) =>{

    try{

        const salary_worker = await salary_workers.getSalaryWorkerByName(req.params.name);

        if (!salary_worker){

            res.json({message : "Le salarie que vous cherchez n'existe pas :( !"});
            console.log("Le salarie que vous cherchez n'existe pas :( !");
            return res.status(404).send();
        }
        res.json(salary_worker);
    } 
    
    catch(error){

        console.log('Erreur lors du chargement du salarie :( !');
        res.status(500).send();
        next(error);
    }
});

module.exports = router;
