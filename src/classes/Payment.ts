import {HasFormatter} from "../interfaces/HasFormatter"
export class Payment implements HasFormatter{
    public recipient:string;
    public detail:string;
    readonly amount:number

    constructor(_recipient:string, _detail:string, _amount:number){
        this.recipient=_recipient,
        this.detail=_detail,
        this.amount=_amount
    }

    format(){
        return(`${this.recipient} ${this.detail} ${this.amount}`)
    }
}