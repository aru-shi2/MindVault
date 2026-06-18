import Router from "express";
import { shareBrain, fetchBrain} from "../controllers/shareController";
import { userMiddleware } from "../middleware/middleware";

const shareRouter=Router();

shareRouter.post("/",userMiddleware,shareBrain)
shareRouter.get("/:shareLink",fetchBrain)

export default shareRouter