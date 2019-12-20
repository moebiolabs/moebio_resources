/**
 * returns a^a
 * @param  {Number} a number
 * @return {Number} result just pow(a, a)
 */
powerit = function(a) {
  return Math.pow(a, a);
};

/**
 * powerTwoNumbers
 * @param  {Number} a number
 * @param  {Number} b number
 * @return {Number} result just pow(a, b)
 */
powerTwoNumbers = function(a, b, c) {
  return Math.pow(a, b);
};

/**
 * returns nth fibonacci number
 * @param  {Number} nth position
 * @return {Number} result
 * tags:math
 */
fibonacci = function(n) {
  if(n<2) return 1;
  return mo.ObjectOperators.fibonacci(n-1)+mo.ObjectOperators.fibonacci(n-2);
};

logisticMap = function(r,x) {
  return r*x*(1-x);
};


logisticMapIteration = function(r,x) {
   return mo.ObjectOperators.logisticMap(r, x);
};


/**
 * dummy function that exemplifies multiple outputs, returns 2 numbers
 * @return {Number} value 1
 * @return {Number} value 2
 * tags:math
 */
multi = function() {
    var o = [
        {
            type: "Number",
            name: "value_1",
            description: "numeric value 1",
            value: 2
        },
        {
            type: "Number",
            name: "value_2",
            description: "numeric value 2",
            value: 3
        }
    ];
    o.isOutput = true;
    
    return o;
}