import express from 'express';
import cors from 'cors';
import userRouter from './routes/user.routes.js'
import bookRouter from './routes/book.routes.js'
import { db } from './config/db.config.js'

import dotenv from 'dotenv'
import { corsOptions } from './middlewares/cors.middleware.js';

dotenv.config()


const app = express()

//Middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
//middlewares CORS
app.use(cors(corsOptions));
//Middlewares de rutas
app.use('/api/v1', userRouter)
app.use('/api/v1', bookRouter)


db()


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT}`)
})