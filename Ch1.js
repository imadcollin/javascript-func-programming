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
