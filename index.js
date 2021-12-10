const express = require('express')
const routerApi = require('./routes')
const cors = require('cors');


const app = express()
const PORT = 8083

app.use(express.json())
app.use(cors());


app.get('/', (req, res) => {
  res.send('This works')
})

routerApi(app)

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`)
})