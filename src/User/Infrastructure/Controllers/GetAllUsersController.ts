import { Request, Response } from "express";

import { GetAllUserUseCase } from "../../Application/GetAllUsersUseCase";

export class GetAllUsersController{
    constructor(readonly getAllUsers: GetAllUserUseCase){}
   
    async run(req: Request, res: Response){
        try {
            const users = await this.getAllUsers.run();
            if(users){
                res.status(200).send({
                    status: "success",
                     data: users 
                  });
            }else{
                res.status(400).send({
                    status: "error",
                    msn: "Ocurrio algún problema",
                  });
            }
        } catch (error) {
            res.status(204).send({
                status: "error",
                data: "Ocurrio un error",
                msn: error,
              });
        }
    }
}