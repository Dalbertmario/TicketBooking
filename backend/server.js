import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import pool from './config/db.js';
import accountManager from  './routes/accountManager.js'
import dash from './routes/dashrouter.js'
import Booking from './routes/Bookingrouter.js'
import Category from './routes/categoryroutes.js'
dotenv.config()



const PORT = 3000;
const app = express()
app.use(cors({
    origin:'*'
}))
app.use(express.json());

pool.connect(()=>{
    console.log('Db is running')
})


app.use('/',accountManager)
app.use('/events',dash)
app.use('/',Booking)
app.use('/',Category)

app.listen(PORT,()=>{
    console.log("http://localhost:3000")
})

