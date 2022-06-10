const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();


// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// POST
app.post('/insert', (req, res) => {

})



// RENDER
app.get('/all', (req, res) => {
    console.log('test');
})



// EDIT




// DELETE


app.listen(process.env.PORT,
    () => {
        console.log('Running on Port 5252')
});