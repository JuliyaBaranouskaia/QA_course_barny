// NORMAL level

//#### Task 1 🖥
// Дан массив:
//  ```javascript
//    const colors = ['red', 'green', 'blue']
//Выведите в консоль его длину.

const colors = ['red', 'green', 'blue']
console.log(colors.length)

//#### Task 2 🖥
// Дан массив:
//   ```javascript
//     const animals = ['monkey', 'dog', 'cat']
// ```
// Выведите в консоль его последний элемент вне зависимости от его длинны.

const animals = ['monkey', 'dog', 'cat']
const item = animals[animals.length - 1]
console.log(item)

// OR

const item2 = animals.pop()
console.log(item2)

// #### Task 3 🖥
// Дан массив:
//   ```javascript
//     const numbers = [5, 43, 63, 23, 90]
// ```
// Удалите все элементы в массиве и выведите в консоль полученный результат.
// > Реализуйте решение двумя способами.

const numbers = [5, 43, 63, 23, 90]
numbers.length = 0
console.log(numbers)

//OR

numbers.splice(0, numbers.length)
console.log(numbers)

// #### Task 4 🖥
// Дан массив:
// ```javascript
//   const students = ['Polina', 'Dasha', 'Masha']
// ```
// + Удалите последний элемент массива, затем вместо него добавьте в массив студента `Borya`.
// + Удалите первый элемент массива, затем вместо него добавьте в массив студента `Andrey`.
// + Полученный результат не забудьте вывести в консоль.

const students = ['Polina', 'Dasha', 'Masha']
students.pop()
students.push('Borya')
students.shift()
students.unshift('Andrey')
console.log(students)

// #### Task 5 🖥
// Дан массив:
// ```javascript
//   const cats = ['Gachito', 'Tom', 'Batman']
// ```
// Выведите в консоль все элементы массива. Сначала через цикл **`for`**, затем **`for of`**.

const cats = ['Gachito', 'Tom', 'Batman']

for (let i = 0; i < cats.length; i++) {
    console.log(cats[i])
}

for (const cat of cats) {
    console.log(cat)
}

// #### Task 6 🖥
// ```javascript
//     const evenNumbers = [2, 4, 6, 8, 10]
//     const oddNumbers = [1, 3, 5, 7, 9]
// ```
// + Соедините два массива чисел в один.
// + В полученном массиве попробуйте найти индекс числа **`8`**

const evenNumbers = [2, 4, 6, 8, 10]
const oddNumbers = [1, 3, 5, 7, 9]

const allNumbers = [...evenNumbers, ...oddNumbers]
console.log(allNumbers)

//OR

const allNumbersV2 = evenNumbers.concat(oddNumbers)
console.log(allNumbersV2)

const index = allNumbers.indexOf(8)
console.log(index)

// #### Task 7 🖥
// Дан массив:
//   ```javascript
//     const binary = [0, 0, 0, 0]
// ```
//   + Наш бинарный массив неполный, в нем явно не хватает единиц.
// + Превратите данный массив в строку.
// > [0, 0, 0, 0] -> '0101010'

const binary = [0, 0, 0, 0]
let binaryString = ''
for (let i = 0; i < binary.length; i++) {
    binaryString += binary[i] // добавляем ноль
    if (i < binary.length - 1) { // добавляю единицу, если это не последний элемент
        binaryString += '1'
    }
}
console.log(binaryString)

// ### ADVANCED level
// > Для решения задач используйте циклы **`for`** или **`for of`**

// #### Task 1 👨‍🏫
// Реализуйте функцию которая будет проверять, является ли слово палиндромом.

function isPalindrome(word) {
    const length = word.length
    for (let i = 0; i < length / 2; i++) {
        if (word[i] !== word[length - 1 - i]) {
            return false
        }
    }
    return true
}

console.log(isPalindrome('madam'))

// #### Task 2 👨‍🏫
// ```javascript
//     const matrix = [
//         [12, 98, 78, 65, 23],
//         [54, 76, 98, 43, 65],
//         [13, 324, 65, 312],
//         [9092, 22, 45, 90000],
//     ]
// ```
// > Выведите в консоль среднее значение чисел в многомерном массиве.

const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
]

function calcAverage(arr) {
    let sum = 0
    let count = 0
    // иду по каждому подмассиву
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            sum += arr[i][j]
            count++
        }
    }
    return count > 0 ? sum / count : 0 // доп проверка, чтобы избежать деления на 0
}

const average = calcAverage(matrix)
console.log('среднее значение чисел в многомерном массиве', average)

// #### Task 3 👨‍🏫
//
// Дан массив:
//
//   ```javascript
//    const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4]
// ```
//
// Создайте два массива, в один поместите все положительные числа включая 0,
// в другой все отрицательные. Оба массива затем выведите в консоль.

const mixedNumbers = [-14, 24, -89, 43, 0, -1, 412, 4]
const positiveNumbers = []
const negativeNumbers = []

for (let i = 0; i < mixedNumbers.length; i++) {
    if (mixedNumbers[i] >= 0) {
        positiveNumbers.push(mixedNumbers[i])
    } else {
        negativeNumbers.push(mixedNumbers[i])
    }
}
console.log('положительные числа (включая 0):', positiveNumbers)
console.log('отрицательные числа:', negativeNumbers)

// #### Task 4 👨‍🏫
// Создать массив длинной не менее 5, из динамически созданных случайных чисел.
// Далее написать алгоритм который берет все числа из исходного массива,
// возводит их в куб и записывает в новый массив. В конце вывести оба массива в консоль.

const randomNumbers = []

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

for (let i = 0; i < 5; i++) {
    randomNumbers.push(getRandomNumber(1, 10))
}

console.log('массив случайных чисел:', randomNumbers)

const cubedNumbers = []
for (let i = 0; i < randomNumbers.length; i++) {
    cubedNumbers.push(Math.pow(randomNumbers[i], 3))
}

console.log('массив кубов чисел:', cubedNumbers)
