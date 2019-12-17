const { program, run } = require("./day2_1");

const findInput = () => {
  let found = [];
  for (let i = 0; i <= 99; i++) {
    for (let o = 0; o <= 99; o++) {
      const [value] = run(program, i, o);
      if (value === 19690720) {
        found = [i, o];
        break;
      }
    }
    if (found.length) {
      break;
    }
  }

  const [one, two] = found;

  return one * 100 + two;
};

exports.answer = findInput();
