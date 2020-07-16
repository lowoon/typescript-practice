import {makePerson} from "./scripts/Person";
import IPerson from "./scripts/IPerson";
import {add, NumberToNumberFunc} from "./scripts/Number";
import {Address} from "./scripts/Address";
import A from "./scripts/A"
import {fold} from "./scripts/Array";

const testMakePerson = (): void => {
    let jane: IPerson = makePerson("jane")
    let jack: IPerson = makePerson("jack")
    console.log(jane, jack)
}

let fn: NumberToNumberFunc = add(1)
let result = fn(2)

const printAddress = ({country, city}: Address): void => console.log(`country: ${country}, city: ${city}`)

let c = new A(43)
let arr = [1, 2, 3, 4, 5]
let sum = fold(arr, (a, b) => a + b, 0)

testMakePerson()
console.log(result)
console.log(add(1)(2))
printAddress({country: "korea", city: "seoul"})
c.add()
console.log(sum)
