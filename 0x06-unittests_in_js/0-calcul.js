/**
 * Defines a function that adds two numbers
 * @param num a for the addition
 * @param num b to be added to a
 */

const calculateNumber = (a, b) => {
  const sum = Math.round(a) + Math.round(b);
  return sum;
};

module.exports = calculateNumber;
