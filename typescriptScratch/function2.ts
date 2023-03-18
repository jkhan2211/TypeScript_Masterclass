function addTwo(num: number) {
    return num + 2;
}

function getUpper(val: string) {
    return val.toUpperCase();

}

function signUser(name: string, email:string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

// function getValue(myValue: number){
//     if (myValue > 4) {
//         return true;
//     }
//     return "200 OK";
// }

const getHello = (s: string):string => {
    return ""
}

addTwo(5);
getUpper("This is string");
signUser("junaid", "junaid@test.com", false);
loginUser("Junaid", "j@test.com");


const heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3];

heros.map(hero => {
    return `hero is ${hero}`;
});

function consoleError(errMsg: string): void{
    console.log(errMsg);
}

function handleError(errMsg: string): never{
    throw new Error(errMsg);
}
export {}