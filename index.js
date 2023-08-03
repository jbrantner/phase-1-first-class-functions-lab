// Code your solution in this file!


function returnFirstTwoDrivers(x) {
    return x.slice(0, 2);
}

function returnLastTwoDrivers(x) {
    return x.slice((x.length - 2), x.length);
}

function createFareMultiplier() {
    return (x) => x * x;
}

function fareDoubler(x) {
    return x * 2; 
}

function fareTripler(x) {
    return x * 3;
}

function selectDifferentDrivers(driversArray, driversFunction) {
    return driversFunction(driversArray);
}

const array = ['Antonia', 'Nuru', 'Amari', 'Mo']

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

returnFirstTwoDrivers(array);

selectDifferentDrivers();