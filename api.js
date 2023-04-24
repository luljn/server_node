const express = require('express');
const salary_workersRouter = require('./routes/salary_workers');
const studentsRouter = require('./routes/students');
const fs = require('fs');
/*const mysql = require('mysql');
const myConnection = require('express-myconnection');*/

/* 
    This function has to generate
    the token used by the administrator for the connection to the API.
*/
function generateToken(longueur){

    var resultat = '';
    var carateres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var carateresLength = carateres.length;

    for(var i = 0; i <= longueur; i++){

        resultat += carateres.charAt(Math.floor(Math.random() * carateresLength));
    }

    return resultat;
};

// We generate a token of length 12.
var token = generateToken(12);

// We put the token in the file token.txt (Client side)
fs.writeFile("C:/Users/User/Documents/X2026/X2 2022-2023/SEM2 X2/3 - Développement Web/Projet Web/bde_site/token.txt", `${token}`, (error) =>{

    if(error) throw error;
});

// We put the token in the file token.txt (Server side)
fs.writeFile("token.txt", `${token}`, (error) =>{

    if(error) throw error;
    console.log('Veillez consulter le fichier token.txt pour obtenir le token d\'authenfication !');
});

const api = express();
api.use(express.json());

// data formulary extraction middlewary.
api.use(

    express.urlencoded({
        
        extended : true,
    })
);

// Connection to database middleware.
//api.use(myConnection(mysql, db, 'pool'));

// To avoid CORS error. 
api.use((req, res, next) =>{

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Api getting started route.
api.get(`/api/${token}/start`, (req, res, next) =>{

    console.log('Connexion a l\'api :) !');
    res.json(
        
        {
            message_1 : 'Bravo vous avez access a cette api :) !',
            message_2 : 'Referez vous a la documentation pour l\'utiliser !'
        }
    );
}); 

// Salary workers informations principal route.
api.use(`/api/${token}/salary_workers`, salary_workersRouter);

// Students informations principal route.
api.use(`/api/${token}/students`, studentsRouter);

module.exports = api;
