const glob = require("glob");
const path = require("path");

const answers = glob.sync("./day*.js").map(file => {
  const [, day, part] = file.match(/(\d)_(\d)/).map(val => +val);
  return {
    day,
    part,
    answer: require(path.resolve(file)).answer
  };
});

console.table(answers);
