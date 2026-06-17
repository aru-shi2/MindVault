import { application, Request, Response} from "express";
import { contentModel } from "../models/db";

const postcontent=async(req: Request,res: Response)=>{
    const {link, type, title}= req.body 

    try{
        await contentModel.create({
            link,
            type,
            title,
            
            user
        })
    }catch(e){

    }
}

const getcontent=async(req: Request,res: Response)=>{
    
}

const delcontent=async(req: Request,res: Response)=>{
    
}

export {postcontent, getcontent, delcontent}