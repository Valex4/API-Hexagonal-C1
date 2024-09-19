import { User } from "../Domain/User";
import { UserRepository } from "../Domain/UserRepository";

export class GetAllUserUseCase{
    constructor(readonly userRepository: UserRepository){}

    async run(): Promise<User[] | null>{
        try{
            const result = await this.userRepository.getAll();
            return result;
        }catch(error){
            console.log("Sucedio un error al traer todos los usuarios");
            return null
        }
    }
}