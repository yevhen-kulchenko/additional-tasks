//Допзадачи 2-го модуля

// const createArrayOfNumbers = (min, max) => {
//   const numbers = [];
//   for (let i = min; i <= max; i += 1) {
//     if (i >= min && i <= max) {
//       numbers.push(i);
//     }
//   }
//   return numbers;
// };

// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));

// Задание
// Напиши функцию filterArray(numbers, value), которая принимает массив
// чисел(параметр numbers) и возвращает новый массив, в котором будут
// только те элементы массива numbers, которые больше чем значение
// параметра value(число).

// const filterArray = (numbers, value) => {
//   let newArr = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       newArr.push(numbers[i]);
//     }
//   }
//   return newArr;
// };

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// Задание
// Общими элементами массивов называют те элементы, которые присутствуют
// во всех массивах.

// Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими будут числа 3
// и 5, т.к.они присутствуют в обоих исходных массивах.
// А числа 0, 1 и 8 присутствуют только в одном из массивов.

// Напиши функцию getCommonElements(array1, array2) которая получает
// два массива произвольной длины в параметры array1 и array2,
// и возвращает новый массив, состоящий из тех элементов,
// которые присутствуют в обоих исходных массивах.

// const getCommonElements = (array1, array2) => {
//   const newArr = [];
//   for (let i = 0; i <= array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       newArr.push(array1[i]);
//     }
//   }
//   return newArr;
// };

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

// Задание
// Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех
// чётных чисел от start до end.Чётным считается число которое делится на 2
// без остатка.

// const getEvenNumbers = (start, end) => {
//   const valueArr = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       valueArr.push(i);
//     }
//   }
//   return valueArr;
// };

// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(7, 7));

// Задание
// Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:
// возвращала первое число от start до end, которое делится на divisor
// без остатка;
// не использовала оператор break;
// не использовала переменную number.

// const findNumber = (start, end, divisor) => {
//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
// };
// console.log(findNumber(2, 6, 5));
// console.log(findNumber(8, 17, 3));
// console.log(findNumber(6, 9, 4));
// console.log(findNumber(16, 35, 7));

// Задание
// Напиши функцию includes(array, value), которая делает тоже самое,
// что и метод массива массив.includes(значение) - проверяет, есть ли в массиве
// array значение value, возвращая true если есть и false в противном случае.

// При выполнении этой задачи в теле функции includes() нельзя использовать
// метод массив.includes(значение).

// const includes = (array, value) => {
//   for (const element of array) {
//     if (element === value) {
//       return true;
//     }
//   }
//   return false;
// };

// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(
//   includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Юпитер'),
// );
// console.log(includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Уран'));
// console.log(includes(['яблоко', 'слива', 'груша', 'апельсин'], 'слива'));
// console.log(includes(['яблоко', 'слива', 'груша', 'апельсин'], 'киви'));

// ==============================================================
// Задачи из 2 дз
// const getItemsString = array => {
//   let result = '';
//   for (let i = 0; i <= array.length - 1; i += 1) {
//     result += `${i + 1} - ${array[i]}\n`;
//   }
//   return result;
// };

// console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
// console.log(getItemsString([5, 10, 15]));

// const findLongestWord = string => {
//   const splitWords = string.split(' ');
//   let longestWord = splitWords[0];
//   for (let i = 1; i < splitWords.length; i += 1) {
//     if (splitWords[i].length > longestWord.length) {
//       longestWord = splitWords[i];
//     }
//   }
//   return longestWord;
// };

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// console.log(findLongestWord('Google do a roll'));
// console.log(findLongestWord('May the force be with you'));

// const formatString = (string, maxLength = 40) => {
//   if (string.length <= 40) {
//     return string;
//   } else {
//     return string.slice(0, maxLength) + '...';
//   }
// };
// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// console.log(
//   formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30),
// );

// const checkForSpam = str => {
//   let spam = false;
//   if (
//     str.toLowerCase().includes('spam') ||
//     str.toLowerCase().includes('sale')
//   ) {
//     spam = true;
//   }
//   return spam;
// };

// console.log(checkForSpam('Latest technology news'));
// console.log(checkForSpam('JavaScript weekly newsletter'));
// console.log(checkForSpam('Get best sale offers now!'));
// console.log(checkForSpam('[SPAM] How to earn fast money?'));

// const mapArray = array => {
//   const numbers = new Array(array.length);
//   for (let i = 0; i < array.length; i += 1) {
//     numbers[i] = array[i] * 10;
//   }
//   return numbers;
// };

// console.log(mapArray([-2, 0, 2]));
// console.log(mapArray([-2.5, 0, 2.5]));

// const filterArray = array => {
//   const numbers = [];
//   for (let i = 0; i < array.length; i += 1) {
//     if (Number.isFinite(array[i])) {
//       numbers.push(array[i]);
//     }
//   }
//   return numbers;
// };

