{
    // Conditional Types

    type Owns = {
        bike: string;
        car: string;
        ship: string;
        plane: string;
    }

    type CheckVehicle <T> = T extends keyof Owns ? true : false

    type HasPlane = CheckVehicle<'plane'>



}