import { Request, Response } from "express";

import { GetUserShopsUseCase } from "../../Application/GetUserShopsUseCase";

export class GetUserShopsController{
    constructor(readonly getUserShopsUseCase: GetUserShopsUseCase){}

    async run(req: Request, res: Response){
        const {uuid} = req.params;

        try {
            const shops = await this.getUserShopsUseCase.run(uuid);
            if(shops){
                res.status(200).send({
                    status: "success",
                     data: shops 
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