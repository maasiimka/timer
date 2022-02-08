console.log("HELLO SCRIPT");

// 1
// const employees = 9;
// const max = 5000;
// const min = 500;
// let sum = 0;

// for(let i = 0; i <= employees; i += 1 ){
//     const sallary = Math.round(Math.random() * (max - min) + min);
//     sum +=  sallary;
//     console.log(sallary);
// }
// console.log(sum);

// 2
// let mini = 0;
// const maxi = 12;
// let sumOfNumbers = 0

// for(mini; mini <= maxi; mini += 1){
//     if(mini % 2 === 0){
//         console.log(mini);
//         sumOfNumbers += mini
//     }else{
//         continue;
//     }
// }
// console.log(sumOfNumbers);

// 3
// let balance = 10000;
// const payment = 2000;

// console.log(`Загальна вартість ${payment}грн. Перевіряємо баланс`)

// payment <= balance ?
//  console.log(`На балансі ${balance - payment} грн`) :
//  console.log('Мало грошей, іди нахрін');

// if(payment <= balance){
//     balance -= payment;
//     console.log(`На балансі ${balance} грн`);
// }else{
//     console.log('Мало грошей, іди нахрін');
// }
// console.log('Операція завершена');

// const totalSpent = 10000;
// let payment = 500;
// let discount = 0;
// let discountText = 'Not a partner. Discount - 0% ';

// if(totalSpent >= 100 && totalSpent < 1000){
//     discount = .02;
//     discountText = `Bronze partner. Discount - ${discount * 100}% `;
// }else if(totalSpent >= 1000 && totalSpent < 5000){
//     discount = .05;
//     discountText = `Silver partner. Discount - ${discount * 100}% `;
// }else if(totalSpent >= 5000){
//     discount = .1;
//     discountText = `Golden partner. Discount - ${discount * 100}% `;
// }
// console.log(discountText);
// console.log(`The payment is ${payment - (payment * discount)}`);

// const massive = ['Max', 'Anya', 'Chicken', 'Tank'];
// console.table(massive);

// const cart = [54 ,28, 105, 70, 92, 17, 120];

// let sum = 0;
// for(const item of cart){
//     sum += item;
// }
// console.log(sum);

// const numbers = [21, 43, 5438, 32, 53, 34, 65, 266, 374, 34, 4];
// let sum = 0;

// for(let i = 0; i < numbers.length; i += 1){
//         if(numbers[i] % 2 === 0){
//         sum += numbers[i];
//     }
// }

// for(const number of numbers){
//         if(number % 2 === 0){
//         sum += number;
//     }
// }
// console.log(sum);

// const logins = ['Max', 'Anya', 'Chicken', 'Tank'];
// const loginToFind = 'Tank';
// // let message = `User ${loginToFind} not found`;

// // for(let login of logins){

//     if(login === loginToFind){
//         message = `User ${loginToFind} found`;
//         break;
//     }
// }

// let message = '';
// message = logins.includes(loginToFind)
// ? `User ${loginToFind} found`
// : `User ${loginToFind} not found`;

// console.log(message);

// const numbers = [21, 43, 52, 20, 32, 53, 34, 6, 5, 266, 374, 34];
// let smallest = numbers[0];

//  for(let number of numbers){
//     if(number < smallest){
//         smallest = number;
//     }
//  }
//  console.log(smallest);

// string.slice(а, b) вирізати кусочок від а до кінця, або від а до б;
// array.join('---') з'єднати масив в строку
// ( в дужках стоїть з'єднувальний елемент);
// array1.concat(array2) приєднати до першого масиву другий;
// array.indexOf('el') знайти індекс елемента;
// array.splice(index, n) видаляє n елементів починаючи з index;
// array.splice(index, 0, el1, el2,...) якщо вказати 0 на місці n додає
// вказані елементи (el1, el2,...) по індексу;
// array.splice(index, n, el1,...) заміна n елементів на вказані елементи;

// const string = 'JavaScript';
// const stringMassive = string.split('')

// for(let i = 0; i < stringMassive.length; i += 1){
//     if(stringMassive[i] !== stringMassive[i].toUpperCase()){
//         stringMassive[i] = stringMassive[i].toUpperCase();
//     }else{
//         stringMassive[i] = stringMassive[i].toLowerCase();
//     }
// }

// const transformedString = stringMassive.join('');

// console.log(transformedString);

// const filterNumbers = (arr, ...arr2) => {
//     let inFirstAndSecond = [];

//     for(let element of arr){
//         if(arr2.includes(element)){
//             inFirstAndSecond.push(element);
//             console.log(element);
//         }
//     }

//     return inFirstAndSecond;
// }

// console.log(filterNumbers([1, 4, 6, 7, 8, 35, 9], 7, 2, 4, 87, 35, 1));
// console.log(filterNumbers([1, 2, 4, 5], 1, 2, 3, 4));

// const cart = {
//     items: [],

//     getItems() {
//         const {items} = this;
//         return items;
//     },

//     add(product) {
//         const {price} = product;
//         const {items} = this;
//         // let i = 0; i < items.length; i += 1
//         for(const {name} of items){
//             if(product.name === name){
//                 this.increaseQuantity(name);
//                 return;
//             }
//         }

//         const obj = {
//             ...product,
//             cart: 1,
//             priceForOne: price,
//         }

