const returnFirstTwoDrivers = function(drivers) {
  return [drivers[0], drivers[1]]
}

const returnLastTwoDrivers = function(drivers) {
  return [drivers[drivers.length-2], drivers[drivers.length-1]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(fare) {
  return function(multiplier){
    return multiplier * fare;
  }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(drivers, d_function) {
  return d_function(drivers);
}
