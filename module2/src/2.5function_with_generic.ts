{
    // function with generic

    const createArr = (param : string) : string[] => {
        return [param]
    }
    createArr('Happy')

    const createArrGen = <T> (param : T) : T[] => {
        return [param]
    }

    createArrGen<string>('not happy')
    createArrGen<number>(344)

    interface GenObj {
        name : string;
        Id : number;
    }

    createArrGen<GenObj>({
        name : 'Ashfakul',
        Id : 1234567890
    })

    // generic with tuple

    const createGenTuple = <X, Y> (param1 : X , param2 : Y) : [X,Y] => {
        return [param1, param2]
    };

    const result = createGenTuple<string, number>('not happy', 69)


    const genTuple = <A , B> (param1 : A , param2 : B) : [A , B] => {
        return [param1, param2]
    }

    const res = genTuple<boolean, {name: string}>(true , {name: 'sat'})
}