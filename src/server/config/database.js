
const chalk = require('chalk');
const  mongo = require('mongodb');
const connected = chalk.bold.greenBright;
const error = chalk.bold.yellow;
const disconnected = chalk.bold.red;
const termination = chalk.bold.magenta;

//export this function and imported by server.js
module.exports =function(){
console.log("LOGGING DB");
var dbURL = "mongodb+srv://admin:iloveindia@cluster0-stl0c.mongodb.net/test?retryWrites=true&w=majority";

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:iloveindia@cluster0-stl0c.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("coderpad").collection("user");
  console.log(collection,"EARg");

  // perform actions on the collection object
  client.close();
});


};
//   mongoose.connect(dbURL);
//     console.log("Connection Attempt");
//     mongoose.connection.on('connected', function(){
//         console.log(connected("Mongoose default connection is open to ", dbURL));
//     });
//
//     mongoose.connection.on('error', function(err){
//         console.log(error("Mongoose default connection has occured "+err+" error"));
//     });
//
//     mongoose.connection.on('disconnected', function(){
//         console.log(disconnected("Mongoose default connection is disconnected"));
//     });
//
//     process.on('SIGINT', function(){
//         mongoose.connection.close(function(){
//             console.log(termination("Mongoose default connection is disconnected due to application termination"));
//             process.exit(0)
//         });
//     });
