import { Shop } from "../Domain/Shop";
import { ShopRepository } from "../Domain/ShopRepository";

export class GetUserShopsUseCase{
    constructor(readonly shopRepository: ShopRepository){}

    async run(uuid: string): Promise<Shop[] | null>{
        try {
            const result = await this.shopRepository.getShopsFromUser(uuid);
            return result;
        } catch (error) {
            console.log("Sucedio un problema al obtener las shops del usuario: ", uuid)
            return null;
        }
    }
}