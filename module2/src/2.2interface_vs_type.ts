{
    // Interface
    // sokol primitive types jonno amra type alias use korbo
    // non-primitive types jonno interface or type alias use kora jabe
    // interface declaring jonno { } diya lage = diya jai nah
    type User1 = {
        name : string;
        age : number;
    }
    interface User2 {
        name : string;
        age : number;
    }

    type UserWithRole1 = User1 & { role : string}

    interface UserWithRole2 extends User2 {
        role : string;
    }

    // type alias
    const user1 : User1 = {
        name : 'Ashfakul',
        age : 20
    }

    // interface
    const user2 : User2 = {
        name : 'Ashfakul',
        age : 20
    }

    // type alias
    const userRole1 : UserWithRole1 = {
        name : 'Ashfakul',
        age : 20,
        role : 'admin'
    }

    // interface
    const userRole2 : UserWithRole2 = {
        name : 'Ashfakul',
        age : 20,
        role : 'admin'
    }

    // interface with array
    type Roll1 = number[];

    const roll1 : Roll1 = [1,2,3]

    interface Roll2 {
        [index : number] : number
    }
    const roll2 : Roll2 = [1,2,3]



    // function interface
    type Add1 = (num1 : number , num2 : number) => number
    
    const add1 : Add1 = (num1 , num2) => num1 + num2

    interface Add2 {
        (num1 : number, num2 : number) : number
    }

    const add2 : Add2 = (num1, num2) => num1 + num2

}