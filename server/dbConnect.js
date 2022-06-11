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
            return res;
        } catch (err) {
            console.log(err)
        }
    }

    async insertNewEmp(name) {
        try {
            const dateHired = new Date();
            const insertId = await new Promise((resolve, reject) => {
                const query = 'INSERT INTO directory (name, date_hired, id) VALUES (?,?);';

                dbConnect.query(query, [name, dateHired] , (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result.insertId);
                })
            });
            console.log(insertId)
            return {
                id : insertId,
                name : name,
                dateHired : dateHired
            };
        } catch (error) {
            console.log(error);
        }
    }
    
 
}

module.exports = dbinstance;

