import { Request, Response } from "express";
import { linkModel, userModel, contentModel } from "../models/db";
import { nanoid } from "nanoid";

const shareBrain=async(req: Request,res: Response)=>{
    try{
        const userId=req.userId
        const {share}=req.body

        if(share){
        const existingLink=await linkModel.findOne({
            userId:userId
        })


        if(existingLink && existingLink.hash){
            return res.status(200).json({
                hash:existingLink.hash
            })
        }

        const hash=nanoid(7)

        await linkModel.create({
            userId,
            hash
        })

        res.status(200).json({
            hash
        })
    }
    else{
        await linkModel.deleteOne({
            userId:userId
        })
        res.status(200).json({
            msg:"Stopped sharing"
        })
    }
    }
    catch(e){
        res.status(500).json({
            msg:"Something went wrong!"
        })
    }
}


const fetchBrain=async(req:Request, res:Response)=>{
    try{
    const hash=req.params.shareLink

    if(!hash){
        return res.json({msg:"wrong input"})
    }

    const findlink=await linkModel.findOne({hash})

    if(!findlink){
        return res.status(411).json({
            msg:"Could not find the page!"
        })
    }

    const cont=await contentModel.find({
        userId:findlink.userId
    })

    const finduser=await userModel.findOne({
        _id:findlink.userId
    })

    if(!finduser){
        return res.status(411).json({
            msg:"user not found!"
        })
    }

    return res.status(200).json({
        content:cont,
        username:finduser.username
    })
}
catch(e){
    return res.status(500).json({
        msg:"Something went wrong!"
    })
}
}

export {shareBrain, fetchBrain}