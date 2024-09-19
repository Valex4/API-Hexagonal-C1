import { CreateUserUseCase } from "../Application/CreateUserUseCase";
import { GetAllUserUseCase } from "../Application/GetAllUsersUseCase";
import { DeleteUserUseCase } from "../Application/DeleteUserUseCase";
import { CreateUserController } from "./Controllers/CreateUserController";
import { GetAllUsersController } from "./Controllers/GetAllUsersController";
import { DeleteUserController } from "./Controllers/DeleteUserController";
import { MysqlUserRespository } from "./Repositories/MysqlUserRepositoty";


const mysqlUserRepository = new MysqlUserRespository();
const createUserUseCase = new CreateUserUseCase(mysqlUserRepository);
export const createUserController = new CreateUserController(createUserUseCase);
const getAllUsersUseCase = new GetAllUserUseCase(mysqlUserRepository);
export const getAllUsersController = new GetAllUsersController(getAllUsersUseCase);
const deleteUserUseCase = new DeleteUserUseCase(mysqlUserRepository);
export const deleteUserController = new DeleteUserController(deleteUserUseCase);
