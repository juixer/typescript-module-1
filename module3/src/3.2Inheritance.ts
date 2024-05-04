{
  // Inheritance

  class Person {
    constructor(
      public name: string,
      public age: number,
      public address: string
    ) {}

    getSleep(numberOfHours: number) {
      console.log(`${this.name} will sleep ${numberOfHours}`);
    }
  }
  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }

  const student = new Student("Ashfakul Islam", 25, "Magura");
  class Teacher extends Person {
    constructor(name : string, age: number, address: string,public designation: string){
        super(name,age,address);
    }
    takeClass(numberOfClass: number) {
      console.log(`${this.name} will take class ${numberOfClass}`);
    }
  }

  const teacher = new Teacher("Jhankar Mahbub", 40, "USA", "Web Developer");

  student.getSleep(8)
  console.log('-----------');
  teacher.takeClass(5)
}
