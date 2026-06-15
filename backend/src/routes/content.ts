import Router from "express"
import { postcontent, getcontent, delcontent } from "../controllers/contentController";

const contentRouter=Router();

contentRouter.post("/",postcontent)
contentRouter.get("/",getcontent)
contentRouter.delete("/",delcontent)

export default contentRouter