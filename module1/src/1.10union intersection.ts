{
    // union  ( | ) 
    // ekta type declare kora jai multiple condition way te jeita lagbe oita use korbe oi 
    // specific condition diyar gular moddhe. r ei condition er baire dile error dibe TS.

    type Developer = 'frontend' | 'backend';
    type Programmer = 'coder' | 'fullstack';

    type Team = Developer | Programmer;

    const newDev : Developer = 'backend';
    
    const newMember : Team = 'coder';

    type User = {
        name: string;
        age: number;
        gender: 'male' | 'female';
    }

    const newUser : User = {
        name: 'Ashfakul',
        age: 20,
        gender:'male' // eikhane male or female bade onno kichu assign korle typescript error dibe
    }

    // intersection ( & )
    type FrontEndDev = {
        skills: string[];
        designation1: 'frontend developer'
    }

    type BackendDev = {
        skills: string[];
        designation2: 'backend developer'
    }

    type FullStackDev = FrontEndDev & BackendDev;

    const newProgrammer : FullStackDev ={
        skills: ['html', 'css', 'js', ],
        designation1: 'frontend developer',
        designation2: 'backend developer',
    }

}