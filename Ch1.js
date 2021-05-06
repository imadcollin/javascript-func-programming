var _ = require("underscore");

/****** JavaSriprt Functional Programming  ****** */
function splat(fun) {
  return function run(array) {
    return fun.apply(null, array);
  };
}
const addEl = splat(function (x, y) {
  return x + y;
});

console.log("1 + 2= ", addEl([1, 2]));

function unsplat(fun) {
  return function () {
    return fun.call(null, _.toArray(arguments));
  };
}
const joinEl = unsplat(function (array) {
  return array.join(",");
});

console.log(joinEl(1, 2));

/****** Functions as Units of Abstraction  ****** */

function parseAge(age) {
  if (!_.isString(age)) {
    console.log("String is expected...!");
    return 0;
  }
  let a = parseInt(age, 10);
  if (_.isNaN(a)) {
    console.log("can not be parced", age).join(" ");
    a = 0;
  }
  return a;
}
console.log(parseAge(40));
console.log(parseAge("40"));

/*Warnings */

function warn(thing) {
  console.log(["WARNING:", thing].join(" "));
}

function note(thing) {
  console.log(["NOTE:", thing].join(" "));
}
warn();

note();

/* Nth */
console.log("*****************\n");
function nth(a, index) {
  if (!_.isNumber(index)) console.log("not number");
  if (index < 0 || index > a.length - 1) console.log(" Out of the bound");
  console.log(a[index]);
}

nth([1, 2, 3, 4, 5], 2);
nth([1, 2, 3, 4, 5], "2");
nth([1, 2, 3, 4, 5], 20);

/**Sort */
const s1 = [1, 2, 45, 6, 3, 7].sort(function (x, y) {
  if (x > y) return 1;
  if (x < y) return -1;
  return 0;
});
console.log(s1);

/****** Data as Abstraction  *******/
function lameCVS(str) {
  return _.reduce(
    str.split("\n"),
    function (table, row) {
      table.push(
        _.map(row.split(","), function (c) {
          return c.trim();
        })
      );
      return table;
    },
    []
  );
}
const table = lameCVS("name, age, hair\nBob, 25, black\nAlice, 45, grey");
console.log(table);

function sortNames(table) {
  return _.rest(_.map(table, _.first));
}
function sortAges(table) {
  return _.rest(_.map(table, _.second));
}

const sortTableByNames = sortNames(table);
console.log(sortTableByNames);

const sortTableByAges = sortAges(table);
console.log(sortTableByAges);
