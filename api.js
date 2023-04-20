const express = require('express');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

/*
const db = {

    host : 'localhost',
    user : 'root',
    password : '',
    port : 3306,
    database : 'api_rest_test'
}*/

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

/*
api.post((req, res, next) =>{

    console.log('Objet cree !');
});*/

/*
api.post('/api/products/add', (req, res) =>{

    console.log(req.body);
    //res.status(201).send();
    res.json({message : 'Objet cree !'});
});*/

api.get('/api/start', (req, res, next) =>{

    console.log('Connexion a l\'api :) !');
    res.json(
        
        {
            message_1 : 'Bravo vous avez access a cette api :) !',
            message_2 : 'Referez vous a la documentation pour l\'utiliser !'
        }
    );
}); 

// Users informations principal route.
api.use('/api/users', usersRouter);

// Products informations principal route.
api.use('/api/products', productsRouter);

// Get all users middleware(route : /api/users).
/*
api.get('/api/users', (req, res, next) =>{

    req.getConnection((error, connection) =>{

        if(error){ // If an error occurs during the connection to the database.

            console.log(error);
            console.log('impossible de se connecter a la base de donnees :( !');
        }

        else{
            
            console.log('connexion a la base de donnees reussie :) !');
            connection.query('SELECT * FROM users', [], (error, result) =>{

                if(error){

                    console.log(error);
                }

                else{

                    //res.status(200).render("index", {result});
                    res.status(200).json(result);
                }
            });
        }
    });
});*/

module.exports = api;