//         items.push(obj);

//     },

//     remove(item) {
//         const {items} = this;

//         const index = items.indexOf(item);
//         items.splice(index, 1);
//     },

//     clear() {
//         this.items = [];
//     },

//     countTotalPrice(totalPrice = 0) {
//         const {items} = this;

//         for(const {price} of items){
//             totalPrice += price;
//         }
//         return totalPrice;
//     },

//     increaseQuantity(item) {
//         const {items} = this;

//         for(let i = 0; i < items.length ; i += 1 ){
//             if(item === items[i].name){
//                 items[i].cart += 1;
//                 items[i].price = items[i].priceForOne * items[i].cart;
//             }
//         }
//     },

// // В ФУНКЦІЯХ increaseQuantity ТА decreaseQuantity НЕ МОЖНА ЗАСТОСУВАТИ
// //  FOR OF І ДЕСТРУКТИЗУВАТИ ЗМІННІ , ТОМУ ЩО ЗМІННІ cart I price МАЮТЬ
// //  ЗМІНИТИ СВОЄ ЗНАЧЕННЯ ЩО НЕМОЖЛИВО ЧЕРЕЗ for of

//     decreaseQuantity(item) {
//         const {items} = this;

//         for(let i = 0; i < items.length; i += 1){
//             if(item === items[i].name && items[i].cart > 1){
//                 items[i].cart -= 1;
//                 items[i].price = items[i].priceForOne * items[i].cart;
//             }
//         }
//     },
// }

// cart.add({name: 'apple', price: 50});

// cart.remove('apple');
// console.log(cart.getItems());

// cart.add({name: 'lemon', price: 30});
// cart.add({name: 'lemon', price: 30});
// cart.add({name: 'lemon', price: 30});
// cart.add({name: 'lemon', price: 30});
// cart.add({name: 'tomato', price: 70});
// cart.add({name: 'avocado', price: 150});

// cart.increaseQuantity('lemon');
// cart.increaseQuantity('lemon');
// cart.decreaseQuantity('lemon');
// cart.decreaseQuantity('tomato');
// cart.decreaseQuantity('tomato');
// cart.increaseQuantity('avocado');
// cart.increaseQuantity('lemon');

// console.table(cart.getItems());
// console.log(cart.countTotalPrice());

// const Snake = function({specie, name, length} = {}){
//     this.specie = specie;
//     this.name = name;
//     this.length = length;
// }

// Snake.prototype.changeLength = function(newLength){
//     this.length = newLength;
// }

// const anaconda = new Snake({specie: 'anaconda', name: 'alice', length: 2.3});
// console.log(anaconda);
// anaconda.changeLength(2.5);
// console.log(anaconda);

// const python = new Snake({specie: 'python', name: 'ben', length: 3.15});
// console.log(python);
// python.changeLength(3.25);
// console.log(python);

// class Storage {
//     constructor(items = []) {
//         this.items = items;
//     }

//     getItems() {
//         return this.items;
//     }

//     addItem(item) {
//         this.items.push(item);
//         return this.items
//     }

//     removeItem(item){
//         const index = this.items.indexOf(item);
//         this.items.splice(index, 1);
//         return this.items;
//     }
// }

// const mango = new Storage(['apple', 'lemon', 'banana', 'mayo']);
// console.log(mango.getItems());
// console.log(mango.addItem('tomato'));
// console.log(mango.removeItem('mayo'));
// console.log(mango);

// class User {
//     #login;
//     #email;
//     constructor({login, email} = {}) {
//         this.#login = login;
//         this.#email = email;
//     }

//     set login(login) {
//         this.#login = login;
//     }

//     set email(email) {
//         this.#email = email;
//     }

//     get login() {
//         return this.#login;
//     }

//     get email() {
//         return this.#email;
//     }
// }

// const max = new User({
//     login:'alala',
//     email:'alala@ala.com',
// });
// console.log(max);
// max.email = 'fsa@sass';
// max.login = 'degfd';
// console.log(max.email);
// console.log(max.login);
// console.log(max);

// function solution(string) {
//     const arr = string.split('');

//     for(let i = 0; i <= arr.length - 1; i += 1){
//       if(arr[i] === arr[i].toUpperCase()){
//         arr.splice(i, 0, ' ');
//         i += 1;
//       }
//     }

//     return arr.join('');
//   }

// console.log(solution('superCamelCase'));

// function tribonacci(signature,n){
//     let arr = [];
//     if(n === 1){
//       arr = [1];
//     }else if(n > 1){
//       arr = [...signature];
//       for(let i = 0; i <= n - 4; i += 1){
//         const next = signature.reduce((acc, n) => acc + n, 0)
//         signature.shift();
//         signature.push(next);
//         arr.push(next);
//       }
//     }
//       return arr;
//     }

//   tribonacci([0, 1, 1], 1);

// function duplicateCount(text){
//     const arr = text.toLowerCase().split('');
//     console . log(arr);
//     const obj = arr.reduce((acc, el) =>
//     ({...acc,[el]:  acc[el] ? acc[el] + 1 :  1, }), {});
//     console.log(obj);
//     const valuesArr = Object.values(obj);
//     console.log(valuesArr);
//     return valuesArr.filter(el => el > 1).length;

//   }

