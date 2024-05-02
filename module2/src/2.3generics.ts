{
    // generics type
    // you can use general way to declare type alias

    // dynamically generics type you can use param (T) to declare array type
    type GenericArr<T> = Array<T>
    // const numArr : number[] = [1,2,3]
    // const numArr : Array<number> = [1,2,3]
    const numArr : GenericArr<number> = [1,2,3]
    const stringArr : GenericArr<string> = ['a', 'b', 'c']

    // you can use it in array object

    // you can use like this but not recommended cuz its not verify the value type
    // const user : GenericArr<object> = [
    //     {
    //         name: 'Ashfakul',
    //         age: 20
    //     },
    //     {
    //         name: 'Sazin',
    //         age : '21'
    //     }
    // ]



    // this is the right way
    const user : GenericArr<{name: string, age : number}> = [
        {
            name: 'Ashfakul',
            age: 20
        },
        {
            name: 'Sazin',
            age : 21
        }
    ]


    // generic tuple

    type GenericTuple <X,Y> = [X,Y]

    const manus : GenericTuple<string,number> = [ 'x', 2]

    interface User {
        name: string;
        married: boolean;
        age: number;
    }

    const roleID : GenericTuple<number,User> = [12, {name: 'shanto', married: true, age: 20}]
}