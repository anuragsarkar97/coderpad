const express = require('express');
const properties = require('./config/properties');
 const db = require('./config/database');
const app = express();
const bodyParser = require('body-parser');
const apiRoutes=require('./Routes/api-routes');

try {
    db();
}
catch (e) {
    e.throw();
    console.log(e+"MONGO DB CONNECTION FAIL");
}
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use('/coderpad/v1',apiRoutes);
// app.use(cors());

app.listen(properties.PORT, (req, res) => {
    console.log(`Server is running on ${properties.PORT} port.`);
});

