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
