function whatTimeIsIt() {
  const quantity = Number(prompt("Write amount of minutes"));
  const hours = Math.floor(quantity / 60);
  const minutes = quantity % 60;
  const doubleHours = String(hours).padStart(2, 0);
  const doubleMinutes = String(minutes).padStart(2, 0);

  console.log(`${doubleHours}:${doubleMinutes}`);
}

whatTimeIsIt();
