// -----------------------------1 task------------------------------

// function time() {
//   let quantity = Number(prompt("Введіть кількість хвилин."));
//   let hours = Math.floor(quantity / 60);
//   let minutes = quantity % 60;
//   const normHours = String(hours).padStart(2, 0);
//   const normMinutes = String(minutes).padStart(2, 0);
//   const normalizeTime = `${normHours}:${normMinutes}`;

//   // console.log(hours);
//   // console.log(minutes);
//   // console.log(normalizeTime);
//   return normalizeTime;
// }

// console.log(time());

// -----------------------------2 task------------------------------

// const arr = ["BEST", "the", "foo", "is", "JS"];

// function magic(array) {
//   // const reversedArray = array.reverse();
//   // const removedItemIndex = array.indexOf("foo");
//   // const removedItem = reversedArray.splice(removedItemIndex, 1);
//   // const stringArray = reversedArray.join(" ");

//   // console.log(reversedArray);
//   // console.log(removedItemIndex);
//   // console.log(removedItem);
//   // console.log(stringArray);

//   // return stringArray;

//   return array
//     .reverse()
//     .slice(0, array.indexOf("foo"))
//     .concat(array.slice(array.indexOf("foo") + 1))
//     .join(" ");
// }

// console.log(magic(arr));

// -----------------------------3 task------------------------------

// function game() {
//   const max = 10;
//   const min = 0;
//   let yourNumber = null;
//   const bingo = Math.round(Math.random() * max - min + 1 + min);

//   do {
//     yourNumber = Number(prompt("Input your number"));
//     if (yourNumber === bingo) {
//       return console.log("You Won!!!");
//     } else if (yourNumber > bingo) {
//       console.log("Bingo is smaller then your number");
//     } else {
//       console.log("Bingo is bigger then your number");
//     }
//   } while (yourNumber !== bingo);
// }

// game();


// -------------taskAuto-----------------
// const taxiPark  = {
//     cars: [
//         { brand: 'Mazda', mileage: 17 },
//         { brand: 'Honda', mileage: 80 },
//         { brand: 'Nissan', mileage: 50 },
//     ],
//  getCars() {
//      return this.cars;
//  },
//  addCar(newCar) {
//         const limit = 100;
//      for (const car of this.cars) {
//          if ( car.brand === newCar.brand || newCar.mileage >= limit) {
//              return `Sorry! We don't need ${newCar.brand}!`;
//          }
//      }
//      this.cars.push(newCar);
//  },
//  removeCar(carName) {
//      // for (let i = 0; i < this.cars.length; i++) {
//      //  if (carName === this.cars[i].brand) {
//      //      return this.cars.splice(i, 1);
//      //  }
//         for(const car of this.cars){
//             let idx = this.cars.indexOf(car);
//             if (carName === this.cars[idx].brand) {
//                 console.log(idx);
//                      return this.cars.splice(idx, 1);
//         }
//      }
//      return `We don't have ${carName} in our taxi Park!`;
//  },
//  updateCarMileage(carName, newCarMileage) {
//      // for (let i = 0; i < this.cars.length; i++) {
//      //  if (carName === this.cars[i].brand) {
//      //      return (this.cars[i].mileage = newCarMileage);
//      //  }
//         for(const car of this.cars){
//             let idx = this.cars.indexOf(car);
//             if (carName === this.cars[idx].brand) {
//                 console.log(idx);
//                 return (this.cars[idx].mileage = newCarMileage);
//         }
//      }
//      return `No such ${carName} in our taxi Park - can't update mileage!`;
//  },
// };
// console.log(taxiPark.getCars());
// console.log(taxiPark.addCar({brand: 'Toyota', mileage: 40}));
// console.log(taxiPark.addCar({brand: 'Mazda', mileage: 10}));
// console.log(taxiPark.addCar({brand: 'Volvo', mileage: 109}));
// console.log(taxiPark.getCars());
// console.log(taxiPark.removeCar('Audi'));
// console.log(taxiPark.getCars());
// console.log(taxiPark.removeCar('Honda'));
// console.log(taxiPark.getCars());
// console.log(taxiPark.updateCarMileage('Nissan', 75));
// console.log(taxiPark.getCars());
// console.log(taxiPark.updateCarMileage('BMW', 36));
// console.log(taxiPark.getCars());
=======
// -----------------------------3 task fixed------------------------------

// function game() {
//   const max = 10;
//   const min = 1;
//   let yourNumber;
//   const bingo = Math.round(Math.random() * max - min + 1 + min);

//   do {
//     yourNumber = Number(prompt(`Input your number ${min} - ${max}!`));
//     if (yourNumber === bingo) {
//       alert(`You Won!!! Bingo is ${yourNumber}.`);
//     } else if (yourNumber > bingo) {
//       console.log(`Bingo is smaller then your number < ${yourNumber}`);
//     } else if (yourNumber < bingo) {
//       console.log(`Bingo is bigger then your number > ${yourNumber}`);
//     } else {
//       alert(`Bingo is a number ${min} - ${max}!`);
//     }
//   } while (yourNumber !== bingo);
// }

// game();
