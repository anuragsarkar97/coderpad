var cors = require('cors')
const port = 3005
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





app.post('/login', cors(), (req, res) => {
  console.log(req.data);
  res.send('Hello World!')
})

app.use(cors()) 
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
