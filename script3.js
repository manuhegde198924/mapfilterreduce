Array.prototype.myMap = function (callback) {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(callback(this[i]));
  }
  return arr;
};
const arr = [5, 2, 6, 8];
const r = arr.myMap((item) => item * 3);
console.log(r);
