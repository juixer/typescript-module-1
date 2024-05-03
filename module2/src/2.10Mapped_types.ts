{
    // Mapped Types

    // basic map
    const arrOfNum  : number[] = [1,2,3,4]

    const arrOfString : string[] = arrOfNum.map(num => num.toString())

    console.log(arrOfString);


    // use map to change the type by keyof
    type AreaNumber = {
        height : number;
        width  : number;
        sure : number;
    }

    // look up type
    type Height = AreaNumber['height']

    // loop by keyof
    type AreaSting = {
        [key in keyof AreaNumber] : string
    }


    // dynamic properties and types

    // type Dynamic<T>={
    //     [key in keyof T] : T [key]
    // }


    // const dynamic : Dynamic<{height: number, width: string}> ={
    //    height: 5,
    //    width : '4'
    // }

    type Dynamic2<T> = {
        [key in keyof T] : T[key]
    }

    const dynamic2 : Dynamic2<{name: string, age: number , bike: boolean}> = {
        age: 5,
        bike: true,
        name: 'Ashfakul'
    }


} 