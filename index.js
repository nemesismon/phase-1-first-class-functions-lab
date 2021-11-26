// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
    let tempDrivers;
    return tempDrivers = drivers.slice(0,2);
}

const returnLastTwoDrivers = function (drivers) {
    let tempDrivers;
    let driverAmt = drivers.length;
    return tempDrivers = drivers.slice([driverAmt - 2], [driverAmt]);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier () {
    return function(num) {
        return num * num;
    }
}

function fareDoubler(num){ 
    return num * 2;
}

function fareTripler(num){
    return num * 3;
}

function selectDifferentDrivers (drivers, functionName) {
    return functionName(drivers);
}