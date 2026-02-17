"use strict";

// let question = prompt('Яка офіційна назва JavaScript?', '');

// if (question == 'ECMAScript') {
//     alert('Правильно!')
// } else {
//     alert('Ви не знаєте?')
// }

// let result;
// result = (a + b < 4) ? 'Нижче' : 'Вище';



// if (login == 'Працівник') {
//     message = 'Привіт';
// } else if (login == 'Директор') {
//     message = 'Вітаю';
// } else if (login == '') {
//     message = 'Немає логіну';
// } else {
//     message = '';
// }
// ***
// let message;
// message = (login == 'Працівник') ? 'Привіт' :
// (login == 'Директор') ? 'Вітаю' :
// (login == '') ? 'Немає логіну' :
//  "";

// ***
// let age = 17
// if(age >= 14 && age <= 90 ) {
//     console.log("good job")
// };

// ***
// let age;
// if(age < 14 || age > 90);
// if (!(age >= 14 && age <= 90));

// ***
// let log = prompt("Введіть логін", '');

// if (log == "Admin") {
//     let pass = prompt('Введіть пароль', '');
//     if (pass == 'Господар') {
//         alert('Ласкаво просимо!');
//     } else if (pass == '' || pass == null) {
//         alert('Скасовано');
//     } else {
//         alert('Неправильний пароль');
//     }
// } else if (log == '' || log == null) {
//     alert('Скасовано');
// } else {
//     alert('Я вас не знаю');
// };

// ***
// let num;

// do {
//     num = prompt("Введене число, більше за 100?", 0);
// } while (num <= 100 && num);

// ***
// let num = 10;

// nextStep: for (let i = 2; i <= num; i++) {  // для кожного i

//     for (let j = 2; j < i; j++) {   // шукаємо дільник
//         if (i % j == 0) continue nextStep;  // не просте, беремо наступне i
//     }

//     alert(i);   // просте число
// }

// ***
// let n = 7;

// for (let i = 1; i <= 10; i++) {
//     let result = n * i;
//     console.log(`${n} * ${i} = ${result}`);
// }

// let browser = prompt('Яким браузером користуєшся?', '');

// if (browser === 'Edge') {
//     alert("You've got the Edge!");
// } else if (browser === 'Chrome'
//     || browser === 'Firefox'
//     || browser === 'Safari'
//     || browser === 'Opera') {
//     alert('Ми підтримуємо і ці браузери');
// } else {
//     alert('Маємо надію, що ця сторінка виглядає добре!');
// }

// ***
// let a = +prompt('a?', '');

// switch (a) {
//     case 0:
//         alert(0);
//         break;
//     case 1:
//         alert(1);
//         break;
//     case 2:
//     case 3:
//         alert('2,3');
//         break;
// }

// ***
// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm('Батьки дозволили?');
//     }
// }
// checkAge();

// function checkAge(age) {
//     return (age > 18) ? true : confirm('Батьки дозволили?');
// }

// function checkAge(age) {
//     return (age > 18) || confirm('Батьки дозволили?');
// }

// ***
// function min(a, b) {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }

// function min(a, b) {
//     return a < b ? a : b;
// }

// ***
//     function pow(x, n) {
//         let result = x;

//         for (let i = 1; i < n; i++) {
//             result *= x;
//         }
//         return result;
//     }
// let x = prompt('Подай число х', '');
// let n = prompt('Подай число n', '');

// if (n < 1) {
//     alert(`Степінь ${n} не підтримується, використовуйте натуральне число`);
// } else {
//     alert(pow(x, n));
// }

// ***
// let ask = (question, yes, no) => confirm(question) ? yes() : no();

// ask ('Ви згодні?',
//     () => alert("Ви погодились."),
//     () => alert("Ви скасували виконання.")
// );

// ***
// function pow(x, n) {
//     let result = 1;

//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }

//     return result;
// }

// let x = prompt("x?", '');
// let n = prompt("n?", '');

// if (n <= 0) {
//     alert(`Power ${n} is not supported,
//     please enter an integer number greater than zero`);
// } else {
//   alert( pow(x, n) );
// }

/* ОБ'ЄКТ - робота з властивосями*/

// let user = {};
// user.name = "Іван";
// user.surname = "Smith";
// user.name = "Петро";
// delete user.name;


/* ОБ'ЄКТ - функція яка перевіряє обє'кт на наявність властивостей*/

// let schedule = {};
// function isEmpty(obj) {
//     for (let key in schedule) {
//         return false;
//     }
//     return true;
// }
// alert(isEmpty(schedule));
// schedule["8:30"] = "Вставай";
// alert(isEmpty(schedule));


/* ОБ'ЄКТ - сумування всіх значень властивостей, якщо об'єкт порожній повертає 0*/

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// };
// let sum = 0;
// for (let key in salaries) {
//     sum += salaries[key];
// }
// alert(sum);


/* ОБ'ЄКТ - створення функції яка примножує всі числові властивості об’єкта на 2*/

