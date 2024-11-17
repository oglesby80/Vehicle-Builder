import Cli from "./classes/Cli.js";
import Truck from "./classes/Truck.js";
import Car from "./classes/Car.js";
import Motorbike from "./classes/Motorbike.js";
import Wheel from "./classes/Wheel.js";

// Initialize vehicles array
const vehicles: (Truck | Car | Motorbike)[] = [];

// Create a Truck instance
const truck1 = new Truck(
  Cli.generateVin(),
  "red",
  "Ford",
  "F-150",
  2021,
  5000,
  120,
  10000,
  [] // Default wheels will be initialized in the constructor
);

// Create a Car instance
const car1 = new Car(
  Cli.generateVin(),
  "blue",
  "Toyota",
  "Camry",
  2021,
  3000,
  130,
  []
);

// Create a Motorbike instance with custom wheels
const motorbike1 = new Motorbike(
  Cli.generateVin(),
  "black",
  "Harley Davidson",
  "Sportster",
  2021,
  500,
  125,
  [new Wheel(17, "Michelin"), new Wheel(17, "Michelin")]
);

// Add the created vehicles to the vehicles array
vehicles.push(truck1);
vehicles.push(car1);
vehicles.push(motorbike1);

// Initialize CLI with vehicles
const cli = new Cli(vehicles);

// Start the CLI
cli.startCli();

