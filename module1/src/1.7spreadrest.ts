{
  // spread operator

  const bros1: string[] = ["Sifat", "Ahnaf", "Sid"];

  const bros2: string[] = ["Sazin", "Raadin", "Arian"];

  bros1.push(...bros2);

  const gamingBuddy1: {
    valorant: string;
    fortnite: string;
    apex: string;
  } = {
    valorant: "Sifat",
    fortnite: "Sazin",
    apex: "Arian",
  };

  const gamingBuddy2 : {
    cs : string;
    genshin : string;
    devour : string;
  } = {
    cs: 'Mahin',
    genshin: 'Raadin',
    devour: 'Ishmam'
  }


  const gameBuddyList = {
    ...gamingBuddy1,
    ...gamingBuddy2
  }



  // rest operator

  const greetFriends = (...friends : string[]) :void => {

        friends.forEach( (friend: string) => {
            console.log(`Hi ${friend}`);
        })
  }

  greetFriends('Sazin', 'Raadin', 'Arian', 'Sifat')

}
