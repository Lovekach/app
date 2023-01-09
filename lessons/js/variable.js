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


const nameCarBidOrLitlle = 'litlle';
carCoast[nameCarBidOrLitlle] = 'Pegeout'
console.log(carCoast);