// //   const duplicateCount = (text) =>

// //   Object.values
// //   (text.toLowerCase()
// //   .split('')
// //   .reduce((acc, el) =>
// //   ({...acc,[el]:  acc[el] ? acc[el] + 1 :  1, }), {}))
// //   .filter(el => el > 1)
// //   .length;

//   console.log(duplicateCount('cdvtidjdjdjjrrfgjytttttjjjjsxsjjdJJ'));

// let sum = 0;
// for(let i = 0; i > -1; i += 1){
//     let input = prompt(`Введіть число. Зараз сума дорівнює ${sum}`);
//     if(input === null){
//         break;
//     }
//     sum += Number(input);
// }

// alert(`Cума дорівнює ${sum}`)

// const deliver = (country) => {
//     switch (country.toLowerCase()){
//         case 'china':
//         console.log(`Доставка в China будет стоить 100 гривень`);
//         break;
//         case 'chili':
//         console.log(`Доставка в Chili будет стоить 250 гривень`);
//         break;
//         case 'australia':
//         console.log(`Доставка в Australia будет стоить 170 гривень`);
//         break;
//         case 'india':
//         console.log(`Доставка в India будет стоить 80 гривень`);
//         break;
//         case 'jamaika':
//         console.log(`Доставка в Jamaika будет стоить 120 гривень`);
//         break;
//         default: console.log('Доставки в цю країну немає');
//     }
// }

// deliver('China');
// deliver('Dakar');

// const formatString = (str) =>
//     str.length <= 40
//     ? str
//     : str.slice(0, 41) + '...';

// console.log(formatString('sdfghjngbfvdcfghjmhngbfvddfgbhngfvhytgww'));

// const checkForSpam = (arg) =>
// arg.toLowerCase().includes('spam')
// || arg.toLowerCase().includes('sale');

// console.log(checkForSpam('span SpAm or cc'));
// console.log(checkForSpam('span SALE or cc'));
// console.log(checkForSpam('span or cc'));

// let arr = [];
// for(let i = 0; i > -1; i += 1){
//     let input = prompt(`Введіть число. Зараз сума дорівнює ${arr}`);
//     if(input === null){
//         break;
//     }
//     arr.push(Number(input));
// }

// console.log(arr.reduce((acc, el) => acc + el, 0));
// alert(`Cума дорівнює ${arr}`)

// const allLogins = ['pomidor220', 'user', 'login', 'acdc', 'abcd']

// const isLoginValid = (login) => login.length > 4 && login.length < 16;

// const isLoginUnique = (allLogins, login) => !allLogins.includes(login);

// const addLogin = (allLogins, login) => {

//     if(!isLoginValid(login)){
//         return `login "${login}" is not valid`;
//     }else if(!isLoginUnique(allLogins, login)){
//         return `login "${login}" is in register`;
//     }

//     allLogins.push(login);
//     return allLogins;
// }

// console.log(addLogin(allLogins, 'login'));
// console.log(addLogin(allLogins, 'log'));
// console.log(addLogin(allLogins, 'logan'));
// console.log(addLogin(allLogins, 'logfgeghfjhkgjuuyfydfs'));

// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
//   };

//   user.mood = 'happy';
//   user.hobby = 'skydiving';
//   user.premium =true;

//   for(let el of Object.keys(user)){
//     console.log(`${el} is ${user[el]}`);
//   }
//   console.log(user);

// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
//     a : 'b',
//   };

// const countProps = (obj) => Object.keys(obj).length;
// console.log(countProps(user));

// const findBestEmployee = (employees) => {
//     const listOfEmloyees = Object.keys(employees);
//     let theMostProductive = listOfEmloyees[0];
//     for(let el of listOfEmloyees){
//         if(employees[el] > employees[theMostProductive]){
//             theMostProductive = el;
//         }
//     }
//     return theMostProductive;
// }

// console.log(
//     findBestEmployee({
//       ann: 29,
//       david: 35,
//       helen: 1,
//       lorence: 99,
//     }),
//   ); // lorence

//   console.log(
//     findBestEmployee({
//       poly: 12,
//       mango: 17,
//       ajax: 4,
//     }),
//   ); // mango

//   console.log(
//     findBestEmployee({
//       lux: 147,
//       david: 21,
//       kiwi: 19,
//       chelsy: 38,
//     }),
//   ); // lux

// const countTotalSalary = (employees) =>
//     Object.values(employees).
//     reduce((total, salary) => total + salary, 0);

// console.log(
//     countTotalSalary({
//       mango: 100,
//       poly: 150,
//       alfred: 80,
//     }),
//   ); // 330

//   console.log(
//     countTotalSalary({
//       kiwi: 200,
//       lux: 50,
//       chelsy: 150,
//     }),
//   ); // 400

// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 2 },
//   ];

// const getAllPropValues = (arr, prop) =>
//     arr.map((el) => el[prop]).filter((el) => el !== undefined);

// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, 'category')); // []

// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроид', price: 400, quantity: 7 },
//     { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const calculateTotalPrice = (allProdcuts, productName) => {
//     const obj = allProdcuts.find((el) => el.name === productName);
//     return obj.price * obj.quantity;
// };

// console.log(calculateTotalPrice(products, 'Радар')); // 5200

// console.log(calculateTotalPrice(products, 'Дроид')); // 2800

