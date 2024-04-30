// object

const user : {
    firstName: string;
    middleName: string;
    lastName: string;
    isMarried?: boolean;
    enrolled: 'Programming Hero'
} = {
    firstName: 'Ashfakul',
    middleName: 'Islam',
    lastName: 'Shanto',
    isMarried : true,
    enrolled : 'Programming Hero'
}

// jodi 3ta property declaration korar por 2ta data assign korle error dibe e declaration korle oita required hoye jai..  so er jonno declaration er por ? dile oita optional type hoye jai

//jodi property declaration er somoy kono value er type jodi nijer moto text diya hoy taile oita value er type hoye jai... example: ( company: 'Programming Hero' ) ekhon jodi company er value programming hero sara onno kichu dia hoy taile error dibe

// you can also set the property readonly so you can not update the value of the property

// by the object variable you can see the property of the object and you can change the value of the property

const user2 : {
    firstName: string;
    middleName? : string; // optional type
    lastName: string;
    enrolled: 'Programming Hero';
   readonly isMarried: boolean;
} = {
    firstName: 'Ashfakul',
    lastName: 'Shanto',
    enrolled: 'Programming Hero',
    isMarried : true
}

user2.middleName = 'Juixer'
// Example of readonly error : user2.isMarried = false

