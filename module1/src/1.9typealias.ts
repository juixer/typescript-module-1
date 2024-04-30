{
  // TYPE ALIAS
  // eita dia value/object er onek gula type er type set kora jai. alada vabe jate bar bar repeat nah kora lage

  type Student = {
    name: string;
    age: number;
    isMarried?: boolean;
    contact: number;
    address: string;
  };

  const student: Student = {
    name: "Ashfakul Islam Shanto",
    address: "Magura",
    age: 25,
    isMarried: true,
    contact: 1834567890,
  };

  type Word = string;

  const abc: Word = "xyz";

  //    function type alias

  type Add = (num1: number , num2 : number) => number

  const add : Add = (num1, num2) => num1 + num2;
}
