export class Shop{
    constructor(
        readonly id: number,
        readonly uuid: string,
        readonly name: string,
        readonly location: string,
        readonly description: string,
        readonly phone: string,
        readonly email: string,
        readonly user_id: number
    ){}
}
