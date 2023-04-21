const db = require('../model/db');
const helper = require('../helper');


// To get all the students.
async function getAllStudents(){

    const rows = await db.query('SELECT * FROM students');
    return rows;
}

// To get a specific student by his name.
async function getStudentByName(name){

    const query = 'SELECT * FROM students WHERE name = ?';
    const [rows, ] = await db.query(query, [name]); 
    const data = helper.emptyOrRows(rows);

    if(!rows){

        throw Error('Erreur lors du chargement de l\'etudiant :( !');
        return[];
    }

    return data;
}

// To add a new student.
async function addStudent(student){

    const query = `INSERT INTO students (name, surname, location, email)
                   VALUES (?, ?, ?, ?)`;
    const params = [student.name, student.surname, student.location, student.email];
    const result = await db.query(query, params);

    if(result != null){

        return successMessage = "Etudiant(e) ajoute avec success a la base de donnees :) !";
    }

    return errorMessage = "Erreur lors de l'ajout de l\'etudiant a la base de donnees :( !";
}

// To delete an existing student.
async function deleteStudent(name){

    const query = `DELETE FROM students WHERE name = ?`;
    const result = await db.query(query, [name]);

    if(result != null){

        return message = "L\'etudiant(e) n'a pas pu etre supprimer :( !";
    }

    return message = "L\'etudiant(e) a ete supprime avec success :) !";
}

// To modify an existing student in the database.
async function modifyStudentLocation(student){

    const query = `UPDATE students SET location = ?
                   WHERE name = ?`;
    const params = [student.location, student.name];
    const result = await db.query(query, params);

    if(!result){

        return message = "La localisation de l\'etudiant(e) n'a pas pu etre modifie :( !";
    }

    return message = "La localisation de l\'etudiant(e) a ete modifie avec success :) !";
}

module.exports = {
    getAllStudents,
    getStudentByName,
    addStudent,
    deleteStudent,
    modifyStudentLocation
}
