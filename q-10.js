//2619. Array Prototype Last
Array.prototype.last = function () {
  return 0 === this.length ? -1 : this[this.length - 1];
};



/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */