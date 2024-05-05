{
  // polymorphism

  // Class er particular method onno class e gia redesign hoy tahole she khetre amra diffrent diffrent output poacchi ... bohumukh dekhacche er jonno eita polymorphism

  class Person {
    getSleep() {
      console.log("im sleeping 8h per day");
    }
  }

  class Student extends Person {
    getSleep() {
      console.log("im sleeping 6h per day");
    }
  }
  class Developer extends Person {
    getSleep() {
      console.log("im sleeping 5h per day");
    }
  }

  const getSleepingHours = (params: Person) => {
    params.getSleep();
  };

  const person = new Person();
  const student = new Student();
  const developer = new Developer();

  getSleepingHours(person);
  getSleepingHours(student);
  getSleepingHours(developer);


  class Shape {
    getArea ():number {
        return 0;
    }
  }


  class Circle extends Shape {
    //   we cant use params if parent class not has params
    // getArea(radius : number): number{
    // }

    constructor(public radius: number){
        super();
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
  }
  class Rectangle extends Shape {
    //   we cant use params if parent class not has params
    // getArea(radius : number): number{
    // }

    constructor(public height: number, public width : number){
        super();
    }

    getArea(): number {
        return this.height * this.width;
    }
  }



const getShapeArea = (param : Shape) => {
    console.log(param.getArea());
}

const shape1 = new Shape()
const shape2 = new Circle(10)
const shape3 = new Rectangle(10, 20)

getShapeArea(shape1)
getShapeArea(shape2)
getShapeArea(shape3)




}
