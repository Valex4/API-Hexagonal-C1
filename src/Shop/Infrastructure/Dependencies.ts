import { MysqlShopRepository } from "./Respositories/MysqlShopRepository";
import { GetAllShopsUseCase } from "../Application/GetAllShopsUseCase";
import { CreateShopUseCase } from "../Application/CreateShopUseCase";
import { GetOneShopUseCase } from "../Application/GetOneShopUseCase";
import { GetUserShopsUseCase } from "../Application/GetUserShopsUseCase";
import { GetUserShopsController } from "./Controllers/GetUserShopsController";
import { GetOneShopController } from "./Controllers/GetOneShopController";
import { CreateShopController } from "./Controllers/CreateShopController";
import { GetAllShopsController } from "./Controllers/GetAllShopsController";

const mysqlShopRepository = new MysqlShopRepository();

const getAllShopsUseCase = new GetAllShopsUseCase(mysqlShopRepository);
export const getAllShopsController = new GetAllShopsController(getAllShopsUseCase);
const createShopUseCase = new CreateShopUseCase(mysqlShopRepository);
export const createShopController = new CreateShopController(createShopUseCase);
const getOneShopUseCase = new GetOneShopUseCase(mysqlShopRepository);
export const getOneShopController = new GetOneShopController(getOneShopUseCase);
const getUserShopsUseCase = new GetUserShopsUseCase(mysqlShopRepository);
export const getUserShopsController = new GetUserShopsController(getUserShopsUseCase);