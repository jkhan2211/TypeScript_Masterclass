"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
// function getValue(myValue: number){
//     if (myValue > 4) {
//         return true;
//     }
//     return "200 OK";
// }
var getHello = function (s) {
    return "";
};
addTwo(5);
getUpper("This is string");
signUser("junaid", "junaid@test.com", false);
loginUser("Junaid", "j@test.com");
var heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errMsg) {
    console.log(errMsg);
}
function handleError(errMsg) {
    throw new Error(errMsg);
}
