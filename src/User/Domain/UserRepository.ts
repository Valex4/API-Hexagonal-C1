import { User } from "./User";

export interface UserRepository{
    getAll(): Promise<User[] | null>;

    createUser(
        name: string,
        lastName: string,
        phone: string,
        email: string,
    ): Promise<User | null>;

    updateUser(
        id: number,
        data: Partial<User>
    ): Promise<User | null>;

    deleteUser( uuid: string ):Promise<boolean>;
}
