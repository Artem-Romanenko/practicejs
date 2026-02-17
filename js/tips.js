"use strict";
/* УМОВА
    if(якщо){}
    else if(інакше якщо){}
    else{інакше}
    ?(тернарний оператор) ? варіант А : варіант Б;
    switch(перемикач){case A: A; break;}
*/

/* ЛОГІЧНІ ОПЕРАТОРИ
    &&(І) - повертає перше false значення, або останнє якщо всі true;
    ||(АБО) - повертає перше значення true, повертає останнє якщо всі false;
    ??(нульове злиття) - повертає перше визначене значення
*/

/* ЦИКЛИ
    while(поки) {тіло циклу};
    do {тіло циклу} while(поки);
    for(початок; умова; крок;) {тіло циклу}
*/


/* УМОВА З ЛОГІЧНИМИ ОПЕРАТОРАМИ

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
    console.log('Всі задоволені!');
} else {
    console.log('Ми йдемо');
}
*/


/* ЦИКЛ - ВКЛАДЕНИЙ ЦИКЛ

let result = '';
const lenght = 7;

for (let i = 1; i < lenght; i++) { глобальний цикл зі збільшення рядків
    
    for (let j = 0; j < i; j++) { другий цикл з додавання зірочок
        result += '*';
    }
    result += '\n';
}
console.log(result);
*/


/* ЦИКЛ - ВИКОРИСТАННЯ МІТКИ У ВКЛАДЕНОМУ ЦИКЛІ

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
*/


/* ЦИКЛ - ВИВЕДЕННЯ ЧИСЕЛ ДО КОНСОЛІ ВІД 5 ДО 10
for (let i = 5; i < 11; i++) {
    console.log(i);
}
*/


/* ЦИКЛ - ВИВЕДЕННЯ ЧИСЕЛ В ЗВОРОТНЬОМУ НАПРЯМКУ ВІД 20 ДО 13
for (let i = 20; i >= 10; i--) {
    if (i === 13) break;
    console.log(i);
}
*/


/* ЦИКЛ - ВИВЕДЕННЯ ПАРНИХ ЧИСЕЛ ДО КОНСОЛІ
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}
*/


/* ЦИКЛ - ВИВЕДЕННЯ ПАРНИХ ЧИСЕЛ ДО КОНСОЛІ ЗА ДОПОМОГОЮ УМОВИ if
for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
*/


/* ЦИКЛ - ВИВЕДЕННЯ НЕПАРНИХ ЧИСЕЛ ЗА ДОПОМОГОЮ УМОВИ if
for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}
*/

/* ЦИКЛ - ВИВЕДЕННЯ НЕПАРНИХ ЧИСЕЛ ЗА ДОПОМОГОЮ ЦИКЛУ while
let i = 2;
while (i <= 16) {
    if (i % 2 === 0) {
        i++;
        continue;
    } else {
        console.log(i);
        i++;
    }
}
*/


/* ЦИКЛ - СТВОРЕННЯ ТА ЗАПОВНЕННЯ МАССИВУ
const arr = [];
for (let i = 5; i < 11; i++) {
    arr[i - 5] = i;
}
console.log(arr);
*/


/* ЦИКЛ - ЗАПОВНЕННЯ НОВОГО МАСИВУ, ДАНИМИ ЗІ СТАРОГО
function firstTask() {
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i];                                     // result.push(arr[i]);         варіант 2
    }
    console.log(result);
    return result;
}
*/


/* ЦИКЛ - Збільшення чисел в масиві в x2, а якщо це строка то додаємо - done
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
*/


/* ЦИКЛ - РОЗВЕРНЕННЯ ДАННИХ В МАСИВІ НАВПАКИ ЩА ДОПОМОГОЮ ЦИКЛУ
function finalTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    for (let i = data.length - 1; i >= 0; i--) {

        result.push(data[i]);
    }

    console.log(result);
    return result;
}
*/


