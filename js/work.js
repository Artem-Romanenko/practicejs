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
let a = +prompt('a?', '');

switch (a) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2,3');
        break;
}