// const Transaction = {
//     DEPOSIT: 'deposit',
//     WITHDRAW: 'withdraw',
//   };

//   const account = {
//     balance: 0,
//     transactions: [],
//     id : 0,

//     createTransaction(successful ,amount, type) {
//         this.id += 1;
//         const transaction = {
//             id : this.id,
//             successful,
//             amount,
//             type,
//         }
//         return transaction
//     },

//     deposit(amount) {
//         this.balance += amount;
//         const operation = this.createTransaction(true, amount, 'deposit');
//         this.transactions.push(operation);
//         return operation;
//     },

//     withdraw(amount) {
//         let successful;
//         if(this.balance > amount){
//             this.balance -= amount;
//             successful = true;
//         }else{
//             successful = false;
//         }
//         const operation = this.createTransaction(successful, amount, 'withdraw');
//         this.transactions.push(operation);
//         return operation;
//     },

//     getBalance() {
//         return this.balance;
//     },

//     getTransactionDetails(id) {
//         return this.transactions.find((el) => id === el.id)
//     },

//     getTransactionTotal(type) {
//         return this.transactions
//         .filter((el) => type === el.type && el.successful === true)
//         .reduce((total, el) => total + el.amount, 0)
//     },
//   };

// console.log(account.createTransaction(true, 400, 'deposit'));
// console.log(account.deposit(200));
// console.log(account.deposit(1000));
// console.log(account.deposit(500));
// console.log(account.getBalance());
// console.log(account.withdraw(275));
// console.log(account.withdraw(355));
// console.log(account.withdraw(6000));
// console.log(account.getBalance());
// console.log(account.getTransactionDetails(4));
// console.log(account.getTransactionTotal('withdraw'));
// console.log(account.getTransactionTotal('deposit'));

// const inventory = {
//     items: ['Knife', 'Gas mask'],
//     add(itemName) {
//       console.log(`Adding ${itemName} to inventory`);

//       this.items.push(itemName);
//     },
//     remove(itemName) {
//       console.log(`Removing ${itemName} from inventory`);

//       this.items = this.items.filter(item => item !== itemName);
//     },
//   };

//   const invokeInventoryAction = function(itemName, action) {
//     console.log(`Invoking action on ${itemName}`);
//     action(itemName);
//   };

//   invokeInventoryAction('Medkit', inventory.add.bind(inventory));
//   // Invoking action on Medkit
//   // Adding Medkit to inventory

//   console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

//   invokeInventoryAction('Gas mask', inventory.remove.bind(inventory));
//   // Invoking action on Gas mask
//   // Removing Gas mask from inventory

//   console.log(inventory.items); // ['Knife', 'Medkit']

// const Account = function({login, email} = {}){
//     login;
//     email;

//     Account.prototype.getInfo = function(){
//         console.log(`Login: ${login}, Email: ${email}`);
//     };
// }
// console.log(Account.prototype.getInfo); // function

// const mango = new Account({
//   login: 'Mangozedog',
//   email: 'mango@dog.woof',
// });

// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// poly.getInfo(); // Login: Poly, Email: poly@mail.com

// const User = function({name, age, followers} = {}){
//     name;
//     age;
//     followers;

//     User.prototype.getInfo = function(){
//         console.log(`User ${name} is ${age} years old and has ${followers} followers`);
//     }
// }

// const mango = new User({
//     name: 'Mango',
//     age: 2,
//     followers: 20,
//   });

//   mango.getInfo(); // User Mango is 2 years old and has 20 followers

//   const poly = new User({
//     name: 'Poly',
//     age: 3,
//     followers: 17,
//   });

//   poly.getInfo(); // User Poly is 3 years old and has 17 followers

// const Storage = function(arr){
//     let{items} = this;
//     items = arr;

//     Storage.prototype.getItems = function(){
//         return items;
//     }

//     Storage.prototype.addItem = function(item){
//         items.push(item);
//         return items;
//     }

//     Storage.prototype.removeItem = function(item){
//         items.splice(items.indexOf(item), 1);
//         return items;
//     }
// }

// const storage = new Storage([
//     'Нанитоиды',
//     'Пролонгер',
//     'Железные жупи',
//     'Антигравитатор',
//   ]);

//   console.log(storage);

//   const items = storage.getItems();
//   console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

//   storage.addItem('Дроид');
//   console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

//   storage.removeItem('Пролонгер');
//   console.table(items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

// class StringBuilder{
//     #value;
//     constructor (str =''){
//         this.#value = str;
//     }

//     get value(){
//         return this.#value;
//     }

//     append(str){
//         this.#value = this.#value + str;
//     }

//     prepend(str){
//         this.#value = str + this.#value;
//     }

//     pad(str){
//         this.#value = str + this.#value + str;
//     }
// }

// const builder = new StringBuilder('.');

// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='

// class Car {
//     /*
//      * Добавь статический метод `getSpecs(car)`,
//      * который принимает объект-машину как параметр и выводит
//      * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
//      */
//     static getSpecs({maxSpeed, speed, isOn, distance, price} = {}) {
//         console.log(`maxSpeed:${maxSpeed} speed:${speed} isOn:${isOn} distance:${distance} price:${price}`);
//     }

