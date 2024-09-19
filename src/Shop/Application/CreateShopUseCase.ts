import { Shop } from "../Domain/Shop";
import { ShopRepository } from "../Domain/ShopRepository";

export class CreateShopUseCase{
    constructor(readonly shopRepository: ShopRepository){}

    async run(
        name: string,
        location: string,
        description: string,
        phone: string,
        email: string,
        user_id: number
    ):Promise<Shop | null>{
        try {
            const shop = await this.shopRepository.createShop(
                name,
                location,
                description,
                phone,
                email,
                user_id
            );
            return shop;
        } catch (error) {
            return null;
        }
    }        
}
