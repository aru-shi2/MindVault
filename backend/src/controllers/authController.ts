import {Request,Response} from "express";
import { userModel } from "../models/db";
import * as z from "zod"
import * as jwt from "jsonwebtoken"
import * as bcrypt from "bcrypt"

const signup=async(req: Request,res: Response)=>{
    const {username, password}=req.body

    const userExist=await userModel.findOne({username})

    if(userExist){
        return res.status(403).json({
            msg:"Username already exist"
        })
    }

    const Userschema=z.object({
        username:z.email(),
        password:z.string().min(6,"password is too short").max(15,"password is too long")
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).*$/,"Password must contain atleast one uppercase, one lowercase, one number and one special character")
    })

    const check=Userschema.safeParse(req.body);

    if(!check.success){
       return res.status(411).json({
            msg:check.error.issues[0].message
        })
    }

    const hashedpass=await bcrypt.hash(password,6)

    try{
        const newuser=await userModel.create({
            username,
            password:hashedpass
        })
        const token=jwt.sign({id:newuser._id}, process.env.JWT_SECRET as string)
        return res.status(200).json({
            msg:"Signed up successfully!",
            token
        })
    }
    catch(e){
        res.status(500).json({
            msg:"something went wrong!"
        })
    }
}

const login=async(req:Request,res:Response)=>{
    const {username, password}=req.body

    const Userschema=z.object({
        username:z.email(),
        password:z.string()
    })

    const check=Userschema.safeParse(req.body);

    if(!check.success){
        return res.status(411).json({
            msg:"incorrect format"
        })
    }


    const findUser=await userModel.findOne({username:username})

    if(!findUser){
        return res.status(404).json({
            msg:"User not found!"
        })
    }

    const checkpass=await bcrypt.compare(password, findUser.password)

    if(checkpass){
        const token=jwt.sign({id:findUser._id}, process.env.JWT_SECRET as string)
        return res.status(200).json({
            msg:"Logged in successfully!",
            token:token
        })
    }
    else{
        res.status(500).json({
            msg:"Something went wrong!"
        })
    }
}

export {signup, login}