//     /*
//      * Конструктор получает объект настроек.
//      *
//      * Добавь свойства будущеего экземпляра класса:
//      *  speed - текущая скорость, изначально 0
//      *  price - цена автомобиля
//      *  maxSpeed - максимальная скорость
//      *  isOn - заведен ли автомобиль, значения true или false. Изначально false
//      *  distance - общий киллометраж, изначально 0
//      */
//     constructor({maxSpeed, price} = {}) {
//         this.maxSpeed = maxSpeed;
//         this.speed = 0;
//         this.isOn = false;
//         this.distance = 0;
//         this.price = price;
//     }

//     /*
//      * Добавь геттер и сеттер для свойства price,
//      * который будет работать с свойством цены автомобиля.
//      */
//     get price() {
//          return Car.price;
//      }

//      set price(price) {
//         Car.price = price;
//      }

//     /*
//      * Добавь код для того чтобы завести автомобиль
//      * Записывает в свойство isOn значение true
//      */
//     turnOn() {
//         this.isOn = true;
//     }

//     /*
//      * Добавь код для того чтобы заглушить автомобиль
//      * Записывает в свойство isOn значение false,
//      * и сбрасывает текущую скорость в 0
//      */
//     turnOff() {
//         this.isOn = false;
//     }

//     /*
//      * Добавялет к свойству speed полученное значение,
//      * при условии что результирующая скорость
//      * не больше чем значение свойства maxSpeed
//      */
//     accelerate(value) {
//         if(this.speed + value <= this.maxSpeed){
//             this.speed += value;
//         }
//     }

//     /*
//      * Отнимает от свойства speed полученное значение,
//      * при условии что результирующая скорость не меньше нуля
//      */
//     decelerate(value) {
//         if(this.speed - value >= 0){
//             this.speed -= value;
//         }
//     }

//     /*
//      * Добавляет в поле distance киллометраж (hours * speed),
//      * но только в том случае если машина заведена!
//      */
//     drive(hours) {
//         if(this.isOn){
//             this.distance += this.speed * hours;
//         }
//     }
//   }

//   const mustang = new Car({ maxSpeed: 200, price: 2000 });

//   mustang.turnOn();
//   mustang.accelerate(50);
//   mustang.drive(2);

//   Car.getSpecs(mustang);
//   // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

//   mustang.decelerate(20);
//   mustang.drive(1);
//   mustang.turnOff();

//   Car.getSpecs(mustang);
//   // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

//   console.log(mustang.price); // 2000
//   mustang.price = 4000;
//   console.log(mustang.price); // 4000

// const users = [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head'];

// const getUserNames = users => users.map((a) => a);
// console.log(getUserNames(users));

// const users = [{name: 'Moore Hensley', eyeColor: 'blue',},
// {name: 'Sharlene Bush', eyeColor: 'brown',},
// {name: 'Ross Vazquez', eyeColor: 'green',},
// {name: 'Elma Head', eyeColor: 'blue',}]

// const getUsersWithEyeColor = (users, color) =>
// users.filter((el) => el.eyeColor === color);

//   console.log(getUsersWithEyeColor(users, 'blue'));

// const users = [{name: 'Moore Hensley', gender: 'female',},
// {name: 'Sharlene Bush', gender: 'male',},
// {name: 'Ross Vazquez', gender: 'female',},
// {name: 'Elma Head', gender: 'male',}]

// const getUsersWithGender = (users, gender) =>
// users.filter((el) => el.gender === gender);

// console.log(getUsersWithGender(users, 'male'));
// console.log(getUsersWithGender(users, 'female'));

// const users = [{name: 'Moore Hensley', isActive: true,},
// {name: 'Sharlene Bush', isActive: false,},
// {name: 'Ross Vazquez', isActive: false,},
// {name: 'Elma Head', isActive: false,}]

// const getInactiveUsers = users =>
// users.filter((el) => !el.isActive)

// console.log(getInactiveUsers(users));

// const users = [{name: 'Moore Hensley', email: 'dfergd@max.com',},
// {name: 'Sharlene Bush', email: 'shereeanthony@kog.com',},
// {name: 'Ross Vazquez', email: 'sfdg@gbfd.com',},
// {name: 'Elma Head', email: 'elmahead@omatom.com',}]

// const getUserWithEmail = (users, email) =>
// users.find((el) => el.email === email).name;

// console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
// console.log(getUserWithEmail(users, 'elmahead@omatom.com'));

// const users = [{name: 'Moore Hensley', age: 18,},
// {name: 'Sharlene Bush', age: 30,},
// {name: 'Ross Vazquez', age: 38,},
// {name: 'Elma Head', age: 28,}]

// const getUsersWithAge = (users, min, max) =>
// users.filter((el) => el.age >= min && el.age <= max);

// console.log(getUsersWithAge(users, 20, 30));
// console.log(getUsersWithAge(users, 30, 40));

// const users = [{name: 'Moore Hensley', balance: 18606,},
// {name: 'Sharlene Bush', balance: 3000,},
// {name: 'Ross Vazquez', balance: 3280,},
// {name: 'Elma Head', balance: 2800,}]

// const calculateTotalBalance = users =>
// users.reduce((total, el) => total + el.balance, 0)

// console.log(calculateTotalBalance(users));

