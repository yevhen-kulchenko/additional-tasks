// Задача 12 3-го допмодуля.

// function countProps(object) {
//   let propCount = 0;
//   // Пиши код ниже этой строки
//   for (key in object) {
//     if (object.hasOwnProperty(key)) {
//       // аналогично нижнему варианту
//       // propCount = Object.keys(object).length;
//       propCount += 1;
//     }
//   }
//   // Пиши выше ниже этой строки
//   return propCount;
// }

// console.log(countProps({}));
// console.log(countProps({ name: 'Mango', age: 2 }));
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

// Задача 14 3-го допмодуля.
// Рефакторинг из
// function countProps(object) {
//   // Пиши код ниже этой строки
//   let propCount = 0;

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }
//   return propCount;
//   // Пиши выше ниже этой строки
// }

// Рефакторинг В
// function countProps(object) {
//   // Пиши код ниже этой строки
//   let propCount = 0;
//   const keys = Object.keys(object);

//   for (const key of keys) {
//     propCount = Object.keys(object).length;
//   }
//   return propCount;
//   // Пиши выше ниже этой строки
// }

// console.log(countProps({}));
// console.log(countProps({ name: 'Mango', age: 2 }));
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

// // Задача 17 3-го допмодуля.
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Пиши код ниже этой строки
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

// // Задача 18 3-го допмодуля.
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Пиши код ниже этой строки
//   let result = null;
//   const values = Object.values(products);
//   for (const value of values) {
//     if (value.name === productName) {
//       result = value.price;
//     }
//   }
//   return result;
//   // Пиши код выше этой строки
// }

// console.log(getProductPrice('Радар'));
// console.log(getProductPrice('Захват'));
// console.log(getProductPrice('Сканер'));
// console.log(getProductPrice('Дроид'));
// console.log(getProductPrice('Двигатель'));

// // Задача 19 3-го допмодуля.
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Пиши код ниже этой строки
//   let result = [];
//   const values = Object.values(products);
//   for (const value of values) {
//     if (propName in value) {
//       result.push(value[propName]);
//     }
//   }
//   return result;
//   // Пиши код выше этой строки
// }

// console.log(getAllPropValues('name'));
// console.log(getAllPropValues('quantity'));
// console.log(getAllPropValues('price'));

// // Задача 19 3-го допмодуля.
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   let totalPrice = 0;
//   const values = Object.values(products);
//   for (const value of values) {
//     if (value.name === productName) {
//       totalPrice += value.price * value.quantity;
//     }
//   }
//   return totalPrice;
//   // Пиши код выше этой строки
// }
// console.log(calculateTotalPrice('Бластер'));
// console.log(calculateTotalPrice('Радар'));
// console.log(calculateTotalPrice('Дроид'));
// console.log(calculateTotalPrice('Захват'));
// console.log(calculateTotalPrice('Сканер'));

// // Задача 25 3-го допмодуля.
// // глубокая деструктуризация
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Пиши код ниже этой строки
// // до деструктуризации
// const highToday = forecast.today.high;
// const lowToday = forecast.today.low;
// const todayIcon = forecast.today.icon;

// const highTomorrow = forecast.tomorrow.high;
// const lowTomorrow = forecast.tomorrow.low;
// const tomorrowIcon = forecast.tomorrow.icon;

// // после деструктуризации
// const {
//   today: {
//     high: highToday,
//     low: lowToday,
//     icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
//   tomorrow: {
//     high: highTomorrow,
//     low: lowTomorrow,
//     icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
// } = forecast;

// // Задача 26 3-го допмодуля.
// Паттерн «Объект настроек»

// // Пиши код ниже этой строки
// function calculateMeanTemperature(forecast) {
//   // // до деструктуризации
//   // const todayLow = forecast.today.low;
//   // const todayHigh = forecast.today.high;
//   // const tomorrowLow = forecast.tomorrow.low;
//   // const tomorrowHigh = forecast.tomorrow.high;

//   // после деструктуризации
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//   } = forecast;

//   // Пиши код выше этой строки
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

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

// // Задача 30 3-го допмодуля.
// //spred
// function makeTask(data) {
//   const completed = false;
//   const category = 'Общее';
//   const priority = 'Обычный';
//   // Пиши код ниже этой строки
//   return { category, priority, ...data, completed };
//   // Пиши код выше этой строки
// }

// console.log(makeTask({}));
// console.log(
//   makeTask({ category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор' }),
// );
// console.log(makeTask({ category: 'Финансы', text: 'Забрать проценты' }));
// console.log(makeTask({ priority: 'Низкий', text: 'Выбрать шампунь' }));
// console.log(makeTask({ text: 'Купить хлеб' }));

// // Задача 31 3-го допмодуля.
// //Операция rest для сбора всех аргументов функции и их сумирования