/* ЦИКЛ - СТВОРЕННЯ ЯЛИНКИ ЗА ДОПОМОГОЮ ВКЛАДЕНИХ ЦИКЛІВ
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
*/


/* ФУНКЦІЯ - з 1 аргументом(ціле число), і повертає массив із 3 чисел: на 1 меньше, сам аргумент, та число на 1 більше
function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1];
}
returnNeighboringNumbers(2);
*/


/* ФУНКЦІЯ - 2 аргументи(обидва числа). Повертає рядок з числами в прогресії через дефіс. Перевіряє другий аргумент на число, меньше або дорівнює 0; 
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
*/


/* МЕТОДИ Й ВЛАСТИВОСТІ РЯДКІВ ТА ЧИСЕЛ
    
    ВЛАСТИВОСТІ ЗАПИСУЮТЬСЯ ЧЕРЕЗ КРАПКУ:
    str.lenght; ця властивіть допомогає дізнатись кількість елементів в змінній str
    console.log(str[2]); отримання символу за допомогою індексу

    МЕТОДИ ВИКЛИКАЮТЬСЯ ЗА ДОПОМГОЮ КРУГЛИХ ДУЖОК:
    str.trim() - видаляє пробіли з початку та кінця рядка 
    str.toUpperCase(); переведення строки в верхній регістр - повертає нове значення не змінюючи старого
    str.toLowerCase(); переведення в нижній регістр
    someFruit.indexOf("fruit"); пошук підпорядкованого рядка
    helloWorld.slice(6, 11); вирізання частки рядка по індексам
    helloWorld.substring(6, 11); подібний метод до попереднього, але цей не підтримує від'ємні індекси
    helloWorld.substr(5, 9); замість другого індексу кінця, вказується кількість вирізаємих елементів

    Number.isInteger() - перевіряємо чи число є цілим
    
    parseInt() - дістає ціле число з рядка. Він читає рядок зліва направо, доки не зустріне символ, який не є числом
    parseFloat() - сканує рядок зліва направо і "витягує" число, але він не зупиняється на першій крапці

    Math.round(num) - округлення до найближчого цілого
    Math.ceil(num) - округлення до найближчого більшого цілого числа
    Math.floor(num) - округлення до найближчого меншого цілого числа
    Math.max() - повертає найбільше число
*/


/* ФУНКЦІЯ КАЛЬКУЛЯТОР ОБ'ЄМУ ТА ПЕРИМЕТРУ
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
*/


/* ФУНКЦІЯ ВИЗНАЧЕННЯ НОМЕРУ КУПЕ ЗА НОМЕРОМ МІСЦЯ
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
*/


/* ФУНКЦІЯ ПЕРЕТВОРЕННЯ ЗАГАЛЬНОЇ КІЛЬКОСТІ ХВИЛИН У ЗРУЧНИЙ ФОРМАТ
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
*/


/* ФУНКЦІЯ ПРИЙМАЄ В СЕБЕ 4 ЧИСЛА І ПОВЕРТАЄ НАЙБІЛЬШЕ. ЯКЩО ОДИН ІЗ НИХ НЕ Є ЧИСЛОМ АБО ЧИСЕЛ МЕНЬШЕ НІЖ 4 ПОВЕРТАЄ 0
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
*/


/* ФУНКЦІЯ КОТРА ПРИЙМАЄ В СЕБЕ ЦІЛЕ ЧИСЛО, ПОВЕРТАЄ РЯДОК В КОТРОМУ ВИВЕДЕНІ ЧИСЛА ФІБОНАЧІ
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
*/


/* ФУНКЦІЯ CALLBACK
function learnJS(lang, callback) {
    console.log(`Я вивчаю ${lang}`);
    callback();     //<--а тут використовуємо функцію 'done'
}
function done() {
    console.log('Я пройшов цей урок!');
}
learnJS('JavaScript', done);    //<--тут ми тільки передаємо функцію 'done' для подальшого використання
*/


