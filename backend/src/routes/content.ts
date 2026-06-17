import Router from "express"
import { postcontent, getcontent, delcontent } from "../controllers/contentController"
import { userMiddleware } from "../middleware/middleware";

const contentRouter=Router();

contentRouter.use(userMiddleware)

contentRouter.post("/add",postcontent)
contentRouter.get("/",getcontent)
contentRouter.delete("/delete",delcontent)

export default contentRouter