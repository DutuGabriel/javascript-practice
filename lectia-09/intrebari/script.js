// 'use strict';

function foo() {
    console.log(this)
}

foo()

function addFive(num) {
    return num + 5;
}

console.log(addFive(10))

const addFiveResult = addFive(20);
console.log(addFiveResult)

const addFiveCopy = addFive;
console.log(addFiveCopy)
console.log(addFiveCopy(30))

const obj = {
    fullName: 'Sergiu Savin',
    logName: function() {
        console.log(this.fullName)
    }
}

obj.logName();

const newObjFunctionCopy = obj.logName;
newObjFunctionCopy();

const newObj = {
    fullName: 'Vasile',
    doTheCopy: obj.logName
}

newObj.doTheCopy()
console.log(newObj.oriceProprietateCareNuExistaVaFiUndefined)

const objWithArrowFunction = {
    fullName: 'Sergiu Savin',
    logName: () => {
        console.log(this.fullName)
    }
}

console.log('Apel logName declarat ca arrow function')
objWithArrowFunction.logName()