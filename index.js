// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

// const returnFirstTwoDrivers = function(array){
//     let newDrivers = [...array.slice(0,2)]
//     return newDrivers
// }
// console.log(returnFirstTwoDrivers(drivers));

// Code your solution in this file!

const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
  };
  
const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
  };

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplyValue) {
    return function (fare) {
      return multiplyValue * fare;
    };
  };
  
console.log(createFareMultiplier(6)(6));

const fareDoubler = function(doubleFare){
    return function createFareMultiplier(fare){
        return doubleFare + fare;
    }
}
console.log(fareDoubler(10)(10))

const fareTripler = function (trippleFare){
    return function createFareMultiplier(fare){
        return trippleFare + fare + fare
    }
}
console.log(fareTripler(6)(6))

const selectDifferentDrivers = function (drivers, driversToReturn) {
    return driversToReturn(drivers);
  };




