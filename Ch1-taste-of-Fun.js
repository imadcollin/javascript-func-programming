var _ = require("underscore");

/****** A Taste of Functional JavaScript  ****** */
function existy(x) {
  console.log(x != null);
}

existy(null);
existy(undefined);
existy({}.notHere);
existy((function () {})());

/** True */
existy(false);
existy(0);

/**Do when */
function doWhen(cond, action) {
  return cond ? action() : undefined;
}
function doIfHasFiled(target, name) {
  return doWhen(existy(target[name]), function () {
    let res = _.result(target, name);
    console.log(["The result is", res].join(" "));
  });
}
doIfHasFiled([1, 2, 3], "reverse");

/**Each */
_.each([1, 2, 3, 4], function (elem) {
  console.log(elem);
});
