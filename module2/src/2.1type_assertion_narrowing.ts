{
    // type assertion is like if you tell TS that variable is specific type  [example = ( variable as string).  ] it will show all the string suggestions
    let anything : any;

    anything = 'anything';
    anything = 123;

    (anything as string)

    const kgToGm = (value : string | number) : string | number | undefined => {

        if( typeof value === 'string') {
            const convertValued = parseFloat(value) * 1000;
            return convertValued
        } else if ( typeof value === 'number'){
            return value * 1000
        } else {
            return 'Nothing to convert'
        }
    }

    const result1 = kgToGm(10) as number

    console.log(result1);


    // try catch type assertion

    type CustomError = {
        message : string;
    }
    try{

    }catch(error){
        console.log((error as CustomError).message);
    }

}