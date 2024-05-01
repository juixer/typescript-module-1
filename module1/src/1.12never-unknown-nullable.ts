{
    // nullable types

    const searchName = (value : string | null) => {
        if (value){
            console.log('Searching');
        }else {
            console.log('There is nothing to search');
        }
    }

    searchName(null)

    // unknown type

    const getSpeedInMeterPerSecond = (value : unknown) => {

        if( typeof value === 'number') {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`the speed is ${convertedSpeed}`);
        }

        else if (typeof value === "string") {
            const [speed, unit] = value.split(" ");
            const convertedSpeed = (parseFloat(speed) * 1000) / 3600;
            console.log(`the speed is ${convertedSpeed}`);
        }

        else {
            console.log(`the speed is unknown`);
        }
    }

    getSpeedInMeterPerSecond(100)


    // never

    const  throwErr = (msg : string) : never => {
        throw new Error(msg);
    }

    throwErr('troll error')
}