/* ОБ'ЄКТИ ТА ЇХ ДЕСТРУКТУРИЗАЦІЯ
const options = {
    name: 'test', //<-- ключ: 'значення'
    width: 1024,
    heigh: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};
console.log(option.name);   - показати нам значення ключа name
console.log(options["colors"]["border"]); -якщо ми хочемо достучатись до (об'єкт(об'єкт(ключ)))
delete options.name;    - Видалення ключа name разом з його значенням з об'єкту
*/


/* ОБ'ЄКТ - ПЕРЕБІР ВСІХ ВЛАСТИВОСТЕЙ ЗА ДОПОМОГОЮ ЦИКЛУ БЕЗ ВКЛАДЕНИХ ОБ'ЄКТІВ
for (let key in options) {
    console.log(`Властивість ${key} має значення ${options[key]}`);
}
*/


/* ОБ'ЄКТ - ПЕРЕБІР ВСІХ ВЛАСТИВОСТЕЙ З ВКЛАДЕНИМИ ОБ'ЄКТАМИ ЗА ДОПОМОГОЮ ЦИКЛУ ТА УМОВИ
for (let key in options) {                      <--переборираємо ключі options, цикл працює доки в нас є key
    if (typeof (options[key]) === 'object') {   <--перевірка ключів під час перебору об'єктa, якщо значення ключа буде об'єктом - ми запустимо перебор всередині перебору
        for (let i in options[key]) {           <--в данній перевірці це об'єкт > options[key]
            console.log(`Властивість ${i} має значення ${options[key][i]}`);
        }
    } else {
        console.log(`Властивість ${key} має значення ${options[key]}`);         <--тобто якщо наш ключ в перевірці зверху не буде об'єктом то ми переходимо до цієї ділянки коду
    }
}
*/


/* ОБ'ЄКТ ТА МЕТОД СВТОРЕННЯ МАСИВУ НА ОСНОВІ ЙОГО КЛЮЧІВ
let footballClub = {
    attack: 'gabi', //<--ключ: 'значення'
    def: 'saliba',
    gk: 'raya',
    mid: {
        centr: 'zubimendi',
        flank: 'rice'
    },
    coach: 'arteta',
};
console.log(Object.keys(footballClub).length);          <--Цей метод бере об'єкт і на його основі створює масив з ключів на верхньому рівні
*/


/* ОБ'ЄКТ - СТВОРЕННЯ ВЛАСНОГО МЕТОДУ В СЕРЕДИНІ ОБ'ЄКТУ ТА ДЕСТРУКТУРИЗАЦІЯ ОБ'ЄКТІВ
let footballClub = {
    attack: 'gabi',
    def: 'saliba',
    gk: 'raya',
    mid: {
        centr: 'zubimendi',
        flank: 'rice'
    },
    coach: 'arteta',
    назваОб'єкту: function () {                     <--так виглядає створення власного методу в об'єкті
        console.log('Test');
    }
};
footballClub.makeTest();
const { centr, flank } = footballClub.mid;      <--Деструктуризація об'єкта {то що хочемо витащити} = структура з котрої витаскуємо об'єкти
console.log(centr);
*/


/* МАСИВИ - ПОПУЛЯРНІ МЕТОДИ МАСИВІВ
.pop()  - видаляє останній елемент в нашому масиві
.push(елемент)  - додає вказаний елемент в кінець нашого масиву
.forEach() - гнучкий метод для перебору масиву
.split(", ") - перетворення рядка в масив
.sort() - сортування масиву
*/


