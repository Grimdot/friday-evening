function polindromCecker(string) {
  return string === string.split('').reverse().join('');
}

console.log(polindromCecker('янесугусеня'));
