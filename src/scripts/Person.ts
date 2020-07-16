import * as numberGenerator from "./NumberGenerator"
import IPerson from "./IPerson";

class Person implements IPerson {
    constructor(public name: string, public age: number) {
    }
}

export const makePerson = (name: string, age: number = numberGenerator.generate()): IPerson => ({
    name,
    age
})
