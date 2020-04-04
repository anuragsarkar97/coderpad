
const express = require('express');
const properties = require('./config/properties');
const db = require('./config/database');
const app = express();
const bodyParser = require('body-parser');
// call the database connectivity function

console.log("LOG...........................");
try {
    db();
    let e;
    console.log(e+"MONGO DB CONNECTION SUCCESS")
}
catch (e) {
    console.log(e+"MONGO DB CONNECTION FAIL");
}

console.log("");
app.listen(3005, (req, res) => {
    console.log(`Server is running on 3005 port.`);
});