// const users = [{name: 'Moore Hensley', friend: 'Briana Decker',},
// {name: 'Sharlene Bush', friend: 'Goldie Gentry',},
// {name: 'Ross Vazquez', friend: 'Goldie Gentry',},
// {name: 'Elma Head', friend: 'Briana Decker',}]

// const getUsersWithFriend = (users, friendName) =>
// users.filter((el) => el.friend === friendName)
// .map((el) => el.name);

// console.log(getUsersWithFriend(users, 'Briana Decker'));
// console.log(getUsersWithFriend(users, 'Goldie Gentry'));

// const users = [{name: 'Moore Hensley', friendCount: 1,},
// {name: 'Sharlene Bush', friendCount: 5,},
// {name: 'Ross Vazquez', friendCount: 3,},
// {name: 'Elma Head', friendCount: 8,}]

// const getNamesSortedByFriendsCount = users =>
// users.sort((a, b) => b.friendCount - a.friendCount)
// .map((el) => el.name);

// console.log(getNamesSortedByFriendsCount(users));

// const users = [{name: 'Moore Hensley', skills: 'swimming',},
// {name: 'Sharlene Bush', skills: 'acrobating',},
// {name: 'Ross Vazquez', skills: 'dancing',},
// {name: 'Sharlene Bush', skills: 'swimming',},
// {name: 'Ross Vazquez', skills: 'skiing',},
// {name: 'Elma Head', skills: 'singing',}]

// const getSortedUniqueSkills = users =>{
// const arrOfSkills = users.reduce((acc, el) => {
//     if(!acc.includes(el.skills)){
//         acc = [...acc, el.skills];
//     }
//     return acc;
// }, [])

// return arrOfSkills.sort();
// }

//   console.log(getSortedUniqueSkills(users));

// const button1 = document.querySelector('.button1');
// button1.style.backgroundColor = 'teal';

// const button2 = document.querySelector('.click-button2');
// button2.textContent = 'dont CLIcK';

// const button3 = document.querySelector('.click-button3');
// button3.style.padding = '100px';

// const element = document.querySelector('#button');
// console.log(element.classList);

// element.classList.remove('ok');
// console.log(element.classList);

// element.classList.add('no');
// console.log(element.classList);

// element.classList.replace('but', 'yes');
// console.log(element.classList);

// element.classList.toggle('click');
// element.classList.toggle('yezz');
// console.log(element.classList);

// const button5 = document.querySelector('.click-button5');
// console.log(button5.attributes);

// console.log(button5.hasAttribute('class'));

// console.log(button5.getAttribute('style'));

// button5.setAttribute('class', 'shit');
// console.log(button5.getAttribute('class'));

// button5.removeAttribute('style');

// const button51 = document.querySelector('.click-button5[data-button = number6]')
// button51.style.backgroundColor = 'tomato';

// const button7 = document.createElement('button');
// button7.setAttribute('type', 'button')
// button7.textContent = 'click';
// button7.style.backgroundColor = 'blue';
// button7.style.color = 'white';

// const parent = document.querySelector('.parent-container');
// parent.appendChild(button7);

// button5.remove();

// const parent2 = parent.cloneNode(true);
// parent.after(parent2);

// parent2.insertAdjacentHTML('afterbegin', '<button type = "button" style = "margin: 20px; padding: 30px">click</button>');

// const c = (parent, element) => {
//     if(element.style.backgroundColor === 'red'){
//         element.style.backgroundColor = 'white';
//     }else{
//         element.style.backgroundColor = 'red';
//     }
// }
// button1.addEventListener('click', c.bind(button1, parent2, button3));

// const form = document.querySelector('.form');
// const loginInput = document.querySelector('input[type = "text"]');
// const passwordInput = document.querySelector('input[type = "password"]');

// const handleSubmit = (event) => {
//     event.preventDefault();

//     const login = loginInput.value.trim();
//     const password = passwordInput.value.trim();

//     if(login === '' || password === ''){
//         return alert('login or password is not valid');
//     }

//     form.reset();

//     alert(`
//         Thanks for registration
//         login : ${login}
//         password: ${password}
//         `);
// }

// form.addEventListener('submit', handleSubmit);

// const list = document.querySelectorAll('#categories > li');
// console.log(list.length);

// const itemHeader = document.querySelectorAll('.item > h2');

// itemHeader.forEach(element => {
//     console.log(`Category: ${element.textContent}`);
//     let itemsOfItem = element.nextElementSibling.children;
//     console.log(`Amount: ${itemsOfItem.length}`);
// });

// const ingredients = [
//     'Картошка',
//     'Грибы',
//     'Чеснок',
//     'Помидоры',
//     'Зелень',
//     'Приправы',
//   ];

// const listOfIngridients = document.querySelector('#ingredients')
// const listToCreate = [];

// ingredients.forEach(element => {
//     let item = document.createElement('li');
//     item.textContent = element;

//     listToCreate.push(item);
// });

// listOfIngridients.append(...listToCreate);

// const images = [
//     {
//         url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//         alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//     },
//     {
//       url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//       alt: 'White and Black Long Fur Cat',
//     },
//     {
//       url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//       alt: 'Group of Horses Running',
//     },
//   ];

// const resultingSting = images.map(element =>
//     `<li class="item"><img src="${element.url}" alt="${element.alt}"></li>`
// ).join('');

