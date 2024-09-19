import { query } from "../../../Database/Mysql";
import { User } from "../../Domain/User";
import { UserRepository } from "../../Domain/UserRepository";
import { v4 as uuidv4 } from "uuid";

export class MysqlUserRespository implements UserRepository{
    async getAll(): Promise<User[] | null> {
        const sql = "SELECT * FROM users";
        try{
            const data: any = await query(sql, []);
            const usersData = Object.values(JSON.parse(JSON.stringify(data)));
            return usersData.map(
                (user: any) =>
                  new User(
                    user.id,
                    user.uuid,
                    user.name,
                    user.lastName,
                    user.phone,
                    user.email
                  )
            );
        }catch (error) {
            return null;
        }
    }
    
    async createUser(name: string, lastName: string, phone: string, email: string): Promise<User | null> {
        const sql = "INSERT INTO users (uuid, name, lastName, phone, email) VALUES (?, ?, ?, ?, ?)"
        const uuid = uuidv4()
        const params: any[] = [uuid ,name, lastName, phone, email];

        try {
            const result: any = await query(sql, params);
            return new User(result.insertId, uuid ,name, lastName, phone, email);
          } catch (error) {
            return null;
          }
    }

    async updateUser(id: number, data: Partial<User>): Promise<User | null> {
        const sql = "UPDATE users SET name = ?, lastName = ?, phone = ?, email = ? WHERE id = ?";
      try{
        await query(sql, [data.name, data.lastName ,data.phone, data.email, id])
        const [updatedUser]: any = await query("SELECT * FROM users WHERE id = ?", [id]);
        if(updatedUser.length === 0) return null;
        const user = updatedUser[0];
        return new User(user.id, user.uuid ,user.name, user.lastName,user.phone, user.email);
      }catch(error){
        return null;
      }
    }

    async deleteUser(uuid: string): Promise<boolean> {
        const sql = "DELETE FROM users WHERE uuid = ?";
        try {
          const result: any = await query(sql, [uuid]);
          return result.affectedRows > 0;
      } catch(error) {
          return false;
      }
    }

}
