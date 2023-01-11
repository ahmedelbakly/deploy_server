require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()
const cors = require('cors')
const port =  process.env.PORT || 3000
const ope = {
    root :path.join(__dirname, 'public')
}
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(cors({
    origin:"*"
}))
console.log(process.env.PORT);

app.get('/api', (req, res) => {
  res.send('Hello World!')
})
app.get('/api/getData', (req, res) => {
  res.json({
    name :"Ahmed",
    son:"Omar",
    wife:"Hadeer"
  })
})

app.get('/api/pro', (req, res) => {
  res.sendFile("index.html", ope)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})