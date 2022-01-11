const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = drivers => {
    return drivers.slice(0,2);
}
const returnLastTwoDrivers = drivers => drivers.slice(-2)

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(value1){
    return function(value2){
        return value2*value1;
    }
}
const fareDoubler = fare => fare*2;

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(drivers,drivers2){
    return drivers2(drivers);
}
