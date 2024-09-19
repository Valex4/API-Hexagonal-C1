import { Shop } from "./Shop";

export interface ShopRepository{
    getAll(): Promise<Shop[] | null>;

    createShop(
        name: string,
        location: string,
        description: string,
        phone: string,
        email: string,
        user_id: number
    ):Promise<Shop | null>;

    deleteShop( uuid: string): Promise<boolean>;

    getOneShop( uuid: string): Promise<Shop | null>;

    getShopsFromUser( uuid : string ): Promise<Shop[] | null> 
}
