{
// learning function
// Normal function

// you can assign the function parameters type LIKE which type of parameters you want to use here
//  you can assign the function return type 
// also you can assign default value
// example:

function add (num1 : number, num2 : number = 10) : number {
    return num1 + num2;
}

add(5 , 6)
// error will be shown if you give other types of arguments here instead of number
//  add(5, "2")



// Arrow function

const addArrow = (num1: number, num2: number) :number => num1 + num2;


// object --> function --> method
// for function type properties declaration --- functionName : (parameter : type ) => return type

const myAccount : {
    name: string;
    balance: number;
    addBalance : (balance: number) => number;
} = {
    name: 'Shanto',
    balance: 0,
    addBalance (balance : number) :number //:sting
     { 
        return this.balance + balance
        // for string 
        // return `My Balance ${this.balance + balance}`
    }
}


// ARRAY MAP

const numbers : number[] = [1,2,3,4,5]

const doubleNum : number[] = numbers.map((num : number) : number => num * num)
}