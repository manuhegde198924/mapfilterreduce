Array.prototype.myReduce = function (callback) {
  let a = 0;
  for (let i = 0; i < this.length; i++) {
    callback((a = a + this[i]));
  }
  return a;
};
const arr = [5, 21, 61, 8, 1];
let result = arr.myReduce((acc, item) => acc + item);
console.log(result);
