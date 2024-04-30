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

// jodi 3ta declaration korar por 2ta data assign korle error dibe e declaration korle oita required hoye jai..  so er jonno declaration er por ? dile oita optional type hoye jai

//jodi declaration er somoy kono value er type jodi nijer moto text diya hoy taile oita value er type hoye jai... example: ( company: 'Programming Hero' ) ekhon jodi company er value programming hero sara onno kichu dia hoy taile error dibe

const user2 : {
    firstName: string;
    middleName? : string; // optional type
    lastName: string;
    enrolled: 'Programming Hero'
} = {
    firstName: 'Ashfakul',
    lastName: 'Shanto',
    enrolled: 'Programming Hero'
}