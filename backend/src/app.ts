import express, { Application } from 'express';
import mongoose from 'mongoose'
require('dotenv').config();
import authRouter from './routes/auth';
import contentRouter from './routes/content';
import shareRouter from './routes/share';

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())

app.use("/api/v1/auth",authRouter)
app.use("/api/v1/content",contentRouter)
app.use("/api/v1/share",shareRouter)

async function main(): Promise<void>{
    await mongoose.connect(process.env.DATABASE_URL as string)
    console.log("database connected!")
    app.listen(PORT,()=>{
      console.log(`server runing on ${PORT}`)
    })
}
main()