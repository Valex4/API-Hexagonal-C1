export class User{
    constructor(
        readonly id: number,
        readonly uuid: string,
        readonly name: string,
        readonly lastName: string,
        readonly phone: string,
        readonly email: string,
    ) {}
}