
const express = require('express');
const properties = require('./config/properties');
const db = require('./config/database');
const app = express();
const bodyParser = require('body-parser');
// call the database connectivity function

console.log("LOG...........................");
try {
    db();
}
catch (e) {
    console.log(e+"MONGO DB CONNECTION FAIL");
}

console.log("");
app.listen(properties.PORT, (req, res) => {
    console.log(`Server is running on ${properties.PORT} port.`);
});




app.get('/', (req, res) => res.send('Hello World!'));

app.listen(properties.PORT, () => console.log(`Example app listening at http://localhost:${properties.PORT}`));

