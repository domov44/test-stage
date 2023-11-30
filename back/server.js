const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"",
    database:"test-stage"
})

app.listen(8081, () => {
    console.log("le serveur back tourne correctement")
})