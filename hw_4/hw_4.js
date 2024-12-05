console.log('NORMAL level')

//Task 1 :
// Пользователь передает через переменную свою фамилию и имя.
// Выведите приветсвие `Привет <Имя> <Фамилия>` 5 раз используя для каждого варианта разный регистр

function userGreeting(firstName, lastName) {
    console.log(`Hello ${firstName} ${lastName}`)
    console.log(`Hello ${firstName.toUpperCase()} ${lastName.toUpperCase()}`)
    console.log(`Hello ${firstName.toUpperCase()} ${lastName.toLowerCase()}`)
    console.log(`Hello ${firstName.toLowerCase()} ${lastName.toUpperCase()}`)
    console.log(`Hello ${firstName.toLowerCase()} ${lastName.toLowerCase()}`)
}

let firstName = 'Olga'
let lastName = 'Petrova'

userGreeting(firstName, lastName)

//Task 2 :
// Дана строка 'я учу typescript!'.
// Проверить, есть ли данное слово в строке: если есть - вывести позицию подстроки 'учу', если нет - вывести строку `Данной подстроки нет`

let exampleString0 = 'я учу typescript!'
let substring = 'учу'

let position = exampleString0.indexOf(substring)

if (position !== -1) {
    console.log(`Позиция подстроки '${substring}': ${position}`)
} else {
    console.log('Данной подстроки нет')
}

//#### Task 3 💻
// Дана произвольная строка.
// Реализуйте метод, который принимает позицию символа в строке.
// Если переданное число больше длины строки, то должно отобразиться сообщение: `Вы вышли за границу строки`


function getSymbolAtPosition(str, symbolPosition) {
    if (symbolPosition < str.length) {
        return `Символ на позиции ${symbolPosition}: ${str[symbolPosition]}`
    } else {
        return 'Вы вышли за границу строки'
    }
}

let exampleString = 'Привет, мир!'
let symbolPosition = 5
getSymbolAtPosition(exampleString, symbolPosition)
console.log(getSymbolAtPosition(exampleString, symbolPosition))

// #### Task 4 💻
// Дана произвольная строка.
// Реализуйте метод, который проверяет заканчивается ли предложение точкой или нет.
// Если оканчивается, вывести предложение - `Данное предложение закончено`,
// если нет, то `В конце предложения не хватает точки`


function checkSentenceEnding(str) {
    if (str.endsWith('.')) {
        return 'Данное предложение закончено'
    } else {
        return 'В конце предложения не хватает точки'
    }
}

console.log(checkSentenceEnding(exampleString0))

// #### Task 5 💻
// Дана строка 'я учу typescript!'.
// Вырежите из нее слово 'учу' и слово 'typescript' разными способами (через substring, slice).

let word1 = exampleString0.substring(2, 5)
console.log(word1)

let word2 = exampleString0.slice(6, 15)
console.log(word2)

// #### Task 6 💻
// Дана строка 'я учу typescript!'.
// С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.

// #### Task 7 💻
// Дана строка '                я учу typescript!                '. Выведите строку, без начальных и пробелов в конце строки.

let wordsArray = exampleString0.split(' ')
console.log(wordsArray)

// #### Task 8 💻
// Дано число 8.829734872948. Выведите число с 3 значащами цифрами после точки

let numExample = 8.829734872948
console.log(numExample.toFixed(3))

// #### Task 9 💻
// Дана произвольное число.
// Реализовать метод проверяющий является ли это число целочисленным или нет.
// Если является - вывести его, если нет - округлить до целой части.

function checkInteger(num) {
    if (Number.isInteger(num)) {
        console.log(`Число является целочисленным: ${num}`)
    } else {
        console.log(`Число не является целочисленным. Округляем до целой части: ${Math.round(num)}`)
    }
}

checkInteger(5)
checkInteger(5.11)

// #### Task 10 💻
// Дана произвольное число с плавающей точкой.
// Реализовать методы округления данного числа до ближайшего меньшего,
// большего аргумента и ближайшего целого числа.
// #### Task 11 💻
// Дана произвольное число с плавающей точкой.
// Реализовать методы округления данного числа до ближайшего меньшего,
// большего аргумента и ближайшего целого числа.

function roundNumbers(num) {
    // округление до ближайшего меньшего целого
    let roundedDown = Math.floor(num)

    // округление до ближайшего большего целого
    let roundedUp = Math.ceil(num)

    // округление до ближайшего целого числа
    let roundedNearest = Math.round(num)

    return {
        roundedDown,
        roundedUp,
        roundedNearest,
    }
}

