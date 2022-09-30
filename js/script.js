function time() {
  let quantity = Number(prompt("Ведіть кількість хвилин."));
  let hours = Math.floor(quantity / 60);
  let minutes = quantity % 60;
  const normHours = String(hours).padStart(2, 0);
  const normMinutes = String(minutes).padStart(2, 0);
  const normalizeTime = `${normHours}:${normMinutes}`;

  // console.log(hours);
  // console.log(minutes);
  // console.log(normalizeTime);
  return normalizeTime;
}

console.log(time());
