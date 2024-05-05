{
    // Abstraction
    // Abstraction can be done by two ways: 1 -> interface 2-> abstract

    // IDEA
    interface Vehicle {
        startEngine() : void;
        stopEngine() : void;
        move() : void;
    }

    // you can not use interface/type alias in class like object do
    // for using that need to use implements


    // real implementation
    class Car implements Vehicle {
        startEngine(): void {
            console.log('im starting the engine...');
        }

        move(): void {
            console.log('im moving...');
        }

        stopEngine(): void {
            console.log('im stopping the engine...');
        }

        test(){
            console.log('im just testing...');
        }

    }


    const toyota = new Car();

    abstract class Car2{
       abstract startEngine(): void ;

       abstract move(): void ;

       abstract stopEngine(): void ;

        test(){
            console.log('im just testing...');
        }

    }

    class ToyoTaCar extends Car2{
        startEngine(): void {
            console.log('im starting the engine...');
        }
        move(): void {
            console.log('im moving...');
        }
        stopEngine(): void {
            console.log('im stopping the engine...');
        }
    }


}