const carCoast = {
    carCoast: "Opel"
}
carCoast.new = "Mazda";
console.log(carCoast);

carCoast.popular = "Audi";
console.log(carCoast);

carCoast.year = 10;
console.log(carCoast);

carCoast.colorWhite = true;
console.log(carCoast,carCoast.popular)


//Оператор удаления
delete carCoast.popular;
delete carCoast.new;
console.log(carCoast);

//[....]
const nameCarBidOrLitlle = 'litllecar';
carCoast[nameCarBidOrLitlle] = 'Pegeout'
console.log(carCoast);

//Объекты
const name = 'Valery';
const ageHim = 30;

const metaData = {
    name,
    ageHim,
    hasGotPerson: true
}
console.log(metaData);

//Глобальные объекты

console.log(10);
window.console.log(10);
globalThis.console.log(10);

//Методы Объекта

const myCar = {
    car: 'Audi',
    carGreeting() {
        console.log('Greeating!!');
    }
}

myCar.carGreeting()
// JSON

const post = {
    title: 'My post',
    likesQty: 5
}
JSON.stringify(post);// -->> Код JavaScript в строчный код JSON

const postStringified = JSON.stringify(post);
JSON.parse(postStringified);// -->>Cтрочный код JSON в код JavaScript

