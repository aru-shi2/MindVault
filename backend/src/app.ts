import express, { Router, Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose'
require('dotenv').config();
import authRouter from './routes/auth';

const app = express();
const PORT = process.env.PORT || 3000;

app.post("/api/v1/auth",authRouter)

async function main(): Promise<void>{
    await mongoose.connect(process.env.DATABASE_URL as string)
    console.log("database connected!")
    app.listen(PORT,()=>{
      console.log(`server runing on ${PORT}`)
    })
}
main()