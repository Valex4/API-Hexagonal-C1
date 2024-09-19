import { Shop } from "../Domain/Shop";
import { ShopRepository } from "../Domain/ShopRepository";

export class GetAllShopsUseCase{
    constructor(readonly shopRepository: ShopRepository){}

    async run(): Promise<Shop[] | null>{
        try {
            const result = await this.shopRepository.getAll();
            return result;
        } catch (error) {
            console.log("Ha ocurrido un problema al obtener todas las shops");
            return null;
        }
    }
}
