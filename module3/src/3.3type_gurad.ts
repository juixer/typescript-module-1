{
  // type guard

  // typeof --> type Guard

  type Alphanumeric = string | number;

  const add = (param1: Alphanumeric, param2: Alphanumeric): Alphanumeric => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  const result = add(50, 50);
  console.log(result);

  //   typein  type guard

  type NormalUser = {
    name: string;
  };

  type AdminUser = {
    name: string;
    role: "admin";
  };

  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`My Name is ${user.name} and Role is ${user.role}`);
    } else {
      console.log(`My Name is ${user.name}`);
    }
  };

  const normalUser :  NormalUser = {
    name : 'Ashfakul Islam'
  }

  const adminUser : AdminUser = {
    name : 'Maharob Sazin',
    role : 'admin'
  }

  getUser(normalUser);
  getUser(adminUser);

  //
}
