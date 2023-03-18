function addTwo(num: number) {
    return num + 2;
}

function getUpper(val: string) {
    return val.toUpperCase();

}

function signUser(name: string, email:string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

addTwo(5);
getUpper("This is string");
signUser("junaid", "junaid@test.com", false);
loginUser("Junaid", "j@test.com");

export {}