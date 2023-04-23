const express = require('express');
const salary_workersRouter = require('./routes/salary_workers');
const studentsRouter = require('./routes/students');
/*const mysql = require('mysql');
const myConnection = require('express-myconnection');*/

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
api.get('/api/start', (req, res, next) =>{

    console.log('Connexion a l\'api :) !');
    res.json(
        
        {
            message_1 : 'Bravo vous avez access a cette api :) !',
            message_2 : 'Referez vous a la documentation pour l\'utiliser !'
        }
    );
}); 

// Salary workers informations principal route.
api.use('/api/salary_workers', salary_workersRouter);

// Students informations principal route.
api.use('/api/students', studentsRouter);

module.exports = api;
