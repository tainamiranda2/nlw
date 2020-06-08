const express = require("express")
const server = express()
    //ppegar o banco de dads
const db = require("./database/db")
    //configura pasta public
server.use(express.static("public"))

//habilitar o use o body
server.use(express.urlencoded({ extended: true }))
    //utilizando templace enine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

//configurar caminhos
//pagina inicial req é pedido res é respotsa
server.get("/", (req, res) => {
    //diretorio para as paginas
    return res.render("index.html")
})

//rota para a pagina create
server.get("/create", (req, res) => {
        //diretorio para as paginas
        //pegar na url as respostas
        // console.log(req.body)
        //inserir ddos no banco de dados
        return res.render("create.html")
    })
    //metodo post
server.post("/savepoint", (req, res) => {

    // return res.render("create.html")

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
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function afterInsertData(err) {
        if (err) {
            return console.log(err)
        }
        console.log("Cadastrado com sucesso.")
        console.log(this)
        return res.render("create.html", { saved: true })
    }


    db.run(query, values, afterInsertData)

})


//rota para search
server.get("/search", (req, res) => {
    //pegar os dados do banco de dados
    //diretorio para as paginas

    db.all(`SELECT * FROM places`, function(err, rows) {
        if (err) {
            return console.log(err)
        }
        const total = rows.length
            //mostrar a pagina html com os dadso do banco de dados
        return res.render("search-results.html", { places: rows, total: total })
    })

})

//ligar o servido
server.listen(3000)