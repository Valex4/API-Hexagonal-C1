import { Shop } from "../Domain/Shop";
import { ShopRepository } from "../Domain/ShopRepository";

export class GetOneShopUseCase{
    constructor(readonly shopRepository: ShopRepository){}

    async run(
        uuid: string
    ):Promise<Shop | null>{
        try {
            const shop = await this.shopRepository.getOneShop(uuid)
            if(!shop){
                console.log("No se encontre la shop con el uuid: ", uuid)
            }
            return shop;
        } catch (error) {
            console.log("Sucedio un error al obtener una shop");
            return null;
        }
    }
}