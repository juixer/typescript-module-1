{
  // interface - generic

  interface Developer<T, X = null> {
    name: string;
    computer: {
      platform: string;
      price: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type Xiaomi = {
    brand: string;
    price: number;
  };

  const poorDev: Developer<Xiaomi> = {
    name: "SHanto",
    computer: {
      platform: "desktop",
      price: 100000,
    },
    smartWatch: {
      brand: "Xiaomi",
      price: 150,
    },
  };

  interface Apple {
    brand: string;
    price: number;
    heartbeat: boolean;
    sleepTracking: boolean;
  }

  interface Pulser {
    brand: string;
    model: string;
  }

  const riceDev: Developer<Apple, Pulser> = {
    name: "SHanto",
    computer: {
      platform: "desktop",
      price: 100000,
    },
    smartWatch: {
      brand: "apple",
      price: 15000,
      heartbeat: true,
      sleepTracking: true,
    },
    bike: {
        brand: 'BAJAJ',
        model : "Pulser"
    }
  };
}
