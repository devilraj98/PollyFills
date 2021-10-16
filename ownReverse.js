let arr = [16, 10, 2021, "saturday", 8, 15];

Array.prototype.ownReverse = function () {
  let reverse = [];
  for (let i = this.length - 1; i >= 0; i--) {
    reverse.push(this[i]);
  }
  return reverse;
};

//let arr = [26, 04, 1997, "sat", 8, 15];
console.log("Polyfill of reverse", arr.ownReverse());


console.log("Reverse method(Inbuilt)", arr.reverse());
