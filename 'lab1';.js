'use strict';

// part 1
{
const inc = (n) =>  n + 1;
const x = 10;
const y = inc(x);
console.dir({ x, y, });
}

// part 2
{
const inc = (num) => {
    num.n++;
};
const obj = { n: 10 };
inc(obj);
console.dir(obj);
}
// part 3
{
const data = [
  true, 'hello', 5, 12, -200, false, 'word',
  3.14, null, undefined, 'bibiq', 42, true,
  { name: 'Vyacheslove' }, [1, 2, 3], Symbol('id'), 10n,
  NaN, Infinity, 'abc', () => {},
];
const counts = {
  number: 0,
  string: 0,
  boolean: 0,
  object: 0,
  undefined: 0,
  symbol: 0,
  bigint: 0,
  function: 0,
};
for (const item of data) {
  const type = typeof item;
  counts[type]++;
}
console.dir(counts);
}
// part 4
{
const data1 = [
   true, 'hello', 5, 12, -200, false, 'word',
  3.14, null, undefined, 'bibiq', 42, true,
  { name: 'Vyacheslove' }, [1, 2, 3], Symbol('id'), 10n,
  NaN, Infinity, 'abc', () => {},
];

const counts1 = {};

for (const item of data1) {
  const type = typeof item;
  counts1[type] = (counts1[type] ?? 0) + 1;
}

console.dir(counts1);
}
debugger;