// console.log(filterArray([-2, 0, 2]));
// console.log(filterArray([1, NaN, Infinity]));
// console.log(filterArray([0, -0, 100, '100']));
// console.log(filterArray([undefined, false, null, [], 1]));
// console.log(filterArray([{}, () => {}, 2]));

// const reduceArray = array => {
//   let total = 0;
//   if (array.length > 0) {
//     for (const number of array) {
//       total += number;
//     }
//   }
//   return total;
// };

// console.log(reduceArray([1, 2, 3]));
// console.log(reduceArray([-2, 0, 2]));
// console.log(reduceArray([1, 2, 2.5]));

// const isLoginValid = (login, min = 4, max = 16) => {
//   let isValid = false;
//   if (login.length >= min && login.length <= max) {
//     isValid = true;
//   }
//   return isValid;
// };
// const isLoginUnique = (allLogins, login) => {
//   let isUnique = true;
//   if (allLogins.includes(login)) {
//     isUnique = false;
//   }
//   return isUnique;
// };
// const addLogin = (allLogins, login) => {
//   const SUCCESS = 'Логин успешно добавлен!';
//   const REFUSAL = 'Такой логин уже используется!';
//   const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
//   let message;
//   if (isLoginValid(login) === false) {
//     message = ERROR;
//     return message;
//   }
//   if (isLoginUnique(allLogins, login) === false) {
//     message = REFUSAL;
//     return message;
//   }
//   allLogins.push(login);
//   message = SUCCESS;
//   return message;
// };
// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// console.log(addLogin(logins, 'Ajax'));
// console.log(addLogin(logins, 'robotGoogles'));
// console.log(addLogin(logins, 'Zod'));
// console.log(addLogin(logins, 'jqueryisextremelyfast'));

// ==============================================================
// Задача 12 3-го допмодуля.

// const countProps = object => {
//   let propCount = 0;
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
// propCount += 1;
//     }
//   }
//   return propCount;
// };

// console.log(countProps({}));
// console.log(countProps({ name: 'Mango', age: 2 }));
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

// // // Задача 18 3-го допмодуля.
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// const getProductPrice = productName => {
//   let result = 0;
//   const values = Object.values(products);
//   for (const value of values) {
//     if (value.name === productName) {
//       result = value.price;
//     }
//   }
//   return result;
// };

// console.log(getProductPrice('Радар'));
// console.log(getProductPrice('Захват'));
// console.log(getProductPrice('Сканер'));
// console.log(getProductPrice('Дроид'));
// console.log(getProductPrice('Двигатель'));

// // Задача 26 3-го допмодуля.
// Паттерн «Объект настроек»

// const calculateMeanTemperature = forecast => {
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//   } = forecast;
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// };

// console.log(
//   calculateMeanTemperature({
//     today: { low: 28, high: 32 },
//     tomorrow: { low: 25, high: 29 },
//   }),
// );
// console.log(
//   calculateMeanTemperature({
//     today: { low: 37, high: 40 },
//     tomorrow: { low: 33, high: 38 },
//   }),
// );

// // // Задача 30 3-го допмодуля.
// // //spred
// const makeTask = data => {
//   const completed = false;
//   const category = 'Общее';
//   const priority = 'Обычный';
//   return { category, priority, ...data, completed };
// };

// console.log(makeTask({}));
// console.log(
//   makeTask({ category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор' }),
// );
// console.log(makeTask({ category: 'Финансы', text: 'Забрать проценты' }));
// console.log(makeTask({ priority: 'Низкий', text: 'Выбрать шампунь' }));
// console.log(makeTask({ text: 'Купить хлеб' }));

// // Задача 31 3-го допмодуля.
// //Операция rest для сбора всех аргументов функции и их сумирования

// const add = (...args) => {
//   let sum = 0;
//   for (let i = 0; i < args.length; i += 1) {
//     sum += args[i];
//   }
//   return sum;
// };
// console.log(add(15, 27));
// console.log(add(12, 4, 11, 48));
// console.log(add(32, 6, 13, 19, 8));
// console.log(add(74, 11, 62, 46, 12, 36));

// //Задача 32 3-го допмодуля
// //Операция rest для сбора части аргументов функции
// const addOverNum = (firstElement, ...args) => {
//   let total = 0;
//   for (const arg of args) {
//     if (arg > firstElement) {
//       total += arg;
//     }
//   }
//   return total;
// };
// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log(addOverNum(15, 32, 6, 13, 19, 8));
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));

// //Задача 33 3-го допмодуля
// // Массив совпадений
// const findMatches = (array, ...args) => {
//   const matches = [];
//   for (const arg of args) {
//     if (array.includes(arg)) {
//       matches.push(arg);
//     }
//   }
//   return matches;
// };
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16));

// ==============================================================
