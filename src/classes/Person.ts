export class Person{
   private firstname:string;
   public lastName:string;
   readonly age:number;

    constructor(fName:string, lName:string, _age:number){
        this.firstname=fName,
        this.lastName=lName,
        this.age=_age
    }

    workformat(){
        return (`${this.firstname} ${this.lastName} ${this.age} is years old`)
    }
}

let Kelly = new Person("Kelly","Osoba",30);
let Jaja = new Person("Samuel","Jaja", 30)

console.log(Kelly)
console.log(Jaja)