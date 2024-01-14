# WEB PLATFORM DEVLOPMENT PROJECT.


# CONTRIBUTORS.

- "MBECK MBOH Lula Jonathan" : Lead Dev and product owner.
- "BEDIAN DE_RIKAM Isaac" : Backend Dev and database designer.
- "YAHO Leslie" : Frontend Dev and UI designer.
- "KOUATCHET TCHANA Jordan Osiris" : Frontend Dev and UI designer. 

# SERVERS CONFIGURATION. 

* Port configuration.

- Node.js server port : "localhost:3000"
- PHP server port : "localhost:4000"

# DATABASES CONFIGURATION.

* Databases names.

- bde_site : our campus database.
- general_database: the all sites database which contains all the students informations.


* Initial configuration files.

- db_site.sql : bde_site database initialization file.
- db.sql : general database initialization file.

# API CONFIGURATION.

* Routes.

- getting started : "localhost:3000/api/start".

* Example for CRUD operations on the table "students" (in "general_database" database).
            
                                   Use the following routes.

- To get all the students : localhost:3000/api/students
- To get a specific student : localhost:3000/api/students/id ('id' is the identifier of the student you want to get)
- To add a new student in the database : localhost:3000/api/students/add (you have to give the attributes of the student in  JSON format)
- To delete a student from the database : localhost:3000/api/students/delete/name ('name' is the name of the student you want to delete from the database)
- To modify a student : localhost:3000/api/students/modify/id ('id' is the identifier of the student you want to modify, and you have to give the new attributes of the student in  JSON format)