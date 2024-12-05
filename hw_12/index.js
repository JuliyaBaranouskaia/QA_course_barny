import { CarBrand1 } from './carBrand1.js'
import { CarBrand2 } from './carBrand2.js'

const carBrandTest1 = new CarBrand1('Mustang')
const carBrandTest2 = new CarBrand2('Ford')

try {
    carBrandTest1.startWork(100)
    carBrandTest1.checkCar()
    carBrandTest1.checkWork(-1)
//  carBrandTest1.checkWork(250)
} catch (error) {
    console.error(error.message) // Обработка ошибок
}

try {
    carBrandTest2.startWork(100)
    carBrandTest2.addCarToList()
} catch (error) {
    console.error(error.message) // Обработка ошибок
}