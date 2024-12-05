// NORMAL level

//Task 1 💻
//Создать любой обьект с двумя ключами и любыми значениями в них,
// а затем удалить ключи из обьекта.

const myObject = {
    age: 12,
    name: 'Петя',
}

console.log('Перед удалением ключей:', myObject)

delete myObject.age
delete myObject.name

console.log('После удаления ключей:', myObject)

//Task 2 🖥
// Создать любой обьект с двумя ключами и любыми значениями в них,
// а затем проверить есть ли в обьекте определенный ключ и если есть вывести в консоль **true**

const myPatient = {
    age: 12,
    firstName: 'Петя',
    lastName: 'Иванов',
}

if ('lastName' in myPatient) {
    console.log(true)
}

//Task 3 🖥
// Дан обьект:
// ```javascript
//    const student = {
//        name: 'John',
//        age: 19,
//        isHappy: true
//    }
//```
//C помощью цикла **for in** вывести в консоль сначала все ключи, потом значения ключей обьекта.

const student = {
    name: 'John',
    age: 19,
    isHappy: true,
}

console.log('Ключи объекта:')
for (let key in student) {
    console.log(key)
}
console.log('Значения ключей обьекта:')
for (let value in student) {
    console.log(student[value])
}

//Task 4 🖥
//Дан обьект:

//  ```javascript
//const colors = {
//    'ru pum pu ru rum': {
//        red: 'красный',
//        green: 'зеленый',
//        blue: 'синий'
//    },
//};
//```
//Вывести в консоль слово красный и синий

const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий',
    },
}
console.log(colors['ru pum pu ru rum'].red, colors['ru pum pu ru rum'].blue)


//Task 5 🖥
//Дан обьект:
//```javascript
//    let salaries = {
//        andrey: 500,
//        sveta: 413,
//        anton: 987,
//        andrey: 664,
//        alexandra: 199
//    }
//```
//Вычислите среднюю зарплату сотрудников и результат поместите в соответствующую переменную

let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    andrey: 664,
    alexandra: 199,
}

let totalSalary = 0;
let employeeCount = 0;

for (let key in salaries) {
    totalSalary += salaries[key]; // считаем зарплаты
    employeeCount++; // считаем количество сотрудников
}
let averageSalary = totalSalary / employeeCount;

console.log("Средняя зарплата сотрудников:", averageSalary);


// Task 6 🖥
//Создать валидатор, 2 метода: валидатор и логин.
// Первый метод принимают у пользователя логин и пароль для регистрации.
// Затем данные записать в обьект.
// Второй метод принимает данные пользователя и объект зарегестрированного пользователя.
// Если передан верный логин и пароль, вывести сообщение **Добро пожалоВать**.

class userValidator {
    constructor() {
        this.users = {};
    }

    register(username, password) {
        if (username in this.users) {
            console.log("Пользователь с таким именем уже зарегистрирован.");
        } else {
            this.users[username] = password;
            console.log("Пользователь зарегистрирован.");
        }
    }

    login(username, password) {
        if (this.users[username] === password) {
            console.log("Добро пожаловать!");
        } else {
            console.log("Неверный логин или пароль.");
        }
    }
}

const validator = new userValidator();
validator.register("user1", "password123");
validator.login("user1", "password123");
validator.login("user2", "wrongpassword");

//ADVANCED level

// Task 1 👨‍🏫
//Мы на футбольном матче,
// счет забитых голов одной команды не может превышать 9 мячей.
// Жаль что нам присылают результат матча в формате '2:5',
// ведь нам надо это вывести в консоль словами.
// Давайте напишем программу которая будет за нас переводить формат и выводить результат в консоль.

//Task 2 🖥

//Даны два одинаковых обьекта. Сравните их так чтобы они были равны

//  ```javascript
//    let student1 = {
//        name: 'Polina',
//        age: 27,
//    }

//    let student2 = {
//        name: 'Polina',
//        age: 27,
//    }


//Task 3 🖥
//Дан объект cat.
// Склонируйте его 2 способами,
// и подтвердите, что при изменении поля в 1ом объекте,
// это же поле не меняется во втором объекте.
// Объекты должны быть описаны с помощью типа или интерфейса

//javascript
//const cat = {
//      name: 'Енчик',
//      age: 3,
//   }
