{
  const age = 17;

  if (age >= 18) {
    console.log("Adult");
  } else {
    console.log("Child");
  }

  // ternary operator

  const isAdult = age >= 18 ? "Adult" : "notAdult";

  console.log(isAdult);

  // nullish coalescing operator
  // emon condition ase j khan e null and undefined er upor vitti kore default value set korte hobe tokhon nullish operator use korte hobe

  const isAuthenticated = null;

  const result = isAuthenticated ?? "guest";

  console.log(result);

  // optional chain operator plus nullish operator
  const user: {
    name: string;
    address: {
      city: string;
      country: string;
      zipCode?: string;
    };
  } = {
    name: "Ashfakul Islam",
    address: {
      city: "Dhaka",
      country: "Bangladesh",
    },
  };

  const code = user?.address?.zipCode ?? "no code";

  console.log(code);
}
