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
