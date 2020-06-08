//importar a dependencia do sql
const sqlite3 = require("sqlite3").verbose()
    //iniciar o objeto de operacoes banco de daos
const db = new sqlite3.Database("./src/database/database.db")
    //utilizar o objeto de banco de dabos
module.exports = db
    //db.serialize(() => {
    //criar uma tabela no banco de dados com comandos sql
    /* db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name, TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)
         //inserir dados na tabela
     const query = `
             INSERT INTO places(
                 image,
                 name,
                 address,
                 address2,
                 state,
                 city,
                 items
             ) VALUES(?,?,?,?,?,?,?);
             `

     const values = [
         "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60",
         "Coletor",
         "Benedito barbosa, Jardmi america",
         "numero 269",
         "Rio do sul",
         "Resídus eletronicos, lampadas"

     ]

     function afterInsertData(err) {
         if (err) {
             return console.log(err)
         }
         console.log("Cadastrado com sucesso.")
         console.log(this)
     }


     db.run(query, values, afterInsertData)


     //consultar os dados da tabela
     /*  db.all(`SELECT * FROM places`, function(err, rows) {
           if (err) {
               return console.log(err)
           }
           console.log("Aqui estão os registros")
           console.log(this)
       })*/


//deletar dados da tabela
//db.run(`DELETE FROM places WHERE id = ?`, [ ], function(err)
/* {
     if (err) {
         return console.log(err)
     }
     console.log("Registro apagado com sucesso.")

 })*/


//})