// // Пиши код ниже этой строки
// function add(...args) {
//   let sum = 0;
//   for (let i = 0; i < args.length; i += 1) {
//     sum += args[i];
//   }
//   return sum;
//   // Пиши код выше этой строки
// }
// console.log(add(15, 27));
// console.log(add(12, 4, 11, 48));
// console.log(add(32, 6, 13, 19, 8));
// console.log(add(74, 11, 62, 46, 12, 36));

// //Задача 32 3-го допмодуля
// //Операция rest для сбора части аргументов функции
// // Пиши код ниже этой строки
// function addOverNum(firstElement, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > firstElement) {
//       total += arg;
//     }
//   }

//   return total;
//   // Пиши код выше этой строки
// }
// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log(addOverNum(15, 32, 6, 13, 19, 8));
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));

// //Задача 33 3-го допмодуля
// // Массив совпадений

// // Пиши код ниже этой строки
// function findMatches(array, ...args) {
//   const matches = []; // Не изменяй эту строку

//   for (const arg of args) {
//     if (array.includes(arg)) {
//       matches.push(arg);
//     }
//   }
//   return matches;
//   // Пиши код выше этой строки
// }
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16));

// Задача 34 3-го допмодуля
// Методы объекта. Добовляем методы и подставляем новые значения

// const bookShelf = {
//   // Пиши код ниже этой строки
//   books: ['Последнее королевство', 'Страж снов'],
//   getBooks() {
//     return 'Возвращаем все книги';
//   },
//   addBook(bookName) {
//     return `Добавляем книгу ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Удаляем книгу ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Обновляем книгу ${oldName} на ${newName}`;
//   },
//   // Пиши код выше этой строки
// };

// console.log(bookShelf.getBooks());
// console.log(bookShelf.addBook('Мгла'));
// console.log(bookShelf.removeBook('Красный закат'));
// console.log(bookShelf.updateBook('Пески Дюны', 'Дюна'));

// // Задача 35 3-го допмодуля
// // Доступ к свойствам объекта в его методах
// // замена щбъекта по его индексу
// const bookShelf = {
//   books: ['Последнее королевство', 'Мгла', 'Страж снов'],
//   updateBook(oldName, newName) {
//     // Пиши код ниже этой строки
//     const bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1, newName);
//     // Пиши код выше этой строки
//   },
// };
// // bookShelf.updateBook('Мгла', 'Хроники подземелий');
// // bookShelf.updateBook('Последнее королевство', 'Дюна');

// // console.log(bookShelf);

//  Методы объекта
// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   addPotion(potionName) {
//     // Пиши код ниже этой строки
//     this.potions.push(potionName);
//     // Пиши код выше этой строки
//   },

//   removePotion(potionName) {
//     // Пиши код ниже этой строки
//     const potionsIndex = this.potions.indexOf(potionName);
//     this.potions.splice(potionsIndex, 1);
//     // Пиши код выше этой строки
//   },

//   updatePotionName(oldName, newName) {
//     // Пиши код ниже этой строки
//     const potionsIndex = this.potions.indexOf(oldName);
//     this.potions.splice(potionsIndex, 1, newName);
//     // Пиши код выше этой строки
//   },
// };

// // Задача 41 3-го допмодуля
// // Рефакторинг метоедов объекта с перебором массива объектв
// const atTheOldToad = {
//   potions: [
//     { name: 'Зелье скорости', price: 460 },
//     { name: 'Дыхание дракона', price: 780 },
//     { name: 'Каменная кожа', price: 520 },
//   ],
//   // Пиши код ниже этой строки
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     // до рефакторинга
//     // if (this.potions.includes(potionName)) {
//     //   return `Зелье ${potionName} уже есть в инвентаре!`;
//     // }
//     // this.potions.push(potionName);

//     // после рефакторинга
//     for (const potion of this.potions) {
//       if (potion.name === potionName) {
//         break;
//       }
//     }
//     this.potions.push(potionName);
//   },
//   removePotion(potionName) {
//     // до рефакторинга
//     // const potionIndex = this.potions.indexOf(potionName);
//     // if (potionIndex === -1) {
//     //   return `Зелья ${potionName} нет в инвентаре!`;
//     // }
//     // this.potions.splice(potionIndex, 1);

//     // после рефакторинга
//     for (let i = 0; i < this.potions.length; i += 1) {
//       const potion = this.potions[i];
//       if (potionName === potion.name) {
//         this.potions.splice(i, 1);
//       }
//     }
//   },

//   updatePotionName(oldName, newName) {
//     // до рефакторинга
//     // const potionIndex = this.potions.indexOf(oldName);
//     // if (potionIndex === -1) {
//     //   return `Зелья ${oldName} нет в инвентаре!`;
//     // }
//     // this.potions.splice(potionIndex, 1, newName);

//     // после рефакторинга
//     for (const potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//       }
//     }
//     return this.potions;
//   },
//   // Пиши код выше этой строки
// };
