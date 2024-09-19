import { UserRepository } from "../Domain/UserRepository";

export class DeleteUserUseCase{
    constructor(private userRepository: UserRepository){}

    async run(
        uuid:string
    ): Promise<boolean>{
        try{
            const result = await this.userRepository.deleteUser(uuid)
            return result;
        }catch(error){
            console.log("Error al eliminar el usuario con el uuid: ", uuid)
            return false;
        }
    }
}