/* МАСИВИ - ПЕРЕБІР ВСІХ ЕЛЕМЕНТІВ
Спосіб №1 - ЦИКЛ
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

Спосіб №2 - "for of"
for (let value of назваМасиву) {
    console.log(value);     <--де значення value це кожен окремий елемент
}

Спосіб №3 - МЕТОД "forEach"
arr.forEach(function (item, i, arr) {       <--ця функція виконується кожен раз та для кожного елементу масиву                
    console.log(`${i}: ${item} в середині масива ${arr}`);
});
item - елемент котрий перебираємо, цей аргумент можна називати як завгодно
i - індекс елемента
arr - посилання на той масив котрий ми перебираємо


/* МАСИВ - ПЕРЕТВОРЕННЯ РЯДКА В МАСИВ ЗА ДОПОМОГОЮ .split
const str = prompt("", "");         <-- тут маємо рядок
const products = str.split(", ");   <-- Вказуємо роздільник за допомогою якого ми виведемо елементи на сторінку
console.log(products);
*/


/* МАСИВ - НА ОСНОВІ МАСИВУ ФОРМУЄМО РЯДОК ЗА ДОПОМОГОЮ .join
const str = prompt("", "");
const products = str.split(", ");   
console.log(products.join('; '));      < -- Вказуємо роздільник
*/


/* МАСИВ - СОРТУВАННЯ ЕЛЕМЕНТІВ .sort
const arrNum = [24, 41, 15, 6, 29];
arr.sort(compareNum);                             <-- завжди сортує елементи як рядки, якщо використовувати без функції.
console.log(arr)
function compareNum(a, b) {
    return a - b;
};
*/


/* ОБ'ЄКТ - ПЕРЕДАЧА ДАНИХ ЗА ДОПОМОГОЮ ПОСИЛАННЯ. (ВИКОНУЄТЬСЯ ДЛЯ ВСІХ "НЕ ПРИМІТИВІВ")
const obj = {
    a: 5,
    b: 1
};
const copy = obj;       <-- передаємо посилання на головний об'єкт {a:5, b:1}
copy.a = 10;            <-- тому коли ми змінюємося щось в копії - міняється наш основний об'єкт
console.log(copy);
console.log(obj);
*/


/* ОБ'ЄКТ - ПОВЕРХНЕВЕ КЛОНУВАННЯ ЗА ДОПОМОГОЮ ФУНКЦІЇ З ЦИКЛОМ
function copy(mainObj) {                <-- ця функція за допомогою циклу створить новий об'єкт перебираючи старі властивості які вже були в нашому об'єкті
    let objCopy = {};
    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];    <-- проходимось по нашому старому об'єкту, копіюючи всі властивості в нашу копію котра з початку була пустим об'єктом
    }
    return objCopy;                     <-- обов'язково повертаємо наш новий об'єкт для подальшої роботи з ним
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
newNumbers.с.x = 10;                    <-- якщо властивість буде об'єктом то в копії ми будемо мати посилання на вкладений об'єкт і міняємо копію разом з основним об'єктом
console.log(newNumbers);                <-- наш новий об'єкт в котрий ми помістили a: 10
console.log(numbers);                   <-- старий об'єкт в котрому a: 2 так і залишилось після копіювання
*/


/* ОБ'ЄКТ - ПОЄДНАННЯ ОБ'ЄКТІВ ЗА ДОПОМОГОЮ МЕТОДУ Object.assign(). ВКЛАДЕНА СТРУКТУРА (c: {x: 7, y: 4}) ДАЛІ ЗАЛИШАЄТЬСЯ ЗА ПОСИЛАННЯМ
const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};
const add = {
    d: 17,
    e: 15
};
console.log(Object.assign(numbers, add));   <-- першим аргументом передаємо об'єкт в котрий хочемо перемістити, а другий той котрий переміщаємо
*/


/* ОБ'ЄКТ - ПОЄДНАННЯ/КЛОНУВАННЯ ДО НОВОГО ОБ'ЄКТУ ЗА ДОПОМОГОЮ МЕТОДУ Object.assign()
const clone = Object.assign({}, add);       <-- копіювання за допомогою створення нового порожнього об'єкту
clone.d = 20;
console.log(add);
console.log(clone);
*/


/* МАСИВ - КЛОНУВАННЯ МАСИВА ЗА ДОПОМОГОЮ .slice()
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();
newArray[1] = 'hello';
console.log(newArray);
console.log(oldArray);
*/


