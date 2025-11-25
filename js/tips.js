"use strict";   // цей код працюватиме у сучасному режимі
// if - Якщо
// else - інакше
// for - для
// do - робити
// while - поки

//&& - повертає перше false значення, або останнє якщо true
//|| - повертає перше значення true, повертає останнє якщо всі false
//?? - повертає перше визначене значення


const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
    console.log('Всі задоволені!');
} else {
    console.log('Ми йдемо');
}

console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets); //В консолі буде 2

console.log(NaN || 2 || undefined); //2
console.log(NaN && 2 && undefined); //NaN
console.log(1 && 2 && 3); // 3
console.log(!1 && 2 || !3); // false
console.log(25 || null && !3); //25
console.log(NaN || null || !3 || undefined || 5); //5
console.log(NaN || null && !3 && undefined || 5); //5
console.log(5 === 5 && 3 > 1 || 5); //true

// ЦИКЛИ
first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k === 3) continue first;
            console.log(`Third level: ${k}`);
        }
    }
}



//збільшення i:
for (let i = 5; i < 11; i++) {
    console.log(i);
}
//віднімання:
for (let i = 20; i >= 10; i--) {
    if (i === 13) break;
    console.log(i);
}
//множення:
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}
//Залишок при діленні = 0:
for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
//Збільшення двома видами, через for:
for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}
let i = 2;
//Збільшення двома видами, через while:
while (i <= 16) {
    if (i % 2 === 0) {
        i++;
        continue;
    } else {
        console.log(i);
        i++;
    }
}
// СТВОРЕННЯ ТА ЗАПОВНЕННЯ МАССИВУ ЧЕРЕЗ ЦИКЛ FOR:
const arrayOfNumbers = [];
for (let i = 5; i < 11; i++) {
    arrayOfNumbers[i - 5] = i;
}
console.log(arrayOfNumbers);
return arrayOfNumbers;

//ЗАПОВНЕННЯ НОВОГО МАСИВУ, ДАНИМИ ЗІ СТАРОГО ЗА ДОПОМОГОЮ ДВУХ ВАРІАНТІВ
function firstTask() {
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i];                 // result.push(arr[i]);         варіант 2
    }
    console.log(result);
    return result;
}
//Збільшення чисел в масиві в x2, а якщо це строка то додаємо - done
function secondTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    for (let i = 0; i < data.length; i++) {
        if (typeof (data[i]) === 'number') {
            data[i] = data[i] * 2;
        }
        else if (typeof (data[i]) === 'string') {
            data[i] = `${data[i]} - done`;
        }
    }
    return data;
}
//ЦИКЛ - РОЗВЕРНЕННЯ ДАННИХ В МАСИВІ НАВПАКИ ЩА ДОПОМОГОЮ ЦИКЛУ
function finalTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    for (let i = data.length - 1; i >= 0; i--) {

        result.push(data[i]);
    }

    console.log(result);
    return result;
}

//ЦИКЛ - СТВОРЕННЯ ЯЛИНКИ ЗА ДОПОМОГОЮ ВКЛАДЕНИХ ЦИКЛІВ
const lines = 6;
let result = '';

for (let i = 1; i <= lines; i++) {
    for (let j = 0; j < (lines - i); j++) { //перший внутрішній цикл який створює пробіли
        result += ' ';
    }
    for (let k = 0; k < (2 * i - 1); k++) { //другий внутрішній цикл який створює зірочки
        result += '*';
    }

    result += '\n';

}
console.log(result);

//Функція з 1 аргументом(ім'я), та повернення його в строці Привіт, Артем!
function sayHello(name) {
    return `Привіт, ${name}!`;
}
console.log(sayHello('Артем'));

//Функція з 1 аргументом(ціле число), і повертає массив із 3 чисел: на 1 меньше, сам аргумент, та число на 1 більше
function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1];
}
returnNeighboringNumbers(2);

