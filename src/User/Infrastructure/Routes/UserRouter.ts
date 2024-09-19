import * as express from "express";

import { createUserController } from "../Dependencies";
import { getAllUsersController } from "../Dependencies";
import { deleteUserController } from "../Dependencies";
import { getUserShopsController } from "../../../Shop/Infrastructure/Dependencies";


export const userRouter = express.Router();

userRouter.get("/", getAllUsersController.run.bind(getAllUsersController));
userRouter.post("/", createUserController.run.bind(createUserController));
userRouter.delete("/:uuid", deleteUserController.run.bind(deleteUserController));
userRouter.get('/:uuid/shops', getUserShopsController.run.bind(getUserShopsController));