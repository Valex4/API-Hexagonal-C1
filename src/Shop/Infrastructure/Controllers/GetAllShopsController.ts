import { Request, Response } from "express";
import { GetAllShopsUseCase } from "../../Application/GetAllShopsUseCase";

export class GetAllShopsController{
    constructor(readonly getAllShops: GetAllShopsUseCase){}

    async run(req: Request, res: Response){
        try {
            const shops = await this.getAllShops.run();
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