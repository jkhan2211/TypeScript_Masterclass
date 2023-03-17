// Variable Declaration 

var message : string = "Hello World";
console.log(message);

// Different ways of Variable Declaration

var a : number ; // only type
var b = 10; // only initial value
var c : number = 10; // both data type and value 


// ---------------------------------------------------------------------------

// var vs let vs const

// var: can be declared without being initialized

var name1 : string;

// var: can be re-declared and updated

var name11 : string = "Hello";
console.log("var initialized: ", name11);
name11 = "Hello TS";
console.log("var updates:", name11);
var name11 : string = "Welcome to TS";
console.log("var re-declared", name11);

// var: are function ScopedCred
function example(){
    if(true) {
        var x =100;
        console.log(x);
    }
    console.log(x);
}


// let: can be declared without being intialized

let name2 : string;

// let: can be updated but cannot be redeclared
let name22 : string = "Hello";
console.log("var inirtilized: ", name22);
name22 = "Hello TS";
console.log("var updates:", name22);
// let name22: string = "Test";
// console.log("var", name22)

// let are block scoped
function example2(){
    if(true) {
        let x1 =100;
        console.log(x1);
    }
    // console.log(x1);
}
// const: must be initialized during declaration

const name3 : string = "Hello"

// const cannot be update or redeclared
const name33 : string = "Hello";
console.log("var initialized: ", name33);
// name33 = "Hello TS";
// const name33 : string = "Further test"
console.log("var updates:", name33);

// const: are blocked scope
function example3(){
    if(true) {
        const x1 =100;
        console.log(x1);
    }
        // console.log(x1);
}

// ------------------------------------------------------

// Data types

// number 
var a : number = 1000;
console.log("number is:", a)

var b : number = 10.2;
console.log(b);


// string

var str1 : string = "This is string";
console.log(str1);

// boolean
var isReady : boolean = true;
console.log(isReady);

// ------------------------------------------------------------------

// void
var nothing : void = undefined;
// nothing = "10";

// null
var x4 = null;
console.log(x4);
// x4 = "Hello"
console.log(x4);
console.log(typeof(x4));


var y : null;
// y = 10;

// undefined
var a2 = undefined;
// a2 =10;
console.log(a2);


var a5= undefined;
// a5 = 100;

// never
// var a2 : never = null; 

// any
var x10 : any;
console.log(x10);
console.log(typeof(x10));
x10 = 10;
console.log(x10);
console.log(typeof(x10));
