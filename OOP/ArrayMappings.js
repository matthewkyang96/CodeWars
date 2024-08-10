Array.prototype.map = function (cb) {
  let arr = [];
  this.forEach((ele) => {
    arr.push(cb(ele));
  });
  return arr;
};
