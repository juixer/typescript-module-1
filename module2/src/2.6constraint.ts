{
    // constraint
    // eita dia needed property gula set kora jai jodi needed er moddhe ekta missing thakle oita jonno error dibe TS

    const addCourseToStudent = <T extends {id : number, name : string, email : string}> (student : T) => {
        const course = "Next Level Web Development";
        return {
            ...student,
            course,
        }
    }

    const student1 = addCourseToStudent<{name: string, id : number , email : string, bike : boolean, married : boolean}>({
        name : "Ashfakul",
        id : 183,
        email : 'shanto@gmail.com',
        bike : false,
        married : false,
    })

    const student2 = addCourseToStudent<{watch : string, computer : string, id : number, email : string, name : string, bike : boolean}>({
        id: 184,
        email : 'shanto@gmail.com',
        name : "Ashfakul",
        bike : false,
        watch : 'Apple',
        computer : 'MAC'
    })

}