// const body = document.querySelector('body');
// body.insertAdjacentHTML('afterbegin', `<ul class="list">${resultingSting}</ul>`);

// const decrement = document.querySelector('.decrement');
// const increment = document.querySelector('.increment');
// const value = document.querySelector('#value');

// const counterValue = (val ,arg) => {
//     return val + arg;
// }

// const decrease = () => {
//     const val = Number(value.textContent);
//     const arg = -1;
//     value.textContent = counterValue(val, arg);
// }

// const increase = () => {
//     const val = Number(value.textContent);
//     const arg = 1;
//     value.textContent = counterValue(val, arg);
// }

// decrement.addEventListener('click', decrease);
// increment.addEventListener('click', increase);

// const input = document.querySelector('#name-input');
// const output = document.querySelector('#name-output');

// const outputValue = () => {

//     const value = input.value;
//     console.log(value);
//     if(value) {
//         output.textContent = value;
//         return;
//     }
//     output.textContent = 'незнакомец'
// }

// input.addEventListener('input', outputValue);

// const input = document.querySelector('#validation-input');
// const amount = Number(input.dataset.length);

// const isEqual = () => {
//     if(amount === input.value.length){
//         input.classList.add('valid');
//         input.classList.remove('invalid');
//         return;
//     }
//     input.classList.remove('valid');
//     input.classList.add('invalid');
// }

// input.addEventListener('blur', isEqual);

// const controller = document.querySelector('#font-size-control');
// const text = document.querySelector('#text');

// const controlSize = () => {
//     text.style.fontSize = `${Number(controller.value)}px`;
// }

// controller.addEventListener('input', controlSize);

// const controller = document.querySelector('#controls');
// const boxes = document.querySelector('#boxes');
// const number = document.querySelector('#controls>input');
// const render = document.querySelector('.render')
// const destroy = document.querySelector('.destroy')
// let sizes = 30;
// let arrOfElements = []

// function randColor() {
//     let r = Math.round(Math.random() * (256)),
//         g = Math.round(Math.random() * (256)),
//         b = Math.round(Math.random() * (256));
//     return `rgb(${r.toString()}, ${g.toString()}, ${b.toString()})`;
// }

// const createBoxes = () => {
//     const amount = Number(number.value);;
//     for(let i = 0; i < amount; i += 1){
//         const rectangle = document.createElement('div');
//         rectangle.style.backgroundColor = randColor();
//         rectangle.style.width = `${sizes}px`;
//         rectangle.style.height = `${sizes}px`;
//         rectangle.style.border = `4px solid ${randColor()}`;
//         sizes += 10;
//         arrOfElements.push(rectangle);
//     }

//     number.value = ''
//     boxes.append(...arrOfElements);
//     sizes = 30;
//     arrOfElements = [];
// }

// const destroyBoxes = () => {
//     boxes.innerHTML = '';

// }

// render.addEventListener('click', createBoxes);
// destroy.addEventListener('click', destroyBoxes)

// const courses = [
// {id: 234, price: 500, theme:['js'],},
// {id: 235, price: 800, theme:['html'],},
// {id: 236, price: 1000, theme:['js', 'html'],},
// {id: 237, price: 570, theme:['css'],},
// {id: 238, price: 900, theme:['js', 'node'],},
// {id: 239, price: 3000, theme:['html', 'node', 'css'],},
// {id: 240, price: 800, theme:['css', 'js'],},
// {id: 241, price: 300, theme:['node'],},
// {id: 242, price: 1100, theme:['js', 'css'],},
// {id: 243, price: 1500, theme:['js', 'react'],},
// {id: 244, price: 400, theme:['react'],},
// ]

// const parent = document.querySelector('.js-nav');
// const container = document.querySelector('.container');

// function randColor() {
//     let r = Math.round(Math.random() * (256)),
//         g = Math.round(Math.random() * (256)),
//         b = Math.round(Math.random() * (256));
//     return `rgb(${r.toString()}, ${g.toString()}, ${b.toString()})`;
// }

// const createFilter = () => {
//     const elements = [... new Set(courses.flatMap(el => {return el.theme}))]
//     const markup = elements.map(el => `<li><a type="button" class="btn" >${el}</a></li>`).join('')

//     parent.insertAdjacentHTML('afterbegin', markup);
// }

// const createFullList = () => {
//     const marcupOfActive = courses.map(el =>
//     `<li class="contain" style="background-color: ${randColor()};">Course №${el.id} Price: ${el.price} Specification: ${el.theme}</li>`).join('');

//     container.insertAdjacentHTML('afterbegin', marcupOfActive);
// }

// const findActive = event => {
//     event.preventDefault()

//     const target = event.target;
//     if(target.nodeName !== 'A'){
//         return;
//     }

//     changeColoredButton(target);

// }

// const changeColoredButton = target => {
//     const currentActive = parent.querySelector('.inverted');

//     if(currentActive){
//         currentActive.classList.remove('inverted');

//     }
//     if(currentActive === target){
//         target.classList.remove('inverted');
//         container.innerHTML = '';
//         createFullList();
//         return;
//     }

//     target.classList.add('inverted');
//     createListOfActive(target);
// }

// const createListOfActive = (target) => {

//     container.innerHTML = '';
//     const category = target.textContent;
//     const listOfActive = courses.filter(el => el.theme.includes(category));

