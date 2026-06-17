import { application, Request, Response} from "express";
import { contentModel } from "../models/db";
import * as z from "zod"

const postcontent=async(req: Request,res: Response)=>{
    const {link, type, title}= req.body 
    const userId=req.userId

    const Contschema=z.object({
            link: z.url(),
            type: z.string(),
            title: z.string(),
            tags: z.array(z.string()).optional(),
            userId: z.string()
        })
    
        const check=Contschema.safeParse(req.body);
    
        if(!check.success){
           return res.status(411).json({
                msg:"incorrect format"
            })
        }

    try{
        await contentModel.create({
            link,
            type,
            title,
            tags:[],
            userId
        })
        return res.status(201).json({
            msg:"Content added successfully"
        })
    }catch(e){
        res.status(500).json({
            msg:"Something went wrong!"
        })
    }
}

const getcontent=async(req: Request,res: Response)=>{
    const userId=req.userId
    const content=await contentModel.find({userId:userId}).populate("userId","username")
    if(content){
        return res.status(200).json({
            content
        })
    }
    else{
        return res.status(500).json({
            msg:"Some error occurred"
        })
    }
}

const delcontent=async(req: Request,res: Response)=>{
    try{
    const userId=req.userId
    const contId=req.body.contId
    await contentModel.deleteOne({_id:contId, userId:userId})
    return res.status(200).json({
        msg:"deleted successfully!"
    })
    }
    catch(e){
        res.status(500).json({
            msg:"Something went wrong"
        })
    }
}

export {postcontent, getcontent, delcontent}