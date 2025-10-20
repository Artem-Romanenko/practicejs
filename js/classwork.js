//Методи та властивості рядків та чисел
const str = "teSt;"
console.log(str[2]);
console.log(str.toUpperCase()); //<--Методи
console.log(str.toLowerCase()); //<--Методи
console.log(str);

const fruit = "Some fruit";
console.log(fruit.indexOf("fruit")); //<--Показує значення з якого починається fruit

const logg = "Не відчуваю себе генієм";
console.log(logg.slice(3, 12)); //<--Вирізаємо значення з рядка отримаємо "відчуваю"
console.log(logg.slice(3)); //<--Вирізаємо значення від 3 і до кінця
console.log(logg.substring(3, 12)); //<--Вирізаємо значення з рядка отримаємо "відчуваю"

const num = 12.2;
console.log(Math.round(num)); //<--Метод округлення до найближчого цілого числа

const test = "12.5px";
console.log(parseInt(test)); //<--переводить число в іншу систему числення. Обрізає рядок та переводить в числовий тип данних "12"
console.log(parseFloat(test));//<--Повертає число або рядок в десятичному варіанті "12.2"

//Конвертер валют
const usdCurr = 28;
const eurCurr = 32;

function convert(amount, curr) {
    console.log(curr * amount);
}

convert(500, usdCurr);
convert(500, eurCurr);