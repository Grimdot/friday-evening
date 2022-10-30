function anagramChecker(firstString, secondString) {
  if (firstString.length !== secondString.length) {
    return false;
  }

  let sortedFirstString = firstString.toLowerCase();
  let sortedSecondString = secondString.toLowerCase();

  if (sortedFirstString === sortedSecondString) {
    return false;
  }

  return (
    [...firstString.toLowerCase()].sort().join() ===
    [...secondString.toLowerCase()].sort().join()
  );
}
