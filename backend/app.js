const http=require('http')

const express=require('express')
const cors=require('cors')
const bodyParser=require('body-parser')

const movieRouter=require('./routes/movie')
const authorize=require('./middleware/authorize')

const app=express()
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))

app.use(authorize)

app.use(movieRouter)

const server=http.createServer(app)
server.listen(process.env.PORT||5000)