//Функція з 2 аргументами(обидва числа). Перше число це - база, а друге це - скільки раз треба буде його повторити в прогресії.
//Функція повертає рядок (або число в деяких випадках), де ці числа йдуть по черзі, розділенні дефісами
function getMathResult(num, times) {                 //<---Базове число(num) основа для прогресії. Кількість повторень(times) кількість раз повторена у прогресії
    if (typeof (times) !== 'number' || times <= 0) { //<---Якщо другий аргумент(times) не є числом, дорівнює або менше нуля,
        return num;                                  //то повертати просто перший аргумент. (Перевіряємо через оператор typeof)
    }
    let str = '';                                    //<---Оголошується змінна-акумулятор str ініціалізована порожнім рядком. Ця змінна збиратиме всі числа і роздільники---
    for (let i = 1; i <= times; i++) {               //<---Цикл ітерує від i = 1 до i = times (включно). i слугує множником, який визначає поточний елемент прогресії
        if (i === times) {                           //<---Умова перевіряє, чи є поточна ітерація останньою (наприклад, i = 3 при times = 3)
            str += `${num * i}`;                     //<---Якщо так (останній елемент): До рядка str додається тільки обчислене число (num * i).
        } else {
            str += `${num * i}---`;                  //<---Якщо ні (не останній елемент): До рядка str додається обчислене число (num * i), а потім додається роздільник---
        }
    }
    return str;                                      //<---Після завершення циклу, функція повертає повністю сформований рядок (str)
}

console.log(getMathResult(4, 5));


function writeYourGenres() {        //<--Створюємо функ. з відповідями від користувача. Відповіді записуємо до масиву та надаємо "номер по черзі"
    for (i = 1; i <= 3; i++) {      //<--Починаємо з i=1, бо взаємодія з користувачем
        //Класичний варіант
        const genre = prompt(`Ваш улюблений жанр під номером ${i}`);        //<--{i} підставляємо автоматично номер для жанра
        personalMovieDB.genres[i - 1] = genre;      //<--запис відповідей до масиву, та віднімаємо значення [i-1] через початок i=1
        //Покращений варіант
        //personalMovieDB.genres[i - 1] = prompt(`Ваш улюблений жанр під номером ${i}`);
    }
}

writeYourGenres();

//Калькулятор обє'му та периметру
function calculateVolumeAndArea(length) {
    if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
        return "Помилка при підрахунку";
    }

    let volume, area;

    volume = length * length * length;
    // length ** 3 - это тоже самое, что и выше или варианты через цикл.
    // ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
    area = 6 * (length * length);

    return `Обє'м кубу: ${volume}, периметр поверхні: ${area}`;
}

console.log(calculateVolumeAndArea(15));

//Визначення номеру купе за номером місця
function getCoupeNumber(seatNumber) {
    if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return "Помилка. Перевірте правильність введеного номера";
    }
    if (seatNumber === 0 || seatNumber > 36) {
        return "Таких мест в вагоне не существует";
    }
    return Math.ceil(seatNumber / 4);
}

console.log(getCoupeNumber(1));

