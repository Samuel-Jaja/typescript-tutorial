import {HasFormatter} from "../interfaces/HasFormatter"
export class Invoice implements HasFormatter{
    public client:string;
    public detail:string;
    readonly amount:number

    constructor(_client:string, _detail:string, _amount:number){
        this.client=_client,
        this.detail=_detail,
        this.amount=_amount
    }

    format(){
        return(`${this.client} ${this.detail} ${this.amount}`)
    }
}

