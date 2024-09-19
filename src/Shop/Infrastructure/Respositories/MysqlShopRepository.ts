import { query } from "../../../Database/Mysql";
import { Shop } from "../../Domain/Shop";
import { ShopRepository } from "../../Domain/ShopRepository";
import { v4 as uuidv4 } from "uuid";

export class MysqlShopRepository implements ShopRepository{
    async getAll(): Promise<Shop[] | null> {
        const sql = "SELECT * FROM shops";
        try {
            const data: any = await query(sql, []);
            const shopData = Object.values(JSON.parse(JSON.stringify(data)));
            return shopData.map((shop: any) => new Shop(
                shop.id,
                shop.uuid,
                shop.name,
                shop.location,
                shop.description,
                shop.phone,
                shop.email,
                shop.user_id
            ));
        } catch (error) {
            return null;
        }
    }
    
    async createShop(name: string, location: string, description: string, phone: string, email: string, user_id: number): Promise<Shop | null> {
        const sql = "INSERT INTO shops (uuid, name, location, description, phone, email, user_id) VALUES (?, ?, ?, ?, ?, ?, ?)"
        const uuid = uuidv4()
        const params: any[] = [uuid ,name, location, description, phone, email, user_id];

        try {
            const result: any = await query(sql, params);
            return new Shop(result.insertId, uuid ,name, location, description, phone, email, user_id);
          } catch (error) {
            return null;
          }
    }

    async getOneShop(uuid: string): Promise<Shop | null> {
        const sql = "SELECT * FROM shops where uuid = ?";
        try {
            const result: Shop = await query(sql, [uuid]);
            return result;
        } catch (error) {
            console.log("No se encontro la shop con el uuid: ", uuid)
            return null;
        }
    }

    async getShopsFromUser(uuid: string): Promise<Shop[] | null> {
        const sql = "SELECT * FROM shops where user_id = ?";
        const userSql = "SELECT * FROM users where uuid = ?";
        try {
            const user: any = await query(userSql,[uuid]);
            if(user){
                const data: any = await query(sql, [user[0].id]);
                const shopData = Object.values(JSON.parse(JSON.stringify(data)));
                return shopData.map((shop: any) => new Shop(
                    shop.id,
                    shop.uuid,
                    shop.name,
                    shop.location,
                    shop.description,
                    shop.phone,
                    shop.email,
                    shop.user_id
                ));
            }else{
                return null;
            }
        } catch (error) {
            return null;
        }
    }

    async deleteShop(uuid: string): Promise<boolean> {
        const sql = "DELETE FROM shops WHERE uuid = ?"
        try {
            const result: any = await query(sql, [uuid]);
            return result.affectedRows > 0;
        } catch (error) {
            return false;
        }
    }

}