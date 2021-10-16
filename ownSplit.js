String.prototype.ownSplit = function (split) {
    let poly = [];
    let res = "";
    for (let i = 0; i < str.length; i++) {
      let li = str[i];
      if (li === split || (split === "" && res)) {
        poly.push(res);
        res = "";
      }
      if (li !== split) {
        res += li;
      }
    }
    if (res) {
      poly.push(res);
      temp = "";
    }
    return poly;
  };
  
  let str = "26 04 1997 saturday 08 15";
  console.log("Polyfill of split", str.ownSplit(" "));
  
  
  console.log("Split method(Inbuilt)", str.split(" "));
  