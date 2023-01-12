require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()
const cors = require('cors')
const port =  process.env.PORT || 3000
const userRouter = require("./Helper/helper")


///////////////////////////////////////////////////
const mongoose = require('mongoose');

const connect = async() => {
  try {
    mongoose.set('strictQuery', false);
    const connect = mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      
    });
   
   
    return connect
      ? console.log("DB is connected")
      : console.log("DB is not connected");
  } catch (error) {
    throw error;
  }
};

connect();


//////////////////////////////////////////////////////
const ope = {
    root :path.join(__dirname, 'public')
}
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(cors({
    origin:"*"
}))


app.use("/api",userRouter)

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