// let menu = {
//     width: 200,
//     height: 300,
//     title: "Моє меню"
// };
// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] == 'number') {
//             obj[key] *= 2;
//         }
//     }
//     return obj;
// }
// console.log(multiplyNumeric(menu));

/* OБ'ЄКТ з трьома методами - 1(запит двох чисел), 2(сума цих чисел), 3(результат множення цих чисел)
let calculator = {
    read() {
        this.a = +prompt('a?', '');
        this.b = +prompt('b?', '');
    },

    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    }

};
calculator.read();
alert(calculator.sum());
alert(calculator.mul());
*/


// function dataBase() {
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     for (let i = 0; i < data.length; i++) {
//         if (typeof (data[i]) === 'number') {
//             data[i] = data[i] * 2;
//         } else if (typeof (data[i]) === 'string') {
//             data[i] = `${data[i]} - done`;
//         }

//     }
//     console.log(data);
//     return data;
// }

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];

// for (let i = 1; i <= data.length; i++) {
//     result[i - 1] = data[data.length - i]
// }
// console.log(result);

// for (let i = 5; i <= 10; i++) {
//     console.log(i);
// }

// for (let i = 20; i >= 10; i--) {
//     if (i === 12) {
//         break;
//     }
//     console.log(i);
// }

// for (let i = 2; i <= 10; i += 2) {
//     console.log(i);
// }


// let i = 2;

// while (i <= 16) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// const arrayOfNumbers = [];
// for (let i = 5; i <= 10; i++) {
//     arrayOfNumbers[i - 5] = i;
// }
// console.log(arrayOfNumbers);

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for (let i = 0; i < arr.length; i++) {
//     result.push(arr[i]);
// }
// console.log(result);

// const data = [5, 10, 'Shopping', 20, 'Homework'];

// for (let i = 0; i < data.length; i++) {
//     if (typeof (data[i]) === 'number') {
//         data[i] = data[i] * 2
//     } else if (typeof (data[i]) === 'string') {
//         data[i] = `${data[i]} - done`;
//     }
// }
// console.log(data);


// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];

// for (let i = data.length - 1; i >= 0; i--) {
//     result.push(data[i]);
// }
// console.log(result);

// const lines = 6;
// let result = '';
// for (let i = 1; i <= lines; i++) {
//     for (let j = 0; j < (lines - i); j++) {
//         result += ' ';
//     }
//     for (let k = 0; k < (2 * i - 1); k++) {
//         result += '*';
//     }
//     result += '\n';
// }
// console.log(result);

/*
const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function (obj) {
        const { age } = plan;
        const { languages } = obj.skills;
        let str = `Мені ${age} і я володію мовами: `;
        languages.forEach(function (lang) {
            str += `${lang.toUpperCase()} `;
        });
        return str;
    }
};
personalPlanPeter.showAgeAndLangs(personalPlanPeter);
function showProgramingLangs(obj) {
    let str = '';
    const { programmingLangs } = obj.skills;
    for (key in programmingLangs) {
        str += `Мова ${key} вивчена на ${programmingLangs[key]}\n`
    }
    return str;
}
console.log(showProgramingLangs(personalPlanPeter));
function showExpirience(obj) {
    const { exp } = obj.skills;
    return exp;
}
console.log(showExpirience(personalPlanPeter));
*/

/*
const gymPlan = {
    athlete: "Дмитро",
    goal: "Витривалість",
    exercises: {
        running: '20 хв',
        swimming: '15 хв',
        cycling: '30 хв'
    },

    showGymPlan: function (plan) {
        const { athlete, goal } = plan;

        let listExercises = Object.keys(plan.exercises);
        let str = `Спортсмен ${athlete}, ціль: ${goal.toLowerCase()}. Сьогодні в плані: `;
        listExercises.forEach(function (nameExerercises) {
            str += `${nameExerercises.toLowerCase()}, `;
        });
        return str.slice(0, -2) + '.';
    }
};
console.log(gymPlan.showGymPlan(gymPlan));
*/

/*
const family = ['Peter', 'Ann', 'Alex', 'Linda'];
function showFamily(arrStr) {
    let str = '';

    arrStr.lenght === 0 ? str += 'Родина пуста' : str += 'Родина складається з: ';

    arrStr.forEach(function (name) {
        str += `${name}, `
    });
    return str.slice(0, -2) + '.';
}
console.log(showFamily(family));
*/

/*
const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];
function standardizeStrings(cities) {

    cities.forEach(item => {
        console.log(item.toLowerCase());
    });
}
standardizeStrings(favoriteCities);
*/

/*
const someString = 'This is some strange string';
function reverse(string) {
    if (typeof (string) !== 'string') {
        return "Помилка!"
    }
    return string.split('').reverse().join('');
}
console.log(reverse(someString));
*/

/*
const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
function availableCurr(arr, missingCurr) {
    let str = '';

    arr.length === 0 ? str = 'Немає доступних валют' : str = 'Доступні валюти:\n';

    arr.forEach(function (curr, i) {
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }
    });
    return str;
}

console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'RUB'));
*/