let numExampleForTask10 = 98.7
let roundedResults = roundNumbers(numExampleForTask10)

console.log(`Исходное число: ${numExampleForTask10}`)
console.log(`Ближайшее меньшее целое: ${roundedResults.roundedDown}`)
console.log(`Ближайшее большее целое: ${roundedResults.roundedUp}`)
console.log(`Ближайшее целое число: ${roundedResults.roundedNearest}`)


// #### Task 12 💻
// Дана произвольное число.
// Реализовать метод возводящий число в степень.
// Степень возведения указывается как параметр к методу.
// #### Task 13 💻
// Дана произвольное число.
// Реализовать метод возводящий число в степень.
// Степень возведения указывается как параметр к методу.

function powerCalculation(num, extent) {
    return Math.pow(num, extent)
}

let num = 2
let extent = 3
console.log(`Результат возведения числа в степень: ${powerCalculation(num, extent)}`)


// #### Task 14 💻
// Реализовать метод получения рандомного целочисленного числа в заданном диапазоне.
// Диапазон задается аргументами фунции

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

let minRange = 0
let maxRange = 10

console.log(`получения рандомного целочисленного числа в заданном диапазоне ${minRange} - ${maxRange}: ${getRandomInt(minRange, maxRange)}`)

// #### Task 15 💻
// Реализовать метод получения рандомного числа с плавающей точкой в заданном диапазоне.
// Диапазон задается аргументами фунции

function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min
}

let randomNumber = getRandomFloat(minRange, maxRange)
console.log(`получения рандомного числа с плавающей точкой в заданном диапазоне ${minRange} - ${maxRange}: ${randomNumber}`)

// #### Task 16 💻
// Выведите дату сегоднешнего дня в формате: "текущая дата: месяц/год/день.
// Текущее время часы:минуты:секунды.". Использовать только внутренние методы Date.

let currentDate = new Date()

let year = currentDate.getFullYear()
let month = currentDate.getMonth() + 1 // месяцы идут от 0 до 11, поэтому добавляем 1
let day = currentDate.getDate()
let hours = currentDate.getHours()
let minutes = currentDate.getMinutes()
let seconds = currentDate.getSeconds()

console.log(`Текущая дата: ${month}/${year}/${day}`)
console.log(`Текущее время: ${hours}:${minutes}:${seconds}.`)


/*_ Что выведет консоль _

const x = true && " 0 " || false // будет равно 0
const y = false || null || 1 && 2 // будет равно 2
const z = "false" || true && 24 // будет false
*/

//_ Реализуйте задачу _
// Напишите код, который принимает число n (просто создайте переменную где n равно любому числу)
// и выводит в консоль таблицу(набор строк) умножения для чисел от 1 до n.
// Используйте вложенные циклы для решения этой задачи.
//Пример вывода для n = 5: 1 2 3 4 5 2 4 6 8 10 3 6 9 12 15 4 8 12 16 20 5 10 15 20 25
// Требования:
//Используйте вложенные циклы for. Выводите числа, разделяя их пробелами.Каждая строка должна начинаться с новой строки.

let n = 5
let resultForTask1 = ''

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        resultForTask1 += `${i * j} `
    }
}
console.log(resultForTask1.trim())

//_ Реализуйте задачу _
// Напишите код, который принимает число n и выводит в консоль все простые числа от 2 до n.
//Простое число - это натуральное число больше 1, которое делится без остатка только на 1 и на само себя.
//Пример вывода для n = 20: 2, 3, 5, 7, 11, 13, 17, 19

function isEven(num) {
    if (num < 2) return false
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false
    }
    return true
}

function printEven(n) {
    let evensNumbers = []
    for (let i = 2; i <= n; i++) {
        if (isEven(i)) {
            evensNumbers.push(i)
        }
    }
    console.log(evensNumbers.join(', '))
}

let numberForTask2 = 20
printEven(numberForTask2)

//Реализуйте задачу _
// Напишите код, котораы принимает число n
// и возвращает сумму всех четных чисел от 2 до n (включительно).
//Пример: Для 10; // 30 (2 + 4 + 6 + 8 + 10)*/

function sumOfEvenNumbers(n) {
    let sum = 0 //  переменная для хранения суммы
    for (let i = 2; i <= n; i += 2) { // получаем только четные числа
        sum += i
    }
    return sum
}

let taskNum = 10
let result = sumOfEvenNumbers(taskNum)
console.log(`сумму всех четных чисел от 2 до  ${taskNum} (включительно) : ${result}`)
