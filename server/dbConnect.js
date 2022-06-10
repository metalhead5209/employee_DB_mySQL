const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config();

const dbConnect = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT
});

dbConnect.connect((err) => {
    if (err) {
        console.log(err)
    }
    console.log('db ' + dbConnect.state);
});