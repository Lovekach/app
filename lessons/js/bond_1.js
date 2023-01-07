// 1 Переменные
// variable
// var name = 'Valery';// string
// const lastName = 'Zubov';//string
// let age =  30; //number
// const isProgrammer = true;//boolean

// name = 'Lera';
// console.log(name);

// age = 30;
// console.log(age);

// age = false;
// console.log(age); 

// age = 25;

// const fistName = 'Valery';
// const lastName1 = 'Zubov';

// const $ = 'some value';
//const if = 'mket' // err

// const withNum5 = 5;
// const 5withNum = 5 // err

//camelCase
// (firstName
// lastName
// oneGarden
// twoGarden
// oneGreenTree
// twoGreenTree)


//2 Мутирование 
// Конкатенация (соединение строк)

// console.log('Имя человека: ' + name + ', а возраст:' + age );
// alert('Имя человека: ' + firstName + 'а возраст человека: ' + age);


// const lastName = prompt('Введите фамилию');
// alert(fistName + ' ' + lastName);

// 3 Операторы
// const currentYear = 2023;
// const birthYear = 1992;

// const age1 = currentYear - birthYear;
// console.log(age1);

// const a = 10;
// const b = 5;

// let c = 32;
// //c = c + a;
// c += a;
// c -= a;
// c *= a;
// c /= a;


// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(++currentYear);
// console.log(--currentYear);


//4 Типы данных

// const itIsProgrammer = true;
// const name2 = 'Valery';
// const age2 = 30;
// let x ;
// null;
// console.log(typeof itIsProgrammer);
// console.log(typeof name2);
// console.log(typeof age2);
// console.log(typeof x);
// console.log(typeof null);


//5 Приоритет операторов
// const fullAge = 30;
// const birthYear1 = 1992;
// const currentYear1 = 2023;

// const isFullAge = currentYear1 - birthYear1 >= fullAge // 31 >= 30;
// console.log(isFullAge);

//6 Условные операторы
// const courseStatus = 'pending'; // ready, fail, pending

// if (courseStatus === 'ready') {
//     console.log('Курс уже готов');
// } else if (courseStatus === 'pending') {
//     console.log('Курс в процессе разработки')
// } else {
//     console.log('Курс не готов');
// }

// const isReady = true;

// if (isReady) {
//     console.log('Все готово');
// } else {
//     console.log('Не готово ничего');
// }


// Тернарное выражение
// isReady ? console.log('Все готово') : console.log('Не готово ничего');


// const num1 = 42; //number
// const num2 = '42' // string

// console.log(num1 === num2)


// Булевая логика
// && (И)                                          ||(ИЛИ)
//true && true = true;                     true || true = true;
//true && false = false;                   true || false = true;
//false && true = false ;                  false || true = true;
//false && false = false ;                 false || false = false;

// Функции

// function calculateAge(year) {
//     return 2023 - year;
// }

// // const myAge = calculateAge(1992);
// // console.log(myAge);

// function aboutMe(name, year) {
//     const age = calculateAge(year);

//     console.log('Мое имя ' + name  + 'и мне ' + age);
// }

//  aboutMe(Varery, 1992);


//Массивы

// const cars = ['Mazda', 'Bmw', 'Opel'];
// console.log(cars);

// const cars = new Array('Mazda', 'Bmw', 'Opel');
// console.log(cars.length);
// console.log(cars[2]);

// cars[1] = 'Audi';
// console.log(cars[1]);


// Циклы


// const cars = ['Mazda', 'Bmw', 'Opel'];
// for (let i = 0; i < cars.length; i++) {
//     const car = cars [i];
//     console.log(car);
// }

