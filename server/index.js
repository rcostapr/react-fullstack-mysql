const express = require("express")
const cors = require("cors")
const mysql = require("mysql")

const app = express()

const selectInvoices = "SELECT invoices.id, invoices.qty, invoices.total, clients.name, invoices.date FROM invoices, clients where invoices.id_client = clients.id order by invoices.id desc"

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'energia',
    password: 'energia@simples',
    database: 'energiasimples'
})

connection.connect(err => ({
    if(err) {
        return err;
    }
}))


app.use(cors())

app.get("/", (req, res, next) => {
    res.send('Main Page')
})

app.get("/invoices", (req, res, next) => {
    connection.query(selectInvoices, (err, results) => {
        if (err) {
            res.send(err)
        }
        else {
            res.json({
                data: results
            })
        }
    })
})

app.listen(4000, () => {
    console.log('Server Listen on Port 4000')
})