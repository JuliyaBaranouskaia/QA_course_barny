import { Car } from './car.js'

export class CarBrand1 extends Car {
    constructor(model) {
        super('CarBrand1', model)
    }

    checkCar() {
        console.log(`Looks fine ${this.brand} ${this.model}.`)
    }

    checkWork(speed) {
        if (speed < 0) {
            throw new Error('CarBrand1 broken')
        }
        super.startWork(speed)
    }
}