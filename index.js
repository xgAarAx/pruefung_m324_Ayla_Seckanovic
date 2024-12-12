import chalk from 'chalk';

console.log(
  chalk.magenta(
    'It works',
  ),
);

const myUnusedVariable = 5;
console.log(
  'Using myUnusedVariable:',
  myUnusedVariable,
);

const x = 10;

if (
  x === 10
) {
  console.log(
    'x is 10',
  );
}
