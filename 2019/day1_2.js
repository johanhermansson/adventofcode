const { input, calculateFuelRequirement } = require("./day1_1");

const calculateRealFuelRequirement = value => {
  let newValue = 0;
  let part = value;
  while (part) {
    part = calculateFuelRequirement(part);
    if (part < 0 || part === Infinity) part = 0;
    newValue += part;
  }
  return newValue;
};

const calculateRealTotalFuelRequirements = items =>
  items.map(calculateRealFuelRequirement).reduce((a, b) => a + b, 0);

exports.calculateRealFuelRequirement = calculateRealFuelRequirement;
exports.calculateRealTotalFuelRequirements = calculateRealTotalFuelRequirements;
exports.answer = calculateRealTotalFuelRequirements(input);
