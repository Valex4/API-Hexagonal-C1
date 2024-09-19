import { User } from "../Domain/User";
import { UserRepository } from "../Domain/UserRepository";

export class CreateUserUseCase{
    constructor(readonly userRepository: UserRepository){}

    async run(
        name: string,
        lastName: string,
        phone: string,
        email:string
    ):Promise<User | null>{
        try{
            const user = await this.userRepository.createUser(
                name, 
                lastName, 
                phone, 
                email
            )
            return user;
        }catch(error){
            return null;
        }
    }
}