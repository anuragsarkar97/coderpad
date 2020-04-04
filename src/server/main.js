const express = require('express')
const app = express()
var cors = require('cors')
const port = 3005

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/login', cors(), (req, res) => {
  console.log(req.data);
  res.send('Hello World!')
})

app.use(cors()) 
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))