let arr = [16, 10, 2021, "saturday", 08, 15];

Array.prototype.ownJoin = function (arg = "") {
  const arr1 = this;
  let join = "";
  for (let i = 0; i < arr1.length - 1; i++) {
    join += "" + arr1[i] + arg;
  }
  join += "" + arr1[arr1.length - 1];
  return join;
};

console.log("Polyfill of join", arr.ownJoin("-"));
console.log("Inbuilt", arr.join("-"));