{
    // generic constraint with keyof operator

    // keyof jinish ta sort of union type er moto 

    // Manually
    type Owner = 'Bike' | 'Car' | 'Ship'

    // Keyof constraint
    type Vehicle = {
        bike : string;
        car : string;
        ship : string;
    }

    type Owner2 = keyof Vehicle

    // example 
    const person : Owner2 = "bike";

    // generic constraint with keyof in function

    const bike : {
        model : string;
        price : number;
        company : string;
    } = {
        model : 'pulser',
        price : 350000,
        company : 'Bujaj'
    }

    const getPropertyValue = <X, Y extends keyof X>(obj : X, key : Y) => {
        return obj[key]
    }

  const value =  getPropertyValue(bike, 'price')

    console.log(value);
}