import * as express from "express";
import { getAllShopsController } from "../Dependencies";
import { createShopController } from "../Dependencies";
import { getOneShopController } from "../Dependencies";
export const shopRouter = express.Router();


shopRouter.get('/', getAllShopsController.run.bind(getAllShopsController));
shopRouter.post('/', createShopController.run.bind(createShopController));
shopRouter.get('/:uuid', getOneShopController.run.bind(getOneShopController));
