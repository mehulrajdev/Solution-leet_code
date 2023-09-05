//2619. Array Prototype Last
Array.prototype.last = function () {
  return 0 === this.length ? -1 : this[this.length - 1];
};
