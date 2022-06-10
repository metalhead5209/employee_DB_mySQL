const mysql = require('mysql');
const dotenv = require('dotenv');


dotenv.config();

let instance = null;

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

class dbinstance {
    static getDbInstance() {
        return instance ? instance : new dbinstance();
    }
    async getData() {
        try {
            const res = await new Promise((resolve, reject) => {
                const query  = 'SELECT * FROM directory;';

                dbConnect.query(query, (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });
            console.log(res)
            
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = dbinstance;