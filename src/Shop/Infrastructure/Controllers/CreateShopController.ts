import { Request, Response } from "express";

import { CreateShopUseCase } from "../../Application/CreateShopUseCase";

export class CreateShopController{
    constructor(readonly createShopUseCase: CreateShopUseCase){}

    async run(req: Request, res: Response){
        const { name, location , description , phone, email , user_id} =  req.body;

        try {
            const shop = await this.createShopUseCase.run( name, location , description , phone, email , user_id );
            if(shop){
                res.status(201).send({
                    status: "success",
                    data: {
                      id: shop?.id,
                      uuid: shop?.uuid,
                      name: shop?.name,
                      location: shop?.location,
                      description: shop?.description,
                      phone: shop?.phone,
                      email: shop?.email,
                      user_id: shop?.user_id
                    },
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