const hamburger = 3;                                                //&& - повертає перше false значення, або останнє якщо true;
const fries = 3;                                                    //|| - повертає перше значення true, повертає останнє якщо всі - false;
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

цикли
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
//Створення та заповення массиву через цикл for:
const arrayOfNumbers = [];
for (let i = 5; i < 11; i++) {
    arrayOfNumbers[i - 5] = i;
}
console.log(arrayOfNumbers);
return arrayOfNumbers;

//Заповнення нового массиву, даними зі страрого за допомогою двух варіантів
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
//Цикл - Розвернення даних в масиві навпаки за допомогою циклу
function finalTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    for (let i = data.length - 1; i >= 0; i--) {

        result.push(data[i]);
    }

    console.log(result);
    return result;
}

//Цикл - Створення ялинки за допомогою вкладених циклів
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

