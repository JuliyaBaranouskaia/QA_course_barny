// ### NORMAL level

// #### Task 1 🖥
// Выведи все элементы массива в консоль с помощью метода **`forEach`**
// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`


const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

//function declaration
fibonacci.forEach(function(fibNum) {
    console.log(fibNum)
})

//arrow function
fibonacci.forEach(fibNum => console.log(fibNum))

// #### Task 2 🖥
// Используя метод **`map`** создайте новый массив, на основе массива **`users`**,
// в котором каждый элемент массива будет содержать строку вида:
//   > ['member 1: Darya', 'member 2: Masha', ... etc]
//   > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']


const memberAddFunctionDeclaration = users.map(function(user, index) {
    return `member ${index + 1}: ${user}`
})
console.log(memberAddFunctionDeclaration)


const memberAddArrowFunction = users.map((user, index) => `member ${index + 1}: ${user}`)
console.log(memberAddArrowFunction)

// #### Task 3 🖥
// С помощью метода **`filter`** создайте новый массив в котором не будет отрицательных чисел.
//   > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.

const numbersAll = [7, -4, 32, -90, 54, 32, -21]

const positiveNumbersArrowFunction = numbersAll.filter((arrayElement) => arrayElement >= 0)
console.log(positiveNumbersArrowFunction)

const positiveNumbersFunctionDeclaration = numbersAll.filter(function(arrayElement) {
    return arrayElement >= 0
})

console.log(positiveNumbersFunctionDeclaration)

// #### Task 4 🖥
// Используя метод **`reduce`** получите сумму всех чисел массива.
// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.

const fibonacciAll = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

const initialSum = 0
const sumFunctionDeclaration = fibonacciAll.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialSum,
)
console.log(sumFunctionDeclaration)

const sumArrowFunction = fibonacciAll.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(sumArrowFunction)

// #### Task 5 🖥
// Используя метод **`find`** найдите в массиве первое четное число.

const numbersFind = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]
const firstEvenNumber = numbersFind.find(number => number % 2 === 0)

console.log(firstEvenNumber)

// #### Task 6 🖥
// Используя метод **`some`** проверьте то, в массиве есть элемент кратный 3 и 5.
// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.
// Реализуйте оба варианта, когда результирущее значение true или false

const numbersSome = [5, 3, 15]

function findNumFunctionDeclaration(element) {
    return element % 3 === 0 && element % 5 === 0
}

console.log(numbersSome.some(findNumFunctionDeclaration))

const findNumArrowFunction = (element) => element % 3 === 0 && element % 5 === 0
console.log(numbersSome.some(findNumArrowFunction))


// #### Task 7 🖥
// Используя метод **`every`** проверьте то, в массиве сумма цифр квадратов значений четная.>
// Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.
// Реализуйте оба варианта, когда результирущее значение true или false

const numExample = [2, 4, 6]


// #### Task 8 🖥
// Используя коллекцию **`Map`** создайте список ингредиентов к салату
// с количеством необходимым для добавления в салат.
//   Например: Огурцы - 300, помидоры - 200, соль - 10, сметана - 110
// Выведите все продукт, количество которых больше 100 гр.
// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.

const ingredients = new Map([
    ['Огурцы', 300],
    ['Помидоры', 200],
    ['Соль', 10],
    ['Сметана', 110],
])

function getIngredientsOver100FunctionDeclaration(map) {
    const result = []
    map.forEach((quantity, ingredient) => {
        if (quantity > 100) {
            result.push(`${ingredient} - ${quantity} г`)
        }
    })
    return result
}

console.log(getIngredientsOver100FunctionDeclaration(ingredients))

const getIngredientsOver100ArrowFunction = (map) => {
    const result = []
    map.forEach((quantity, ingredient) => {
        if (quantity > 100) {
            result.push(`${ingredient} - ${quantity} г`)
        }
    })
    return result
}

console.log(getIngredientsOver100ArrowFunction(ingredients))


// #### Task 9 🖥
// Используя коллекцию **`Set`** создайте массив неповторяющийхся значений:
// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.

const numbersSet = [1, 6, 3, 2, 7, 325, 234, 54, 586, 23, 24, 64, 56, 3, 5, 7, 8, 1, 6, 8, 9, 4, 5, 61, 2, 4, 5, 6, 3, 5]