//     const marcupOfActive = listOfActive.map(el =>
//     `<li class="contain" style="background-color: ${randColor()};">Course №${el.id} Price: ${el.price} Specification: ${el.theme}</li>`).join('');

//     container.insertAdjacentHTML('afterbegin', marcupOfActive);
// }

// createFilter();
// createFullList();
// parent.addEventListener('click', findActive);

// const container = document.querySelector('.container');
// const container2 = document.querySelector('.container2');
// let counter = 0;
// let counter2 = 0;

// const onMouseMove = () => {
//     counter += 1;
//     container.textContent = `amount of calls: ${counter}`;
// }

// window.addEventListener('mousemove', onMouseMove);

// const onMouseMove2 = () => {
//     counter2 += 1;
//     container2.textContent = `amount of calls 2: ${counter2}`;
// }

// const throttledEvent = _.throttle(onMouseMove2, 500);

// window.addEventListener('mousemove', throttledEvent);

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(5);
//   }, 4000);
// });

// promise
//   .then((value) => {
//     console.log(value); // 5
//     return value * 2;
//   })
//   .then((value) => {
//     console.log(value); // 10
//     return value * ten;
//   })
//   .then((value) => {
//     console.log(value); // 30
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const colors = [
//   "#F44336",
//   "#FFEBEE",
//   "#FFCDD2",
//   "#EF9A9A",
//   "#E57373",
//   "#EF5350",
//   "#F44336",
//   "#E53935",
//   "#D32F2F",
//   "#ECEFF1",
//   "#CFD8DC",
//   "#B0BEC5",
//   "#90A4AE",
//   "#78909C",
//   "#607D8B",
//   "#546E7A",
//   "#455A64",
//   "#37474F",
//   "#263238",
//   "#000000",
//   "#FFFFFF",
// ];

// const min = 0;
// const max = colors.length;
// let isWorking = false;
// let intervalId = null;

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// const start = document.querySelector(".js-start");
// const stop = document.querySelector(".js-stop");
// const body = document.querySelector("body");

// const changeBGColor = () => {
//   if (isWorking) {
//     return;
//   }
//   intervalId = setInterval(() => {
//     isWorking = true;
//     body.style.backgroundColor = colors[randomIntegerFromInterval(min, max)];
//   }, 500);
// };

// const stopChangingColor = () => {
//   clearInterval(intervalId);
//   isWorking = false;
// };

// start.addEventListener("click", changeBGColor);
// stop.addEventListener("click", stopChangingColor);

const start = document.querySelector(".js-start");
const stop = document.querySelector(".js-stop");
const input = document.querySelectorAll(".js-date");
const timer = document.querySelector(".js-timer");
const validDate = document.querySelector(".valid-date");
const resultOfValidation = document.querySelector(".result");

const options = {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
};

let isWorking = false;

setInterval(() => {
  let date = new Date();
  validDate.textContent = date.toLocaleString("Uk-uk", options);
}, 2000);

const pad = (value) => {
  return String(value).padStart(2, "0");
};

class CountdownTimer {
  constructor(currentTime = {}) {
    this.time = currentTime;
  }

  getUnixTime() {
    this.unixTime = this.time.getTime();
  }

  calculateSubstractTime() {
    this.currentTime = null;
    this.intervalId = setInterval(() => {
      this.currentTime = Date.now();

      this.calculateCurrentTime();
    }, 1000);
  }

  calculateCurrentTime() {
    this.getUnixTime();
    this.resultTime = this.unixTime - this.currentTime;
    const { resultTime } = this;

    if (this.resultTime < -1000) {
      resultOfValidation.textContent =
        "!!! Час не валідний, cпробуйте ввести інший !!!";
      resultOfValidation.style.backgroundColor = "#ff0000";
      stopTimer();
      return;
    } else if (this.resultTime < 0 && this.resultTime > -1000) {
      resultOfValidation.textContent =
        "Таймер закінчив роботу. Надсилаємо нагадування ;)";
      resultOfValidation.style.backgroundColor = "#008000";
      stopTimer();
      return;
    }

    this.resultDays = Math.floor(resultTime / (1000 * 60 * 60 * 24));
    this.resultHours = pad(
      Math.floor((resultTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    this.resulMins = pad(
      Math.floor((resultTime % (1000 * 60 * 60)) / (1000 * 60))
    );
    this.resultSecs = pad(Math.floor((resultTime % (1000 * 60)) / 1000));

    const { resultDays, resultHours, resulMins, resultSecs } = this;

    timer.textContent = `${resultDays}:${resultHours}:${resulMins}:${resultSecs}`;

    console.log(resultDays, resultHours, resulMins, resultSecs);
  }
}

let timer2 = null;

const createTimer = () => {
  if (isWorking) {
    return;
  }
  isWorking = true;
  const arrOfInputs = [...input];
  const arrOfValues = arrOfInputs.map((el) => Number(el.value.trim()));
  const futureTime = new Date(2022, 1, ...arrOfValues);
  const timer1 = new CountdownTimer(futureTime);
  timer1.calculateSubstractTime();
  timer2 = timer1;
};

const stopTimer = () => {
  isWorking = false;
  clearInterval(timer2.intervalId);
};

start.addEventListener("click", createTimer);
stop.addEventListener("click", stopTimer);
