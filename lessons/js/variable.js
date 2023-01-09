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