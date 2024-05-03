{
    // Utility Types

    // Pick == type pick kora
    // Omit == type bad dia
    // Required == type required korai dei
    // Partial == opposite of required optional banai dibe type gula
    // Readonly == type readonly korai dei
    // Record == record dia properties and type dynamic kora jai

    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNO : string;
    }

    // example of pick
    type NameAge = Pick<Person, 'name' | 'age'>

    // example of omit
    type ContactInfo = Omit<Person, 'name' | 'age'>

    // example of required 
    type PersonRequired = Required<Person>

    // example of partial
    type PersonPartial = Partial<Person>

    // example of readonly
    type PersonReadonly = Readonly<Person>

    const person : PersonReadonly = {
        age : 50,
        contactNO : '02478923',
        name : 'shanto',
        email: 'sdahjasn@ngfjns.com'
    }
     // person.age = 4 you can not change the value anymore


    // example of Record

    type MyObj = Record<string,string>

    const myObj : MyObj = {
        a : 'aa',
        b : 'bb',
        c : 'cc',
        // d : 5 number diyar jonno error dibe
    }

    // dynamic properties and dynamic types

    type DynamicObj = Record<string , unknown>

    const dynamicObj : DynamicObj = {
        name : 'shanto',
        age : 25,
        married : true
    }
     
}