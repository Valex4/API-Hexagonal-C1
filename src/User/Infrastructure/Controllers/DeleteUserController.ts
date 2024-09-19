import { Request, Response } from "express";

import { DeleteUserUseCase } from "../../Application/DeleteUserUseCase";

export class DeleteUserController{
    constructor(readonly deleteUserUseCase: DeleteUserUseCase){}

    async run(req: Request, res:Response){
        try {
            const {uuid} = req.params;
            const result = await this.deleteUserUseCase.run(uuid);
            if(result){
                res.status(200).send({
                    status: "success",
                    msn: "Usuario eliminado correctamente"
                });
            }else{
                res.status(404).send({
                    status: "error",
                    msn: "Usuario no encontrado o no se pudo eliminar",
                });
            }
        } catch (error) {
            res.status(500).send({
                status: "error",
                data: "Ocurrió un error al eliminar el usuario",
                msn: error,
            });
        }
    }
}