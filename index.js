import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
//import Router

import PostRoute from './Routes/PostRoute.js'


const app = express()
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

dotenv.config()

// to serve image for public
app.use(express.static('public'))
app.use('/images', express.static('images'))

//Connect DB & start sever
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(process.env.PORT || 5000, () =>
      console.log(
        `Connected to MongoDB - Sever on localhost:${process.env.PORT}`,
      ),
    ),
  )

//Routes

app.use('/post', PostRoute)
