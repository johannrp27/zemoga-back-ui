const express = require('express')
const routerApi = require('./routes')
const cors = require('cors');


const app = express()
const PORT = 8089

app.use(express.json())
app.use(cors());


app.get('/', (req, res) => {
  res.send('This works')
})

routerApi(app)
/*
  Use this if you want to serve this over network:
    app.listen(PORT, '192.168.1.12', () => {
    ...
*/
app.listen(PORT, () => {
  console.log(`
  App running at
    - Local: http://localhost:${PORT}
    - Network: http://192.168.1.12:${PORT}
  `)
})