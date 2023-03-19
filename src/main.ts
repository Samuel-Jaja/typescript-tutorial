import {Invoice} from "./classes/Invoice"
import {Person} from "./classes/Person"

let invoice1 = new Invoice("Catherine", "is the love of my life & a very excellent writer", 30)
let invoice2 = new Invoice("Jaja", ".NET Software Engineer with CypherCrescent & Microsoft", 30 )

let staff1 = new Person("Catherine", "Umesi", 22)
let staff2 = new Person("Samuel", "Jaja", 30)

console.log(invoice1,invoice2)
console.log(staff1,staff2)

let invoices: Invoice[] = [];
invoices.push(invoice1);
invoices.push(invoice2);
let staff: Person[] =[];
staff.push(staff1);
staff.push(staff2);

