import { Request, Response } from "express";

import { GetOneShopUseCase } from "../../Application/GetOneShopUseCase";

export class GetOneShopController{
    constructor(readonly getOneShopUseCase: GetOneShopUseCase){}

    async run(req:Request, res: Response){
        const {uuid} = req.params;
        try {
            const shop = await this.getOneShopUseCase.run(uuid);
            if(shop){
                res.status(200).send({
                    status: "success",
                    data: shop
                  }); 
            }else{
                res.status(204).send({
                    status: "error",
                    data: "No fue posible agregar el registro",
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