function getUniqueValuesFunctionDeclaration(numbers) {
    const uniqueSet = new Set(numbers) // Set для удаления дубликатов
    return Array.from(uniqueSet) // Set обратно в массив
}

console.log(getUniqueValuesFunctionDeclaration(numbersSet))

const getUniqueValuesArrowFunction = (numbers) => {
    const uniqueSet = new Set(numbers) // Set для удаления дубликатов
    return [...uniqueSet] // Set обратно в массив с помощью spread-оператора
}
console.log(getUniqueValuesArrowFunction(numbersSet))

// #### Task 11 🖥
// Дан массив. Запишите второй элемент этого массива в переменную elem2, третий -
// в переменную elem3. Если в массиве нет третьего элемента - запишите
// в переменную elem3 значение 'eee', а если нет второго -
// в переменную elem2 запишите значение 'bbb'. Первый элемент никуда записывать не надо.
// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.

const arrayTask11 = [10, 0, 9]

function getElementsFunctionDeclaration(arr) {
    let elem2 = 'bbb'
    let elem3 = 'eee'

    if (arr.length > 1) {
        elem2 = arr[1] // добавила второй элемент, если он существует
    }

    if (arr.length > 2) {
        elem3 = arr[2] // добавила третий элемент, если он существует
    }

    return { elem2, elem3 }
}

console.log(getElementsFunctionDeclaration(arrayTask11))


const getElementsArrowFunction = (arr) => {
    let elem2 = 'bbb'
    let elem3 = 'eee'

    if (arr.length > 1) {
        elem2 = arr[1]
    }

    if (arr.length > 2) {
        elem3 = arr[2]
    }

    return { elem2, elem3 }
}

console.log(getElementsArrowFunction(arrayTask11))

// #### Task 11 🖥
// Дан объект {name: 'Петр', 'surname': 'Петров', 'age': '20 лет', }.
// Запишите соответствующие значения в переменные name, surname и age.
// Сделайте так, чтобы, если какое-то значение не задано -
// оно принимало следующее значение по умолчанию:
// {name: 'Аноном', 'surname': 'Анонимович', 'age': '? лет'}.
// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.


// ### ADVANCED level
// #### Task 1 👨‍🏫 Тролли атакуют наш раздел с комментариями!!!
// + Единственный способ справиться с этой ситуацией -
// удалить все гласные из комментариев троллей, нейтрализуя угрозу.
// + Ваша задача - написать функцию, которая принимает строку
// и возвращает новую строку с удаленными гласными.
// + Например, строка «This website is for losers LOL!» станет "Ths wbst s fr lsrs LL!".
// > Примечание: для этой задачи **`y`** не считается гласной.

// #### Task 2 👨‍🏫 Нет истории, нет теории
//   + В приведенных ниже примерах показано, как написать функцию:
//  > Параметр - это строка, которая включает только буквы от a..z и A..Z.

// accum('abcd')
// ->
// 'A-Bb-Ccc-Dddd'
// accum('RqaEzty')
// ->
// 'R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy'
// accum('cwAt')
// ->
// 'C-Ww-Aaa-Tttt'


// #### Task 3 👨‍🏫 Нет истории, нет теории
// + В приведенных ниже примерах показано, как написать функцию:


// accum('abcd')
// ->
// 'A-Bb-Ccc-Dddd'
// accum('RqaEzty')
// ->
// 'R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy'
// accum('cwAt')
// ->
// 'C-Ww-Aaa-Tttt'


// #### Task 4 👨‍🏫 Самый высокий и самый низкий
// + В этом небольшом задании вам дается строка чисел,
// разделенных пробелами, и вы должны возвращать наибольшее и наименьшее число.
// > Строка вывода должна состоять из двух чисел,
// разделенных одним пробелом, при этом наибольшее число должно быть первым.

// highAndLow('1 2 3 4 5') // return "5 1"
// highAndLow('1 2 -3 4 5') // return "5 -3"
// highAndLow('1 9 3 4 -5') // return "9 -5"


// #### Task 5 👨‍🏫 Изограммы
// + Изограмма - это слово, в котором нет повторяющихся букв,
// последовательных или непоследовательных. Реализуйте функцию,
// которая определяет, является ли строка, содержащая только буквы, изограммой.
// Предположим, что пустая строка является изограммой. Регистр букв мы игнорируем.


// isIsogram('Dermatoglyphics') == true
// isIsogram('aba') == false
// isIsogram('moOse') == false // -- ignore letter case