{
  // class

  //   mela kichu likha dekhte jhamela
  class Animal {
    name: string;
    species: string;
    sounds: string;

    // properties
    constructor(name: string, species: string, sounds: string) {
      this.name = name;
      this.species = species;
      this.sounds = sounds;
    }
    // method
    makeSound() {
      console.log(`The ${this.name} make ${this.sounds} sound`);
    }
  }

  // access the class by new "class name"
  const dog = new Animal("husky", "Dog", "bark");
  const cat = new Animal("persian", "cat", "meow");
  cat.makeSound();

  //short form

  class Anime {
    constructor(
      public name: string,
      public mainCharacter: string,
      public power: string
    ) {}

    animeGuy() {
      console.log(
        `This ${this.mainCharacter} guy is from ${this.name} and his power is ${this.power}`
      );
    }
  }

  const vegeta = new Anime('Dragon Ball', 'Price Vegeta', 'Super Sayain')
  vegeta.animeGuy()
}
