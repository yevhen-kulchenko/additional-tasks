//Допзадачи 2-го модуля

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Пиши код ниже этой строки
//   for (i = min; i <= max; i += 1) {
//     if (i >= min && i <= max) {
//       numbers.push(i);
//     }
//   }
//   // Пиши код выше этой строки
//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));

// Задание
// Напиши функцию filterArray(numbers, value), которая принимает массив
// чисел(параметр numbers) и возвращает новый массив, в котором будут
// только те элементы массива numbers, которые больше чем значение
// параметра value(число).

// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
//   let newArr = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       newArr.push(numbers[i]);
//     }
//   }
//   return newArr;

//   // Пиши код выше этой строки
// }

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

// function getCommonElements(array1, array2) {
//   // Пиши код ниже этой строки
//   const newArr = [];
//   for (i = 0; i <= array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       newArr.push(array1[i]);
//     }
//   }
//   return newArr;
//   // Пиши код выше этой строки
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

// Задание
// Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех
// чётных чисел от start до end.Чётным считается число которое делится на 2
// без остатка.
// function getEvenNumbers(start, end) {
//   // Пиши код ниже этой строки
//   const valueArr = [];
//   for (i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       valueArr.push(i);
//     }
//   }
//   return valueArr;

//   // Пиши код выше этой строки
// }

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

// function findNumber(start, end, divisor) {
//   // Пиши код ниже этой строки
//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//       break;
//     }
//   }
//   // Пиши код выше этой строки
// }
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

// function includes(array, value) {
//   // Пиши код ниже этой строки
//   //
//   // for (let i = 0; i <= array.length; i += 1) {
//   //   return array.indexOf(value) > -1;
//   // }
//   //
//   for (let element of array) {
//     if (element === value) {
//       return true;
//     }
//   }
//   return false;
//   // Пиши код выше этой строки
// }

// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(
//   includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Юпитер'),
// );
// console.log(includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Уран'));
// console.log(includes(['яблоко', 'слива', 'груша', 'апельсин'], 'слива'));
// console.log(includes(['яблоко', 'слива', 'груша', 'апельсин'], 'киви'));
