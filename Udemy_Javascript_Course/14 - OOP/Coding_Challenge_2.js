/* 

------ Coding Challenge 2 ------

1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h
*/

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed = this.speed + 10;
    console.log(` '${this.make}' is going at ${this.speed} km/h `);
  }

  brake() {
    this.speed = this.speed - 5;
    console.log(` '${this.make}' is going at ${this.speed} km/h `);
  }

  set speedUS(_speed) {
    this.speed = _speed * 1.6;
    console.log(this.speed);
  }

  get speedUS() {
    console.log(this.speed);
    return this.speed / 1.6;
  }
}

const ford = new Car("Ford", 100);
console.log(ford);
ford.accelerate();
ford.brake();

//Setting Speed in Miles/Hour
ford.speedUS = 80;

console.log(ford.speedUS); // Getting the speed in Miles/Hour
