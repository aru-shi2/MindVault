import { Response, Request, NextFunction } from "express";
import * as jwt from "jsonwebtoken"

interface AuthRequest extends Request{
    userId?: string,
}

export const userMiddleware = (req: AuthRequest, res: Response, next: NextFunction)=>{
    const t=req.headers.authorization;

    if(!t){
        return res.status(401).json({
            msg:"Unauthorized"
        })
    }

    const words=t.split(" ")
    const token=words[1];

    if(!token){
        return res.status(401).json({
            msg:"Token missing"
        })
    }

    const decoded=jwt.verify(token, process.env.JWT_SECRET as string) as {id: string}

    if(decoded){
        req.userId=decoded.id;
        next();
    }
    else{
        res.status(401).json({
            msg:"You are not signed in!"
        })
    }
}
