const express = require('express');

const router = express.Router();

const students = require('../services/students');

// Get all students.
router.get('/', async(req, res, next) =>{

    try{

        res.json(await students.getAllStudents());
        console.log("Etudiants obtenus avec success :) !");
    }

    catch(error){

        console.log('Erreur lors du chargement des etudiants :( !');
        res.status(500).send();
        //res.json({erreur : "Une Erreur est survenue :( !"});
        next(error);
    }
});

// Get student by name.
router.get('/:name', async(req, res, next) =>{

    try{

        const student = await students.getStudentByName(req.params.name);

        if(!student){

            res.json({message : "L\'etudiant(e) que vous cherchez n'existe pas :( !"});
            console.log("L\'etudiant(e) que vous cherchez n'existe pas :( !");
            return res.status(404).send();
        }

        res.json(student);
        console.log("Etudiant(e) obtenu avec success :) !");
    }

    catch(error){

        console.log('Erreur lors du chargement de l\'etudiant(e) :( !');
        res.status(500).send();
        //res.json({erreur : "Une Erreur est survenue :( !"});
        next(error);
    }
});

// Add a new student in the database.
router.post('/add', async(req, res, next)=>{

    try{

        const newStudent = await students.addStudent(req.body);

        if(!newStudent){

            res.status(404).send();
            res.json({erreur : "L\'etudiant(e) n'a pas ete cree :( !"});
        }

        res.json({message : 'Etudiant(e) ajoute a la base de donnees avec success :) !'});
        console.log('Etudiant(e) ajoute a la base de donnees avec success :) !');
    }

    catch(error){

        res.status(500).send();
        console.error("Error : une erreur est survenue :( !");
        //res.json({erreur : "Une Erreur est survenue :( !"});
        next(error);
    }
});

// Delete a student from the database.
router.delete('/delete/:name', async(req, res, next) =>{

    try{

        const studentToDelete = await students.deleteStudent(req.params.name);
        
        if(!studentToDelete){

            res.status(404).send();
            res.json({erreur : "L\'etudiant(e) que vous voulez supprimer n'existe pas :( !"});
        }

        res.json({message : "L\'etudiant(e) a ete supprime avec success :) !"});
        console.log("L\'etudiant(e) a ete supprime avec success :) !");
    }

    catch(error){

        res.status(500).send();
        console.error("Erreur : une erreur est survenue :( !");
        //res.json({erreur : "Une Erreur est survenue :( !"});
        next(error);
    }
});

// Modify a student location from the database.
router.put('/modify/:name', async(req, res, next) =>{

    try{

        const studentToModify = await students.modifyStudentLocation(req.body);

        if(!studentToModify){

            res.status(404).send();
            res.json({erreur : "L\'etudiant(e) que vous voulez modifier n'existe pas :( !"});            
        }

        res.json({message : "L\'etudiant(e) a ete modifie avec success :) !"});
        console.log("L\'etudiant(e) a ete modifie avec success :) !");
    }

    catch(error){

        res.status(500).send();
        console.error("Erreur : une erreur est survenue :( !");
        //res.json({erreur : "Une Erreur est survenue :( !"});
        next(error);
    }
});

module.exports = router;
