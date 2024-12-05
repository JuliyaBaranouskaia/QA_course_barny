export class Car {
    constructor(brand, model) {
        this.brand = brand
        this.model = model
    }

    startWork(speed) {
        console.log(`${this.brand} ${this.model} is starting to work at ${speed} km/h.`)
    }
}