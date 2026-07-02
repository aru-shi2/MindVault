import Router from "express"
import { postcontent, getcontent, delcontent } from "../controllers/contentController"
import { userMiddleware } from "../middleware/middleware";

const contentRouter=Router();

contentRouter.post("/add",userMiddleware,postcontent)
contentRouter.get("/",userMiddleware,getcontent)
contentRouter.delete("/delete/:contId",userMiddleware,  delcontent)

export default contentRouter