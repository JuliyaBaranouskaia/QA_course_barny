// #### Task 1 💻
// Создайте класс Car.
// Создайте два дочерних класса SportCar и LuxuryCar.
// Конструкт родительского класса принимает переменные марку авто и тип двигателя.
// Дочерние классы должны иметь методы выводящие максиальную скорость
// и цену на соответсвующие типы авто.
// Выводящий текст должен быть таким: `This is <carName>.
// It has <engineType> engine and max speed equal to <maxSpeed>.
// Approximetly cost of the car is <carCost>`.
// (В задании используйте не только public модификатор, где это возможно)

class Car {
    constructor(brand, engine) {
        this.brand = brand
        this.engine = engine
    }

    getCarBasicInfo() {
        return `${this.brand} with ${this.engine} engine`
    }
}

class SportCar extends Car {
    constructor(brand, engine, maxSpeed, carCost) {
        super(brand, engine)
        this.maxSpeed = maxSpeed
        this.carCost = carCost
    }

    getSportCarInfo() {
        return `This is ${this.getCarBasicInfo()}. It has a max speed equal to ${this.maxSpeed} km/h. Approximately cost of the car is $${this.carCost}.`
    }

}

class LuxuryCar extends Car {
    constructor(brand, engine, maxSpeed, carCost) {
        super(brand, engine)
        this.maxSpeed = maxSpeed
        this.carCost = carCost
    }

    getLuxuryCarInfo() {
        return `This is ${this.getCarBasicInfo()}. It has a max speed equal to ${this.maxSpeed} km/h. Approximately cost of the car is $${this.carCost}.`
    }
}

const mySportCar = new SportCar('SportCar', 'V8', 350, 250000)
console.log(mySportCar.getSportCarInfo())
const myLuxuryCar = new LuxuryCar('LuxuryCar', 'V12', 250, 450000)
console.log(myLuxuryCar.getLuxuryCarInfo())

// #### Task 2 💻
// Создайте два объекта людей.
// Реализуйте метод, который выводит строку `My name is <name>`.
// И в зависимости от контекста выполнения, этот метод должен выводить соответвующее имя

class Person {
    constructor(name) {
        this.name = name
    }

    welcomeMessage() {
        return `My name is ${this.name}.`
    }
}

const person1 = new Person('firstPersonName')
const person2 = new Person('secondPersonName')

console.log(person1.welcomeMessage())
console.log(person2.welcomeMessage())

// #### Task 3 💻
// Создайте два объекта машин.
// Реализуйте метод выводящий количество дверей машины,
// и с какой стороны находится руль.
// В зависимости от контекста выполнения,
// этот метод должен выводить соответвующую информацию о машинах.
// К примеру `This car has 3 doors and this is left-hand drive car`


class CarsVerf {
    constructor(brandCar, doors, steering) {
        this.brandCar = brandCar
        this.doors = doors
        this.steering = steering
    }

    carInfo() {
        return `This car has ${this.doors} doors and this is ${this.steering} drive car.`
    }
}

const car1 = new CarsVerf('Toyota', 4, 'left-hand drive');
const car2 = new CarsVerf('Mazda', 2, 'right-hand drive');

console.log(car1.carInfo())
console.log(car2.carInfo())