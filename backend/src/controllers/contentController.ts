import { application, Request, Response} from "express";
import { contentModel } from "../models/db";
import * as z from "zod"

const postcontent=async(req: Request,res: Response)=>{
    const {link, type, title}= req.body 
    const userId=req.userId

    const Contschema=z.object({
            link: z.string(),
            type: z.string(),
            title: z.string(),
            tags: z.array(z.string()).optional()
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
    const typ=req.query.type;
    const userId=req.userId
    let content
    
    if(typ==="all"){
         content=await contentModel.find({userId:userId}).populate("userId","username")
    }else{
         content=await contentModel.find({
            userId:userId,
            type:typ
        }).populate("userId","username")
    }

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