/* МАСИВ - КОПІЮВАННЯ ЗА ДОПОМОГОЮ ОПЕРАТОРА РОЗГОРТАННЯ Spread
const video = ['youtube', 'vimeo', 'filmua'],
    blogs = ['wordpress', 'livejournal', 'instagram'],
    internet = [...video, ...blogs, 'facebook', 'messanger'];      <-- [...video] в такий спосіб оператор spread розгортає наш масив та передає дані до нового 
console.log(internet);
*/


/* МАСИВ - РОЗКЛАДАЄМО ОТРИМАНИЙ МАСИВ ВІД КОРИСТУВАЧА(прик. посилання, заглушка на фото, ім'я користувача), ЩОБ МОЖНА ЙОГО БУЛО ПЕРЕДАТИ В ФУНКЦІЮ
function log(a, b, c) {     <-- створюємо функція яка приймає три аргументи
    console.log(a);
    console.log(b);
    console.log(c);
}
const num = [2, 5, 7];      <-- отриманий масив від користувача
log(...num);                <-- оператор spread розгортає масив на окремі дані і виводить їх в консоль в вигляді рядка
*/

/* МАСИВ - СТВОРЕННЯ ПОВЕРХНЕВИХ КОПІЙ ЗА ДОПОМОГОЮ ОПЕРАТОРА РОЗГОРТАННЯ Spread
const array = ["a", "b"];
const newAarray = [...array];
*/


/* ОБ'ЄКТ - СТВОРЕННЯ ПОВЕРХНЕВИХ КОПІЙ ЗА ДОПОМОГОЮ ОПЕРАТОРА РОЗГОРТАННЯ Spread
const q = {
    one: 1,
    two: 2
};
const newObj = { ...q };
*/


/* ПРОТОТИПИ - СТВОРЕННЯ ТА ВСТАНОВЛЕННЯ ПРОТОТИПІВ ОБ'ЄКТА
    ВСТАНОВЛЕННЯ В ДИНАМІЦІ:
    Object.setPrototypeOf(john, soldier);
    john - об'єкт котрому назначаємо прототип
    soldier - той об'єкт прототип котрого ми встановлюємо

    НА ЕТАПІ СТВОРЕННЯ ОБ'ЄКТА:
    const john = Object.create(soldier); створюємо новий об'єкт john котрий одразу успадковує прототип soldier
*/


/* ОБ'ЄКТ - РОБОТА З ОБ'ЄКТАМИ ТА МАСИВАМИ
-написати функцію яка буде повертати рядок якщо бюджету вистачає для опалення всього обсягу торгового центру
-вирахування загальної площі всіх магазинів
-вирахування загального об'єму торгового центру
-визначення того, хватає чи бюджету на оплату такого обсягу

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    let totalArea = 0;

    data.shops.forEach(shop => {
        totalArea += shop.width * shop.length;
    });

    const totalVolume = totalArea * data.height;

    const totalPrice = totalVolume * data.moneyPer1m3;

    if (totalPrice <= data.budget) {
        return 'Бюджета вистачає';
    } else {
        return 'Не вистачає бюджета';
    }
}
*/


/* МАСИВ - СТВОРЕННЯ ФУНКЦІЇ ЯКА ПРИЙМАЄ В СЕБЕ МАСИВ
-сортування масиву за алфавітом
-розділення студентів на 3 групи * 3 студенти
-групи мають бути масивами
-функція повертає масив з трьома командами та четвертим елементом


const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    arr.sort();

    const team1 = [],
        team2 = [],
        team3 = [];
    const rest = [];

    arr.forEach((student, i) => {
        if (i < 3) {
            team1.push(student);
        } else if (i < 6) {
            team2.push(student);
        } else if (i < 9) {
            team3.push(student);
        } else {
            rest.push(student);
        }
    });

    const restString = `Студенти які залишились: ${rest.length === 0 ? '-' : rest.join(', ')}`;

    return [team1, team2, team3, restString];

}
*/