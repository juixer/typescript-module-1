{

    // Object Destructuring

    const user : {
        name : {
            firstName : string;
            middleName : string;
            lastName : string;
        };
        contact : number;
        address : string;
    } = {
        name : {
            firstName : 'Ashfakul',
            middleName : 'Islam',
            lastName : 'Shanto'
        },
        contact : 1234567890,
        address : 'Dhaka'
    }


    const {contact, name: { middleName : midName}} = user
    // midName is the destructured of middleName

    // Array Destructuring

    const friends : string[] = ['Sazin', 'Raadin', 'Sifat', 'Mahin']

    const [a,homie,...rest] = friends
}