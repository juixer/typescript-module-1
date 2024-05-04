{
    // instance of guard

    class Animal {
        constructor(public name: string, public species: string){}
        makeSound(){
            console.log('This animal making sound!!!');
        }
    }

    class Dog extends Animal {
        constructor(name: string, species: string){
            super(name,species);
        }
        makeBark(){
            console.log('This dog barking!!!');
        }
    }

    class Cat extends Animal {
        constructor(name: string, species: string){
            super(name,species);
        }
        makeMeows(){
            console.log('this cat makes meows!!!');
        }
    }

    class Cow extends Animal {
        constructor(name: string, species: string){
            super(name,species);
        }
    }


    const dog = new Dog('Spike', 'Dog');
    const cat = new Cat('Tom', 'Cat');
    const cow = new Cow('Milu', 'Cow');

    // instanceof function short form exam cat

    const isCat = (animal : Animal) : animal is Cat => {
        return animal instanceof Cat;
    }

    const animalSound = (animal : Animal) => {
        if(animal instanceof Dog) {
            animal.makeBark();
        }else if (isCat(animal)) {
            animal.makeMeows();
        }else{
            animal.makeSound();
        }
    }

    animalSound(dog);
    animalSound(cat);
    animalSound(cow);

}