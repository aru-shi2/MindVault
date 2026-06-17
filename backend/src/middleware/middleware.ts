import { Response, Request, NextFunction, RequestHandler } from "express";
import * as jwt from "jsonwebtoken"

export interface AuthRequest extends Request{
    userId: string;
}

export const userMiddleware = (req: Request, res: Response, next: NextFunction)=> {
    try{
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
        return res.status(401).json({
            msg:"You are not signed in!"
        })
    }
}
catch(e){
    return res.status(500).json({
        msg:"something went wrong"
    })
}
}
