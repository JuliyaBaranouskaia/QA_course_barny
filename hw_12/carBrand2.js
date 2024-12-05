import { Car } from './car.js'

export class CarBrand2 extends Car {
    constructor(model) {
        super('CarBrand2', model)
    }

    addCarToList() {
        console.log(`added car ${this.brand} ${this.model}.`)
    }
}