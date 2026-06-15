import Router from "express";
import { shareBrain, fetchBrain } from "../controllers/shareController";

const shareRouter=Router();

shareRouter.post("/",shareBrain)
shareRouter.get("/:shareLink",fetchBrain)

export default shareRouter