//Функція перетворення загальної кількості хвилин(minutesTotal) у зручний формат
function getTimeFromMinutes(minutesTotal) {
    if (typeof (minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
        return "Помилка, перевірте данні";
    }       //<--Перевіряємо аргумент чи не є рядком, від'ємним або дробовим.

    const hours = Math.floor(minutesTotal / 60);    //<--обчислює кількість годин, округлює результат униз до найближчого цілого
    const minutes = minutesTotal % 60;  //<--повертає залишок від ділення загальної кількості хвилин на 60

    let hoursStr = '';  //<--Потрапляє результат циклу switch години
    switch (hours) {    //<--Блок для визначення кінцівки слова "година"
        case 0:     //<--Значення змінної(hours) перевіряється на строгу рівність(===) значенню блоку case 0,1,2 і тд
            hoursStr = 'годин';
            break;
        case 1:
            hoursStr = 'годинa';
            break;
        case 2:
        case 3:
        case 4:
            hoursStr = 'години';
            break;
        default: //<--необов’язковий блок default.Якщо жодне case-значення не збігається – виконується код із блоку default
            hoursStr = 'годин';
    }

    return `Це ${hours} ${hoursStr} і ${minutes} хв.`; //<--Формування та Повернення Результату
}

console.log(getTimeFromMinutes(321));

//Функція котра приймає в себе 4 числа і повертає найбільше.
//Якщо один з аргументів не є числом або чисел меньше ніж 4 повертає - 0
function findMaxNumber(a, b, c, d) {
    if (typeof (a) !== 'number' ||   //<--Перевіряємо аргумент чи не є рядком
        typeof (b) !== 'number' ||
        typeof (c) !== 'number' ||
        typeof (d) !== 'number') {
        return 0;
    } else {
        return Math.max(a, b, c, d);   //<--метод(Math.max) повертає найбільше число  
    }
}

console.log(findMaxNumber(1, 5, 6.6, 10.5));

//Функція котра приймає в себе один аргумент(ціле число), повертає рядок в котрому виведені числа Фібоначчі
function fib(num) {
    if (typeof (num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return "";
    }       //<--Перевіряємо аргумент чи не є рядком, від'ємним або дробовим.

    let result = '',    //<--Змінна-акумулятор, де збиратиметься кінцевий рядок послідовності
        first = 0,      //<--Перше число в послідовності Фібоначчі
        second = 1;     //<--Друге число

    for (let i = 0; i < num; i++) {     //<--Цикл виконується num разів(від i = 0 до i = num - 1)
        if (i + 1 === num) {
            result += `${first}`;       //<--Перевіряє, чи це останній елемент у послідовності
        } else {
            result += `${first} `;      //<--Додаємо відступ якщо число не останнє
        }
        let third = first + second; //<--Обчислюється наступне число(third) як сума двох попередніх(first і second).
        first = second; //<--Значення second (старе друге число) стає новим first (новим першим числом).
        second = third; //<--Обчислене нове число (third) стає новим second (новим другим числом).
    }   //<--Таким чином, змінні зсуваються на одну позицію вперед, готуючи їх до наступної ітерації циклу.

    return result;
}

console.log(fib(4));

//Callback функція
function learnJS(lang, callback) {
    console.log(`Я вивчаю ${lang}`);
    callback();     //<--а тут використовуємо функцію 'done'
}

function done() {
    console.log('Я пройшов цей урок!');
}

learnJS('JavaScript', done);    //<--тут ми тільки передаємо функцію 'done' для подальшого використання

//ОБ'ЄКТИ ТА ЇХ ДЕСТРУКТУРИЗАЦІЯ

// const options = {
//     name: 'test', //<-- ключ: 'значення'
//     width: 1024,
//     heigh: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     }
// };
console.log(options["colors"]["border"]);   //<--якщо ми хочемо достучатись до (об'єкт(об'єкт(ключ)))
delete options.name; //<--Видалення ключ-значення з об'єкту
console.log(options);
// перебір всіх властивостей об'єкту
for (let key in options) {      //<--переборираємо ключі в константі options, цикл спрацьовує стільки раз скільки є властивостей в цьому об'єкті
    if (typeof (options[key]) === 'object') {    //<--перевірка ключів під час перебору об'єктa, якщо значення ключа буде об'єктом - ми запустимо перебор всередині перебору
        for (let i in options[key]) {       //<--в данній перевірці це об'єкт > options[key]
            console.log(`Властивість ${i} має значення ${options[key][i]}`);
        }
    } else {
        console.log(`Властивість ${key} має значення ${options[key]}`);     //<--тобто якщо наш ключ в перевірці зверху не буде об'єктом то ми переходимо до цієї ділянки коду!
    }

}

// ФУНКЦІЇ ТА МЕТОДИ ЯКІ ВЖЕ Є В СЕРЕДИНІ ОБ'ЄКТУ

const options = {
    name: 'test', //<--ключ: 'значення'
    width: 1024,
    heigh: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function () {      //<--це власно створений метод, тут він створений і його треба викликати
        console.log("Test");
    }
};
options.makeTest();     //<--Виклик нашого об'єкту
console.log(Object.keys(options).length);  //<--Цей метод бере об'єкт і на його основі створює масив з ключів на верхньому рівні

//ДЕСТРУКТУРИЗАЦІЯ ОБ'ЄКТІВ

//СТВОРЕННЯ ВЛАСНОГО МЕТОДУ В СЕРЕДИНІ ОБ'ЄКТУ
// const options = {
//     name: 'test', //<--ключ: 'значення'
//     width: 1024,
//     heigh: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function () {      //<--це власно створений метод, тут він створений і його треба викликати
//         console.log("Test");
//     }
// };
// options.makeTest();
// const { border, bg } = options.colors;  //{то що хочемо витащити} = структура з котрої витаскуємо об'єкти
// console.log(border);

//МАСИВИ ТА ПСЕВДОМАСИВИ
const arr = [2, 4, 5, 6, 9];

//ПЕРЕБІР ВСІХ ЕЛЕМЕНТІВ В МАСИВІ

//Спосіб №1 - цикл
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

//Спосіб №2 - метод "for of"
// for (let value of arr) {
//     console.log(value);     //<--де значення value це кожен окремий елемент
// }

//Спосіб №3 - Метод "forEach". Користь цього методу в тому що ми можемо його гнучко налаштувати
arr.forEach(function (item, i, arr) {   //<--ця функція виконується кожен раз та для кожного елементу масиву
    console.log(`${i}: ${item} в середині масива ${arr}`);
    //item - елемент котрий перебираємо (2, 4, 5...), цей аргумент можна називати як завгодно
    //i - номер по черзі
    //arr - посилання на той масив котрий ми перебираємо
});

//ПЕРЕТВОРЕННЯ МАСИВУ З РЯДКА ЗА ДОПОМОГОЮ МЕТОДУ arr.split
const str = prompt("", "");//<--тут маємо рядок
const products = str.split(", "); //<--Вказуємо роздільник за допомогою якого ми виведемо елементи на сторінку
// console.log(products);

//З'ЄДНАННЯ/ФОРМУВАННЯ ЕЛЕМЕНТІВ З МАСИВУ В РЯДОК ЗА ДОПОМОГОЮ МЕТОДУ arr.join
console.log(products.join('; '));

//сортування елементів в масиві методом arr.sort
products.sort(); //<--завжди сортує елементи як рядки

const arrNum = [24, 41, 15, 6, 29];
arr.sort();
console.log(arr)

function compareNum(a, b) {
    return a - b;
};

//ПЕРЕДАЧА ДАНИХ ЗА ДОПОМОГОЮ ПОСИЛАННЯ АБО ЗНАЧЕННЯ

////ПЕРЕДАЧА ДАНИХ ЗА ДОПОМОГОЮ ПОСИЛАННЯ ВИКОНУЄТЬСЯ ДЛЯ ВСІХ "НЕ ПРОСТИХ ТИПІВ ДАННИХ"
// const obj = {
//     a: 5,
//     b: 1
// };
// const copy = obj; //в цьому випадку ми передаємо посилання на вміст нашого головного об'єкту тобто {a:5, b:1};
// copy.a = 10; //Тому коли ми змінюємося щось в копії - міняється наш основний об'єкт
// console.log(copy);
// console.log(obj);

// КОПІЮВАННЯ (ПОВЕРХНЕВЕ) ЗА ДОПОМОГОЮ ФУНКЦІЇ
function copy(mainObj) {    //ця функція за допомогою циклу створить новий об'єкт перебираючи старі властивості які вже були в нашому об'єкті
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];    //проходимось по нашому старому об'єкту, копіюючи всі властивості в нашу копію котра з початку була пустим об'єктом
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};
const newNumbers = copy(numbers);
newNumbers.a = 10;
//newNumbers.с.x = 10; //якщо властивість буде об'єктом то в копії ми будемо мати посилання на вкладений об'єкт і міняємо копію разом з основним об'єктом
console.log(newNumbers); //наш новий об'єкт в котрий ми помістили a: 10
console.log(numbers);   //старий об'єкт в котрому a: 2 так і залишилось після копіювання

//ПОЄДНАННЯ ОБ'ЄКТІВ ЗА ДОПОМОГОЮ МЕТОДУ Object.assign()
const add = {
    d: 17,
    e: 15
};
//console.log(Object.assign(numbers, add)); //першим аргументом передаємо об'єкт в котрий хочемо перемістити, а другий той котрий переміщаємо
const clone = Object.assign({}, add); //копіювання за допомогою створення нового порожнього об'єкту
clone.d = 20;
console.log(add);
console.log(clone);

//КОПІЮВАННЯ МАСИВІВ ЗА ДОПОМОГОЮ slice()
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();
newArray[1] = 'hello';
console.log(newArray);
console.log(oldArray);

//КОПІЮВАННЯ ЗА ДОПОМОГОЮ ОПЕРАТОРА РОЗВЕРТАННЯ "SPREAD"
const video = ['youtube', 'vimeo', 'filmua'],
    blogs = ['wordpress', 'livejournal', 'instagram'],
    internet = [...video, ...blogs, 'facebook', 'messanger'];
console.log(internet);
//*сложніший приклад. Коли до нас приходять дані в вигляді наприклад - посилання, заглушки на фото, та назва автора
function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const num = [2, 5, 7];
log(...num);    //оператор spread розкладає даний масив на окремі дані і виводить їх в консоль в вигляді рядка

// СТВОРЕННЯ ПОВЕРХНЕВИХ КОПІЙ ЗА ДОПОМОГИ ОПЕРАТОРА "SPREAD"
const array = ["a", "b"];
const newAarray = [...array];
const q = {
    one: 1,
    two: 2
};
const newObj = { ...q };


