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

/****** Functions as First-Class Things  ****** */
let num = function () {
  return 42;
};
let num2 = [
  42,
  function () {
    return 42;
  },
];
var num3 = {
  number: 42,
  func: function () {
    return 42;
  },
};
var num4 =
  0 +
  (function () {
    return 42;
  })();
console.log(num());
console.log(num2[1]());
console.log(num3.func());
console.log(num4);

/**Comparator */
_.each([1, 2, 3, 4], function (sum) {
  let res = sum;
  res += sum;
  console.log(res);
});

_.each(["first", "second", "third"], function (word) {
  console.log(word.charAt(0).toUpperCase() + word.substr(1));
});

/**Imprative programming */
var lyrics = [];
for (var bottle = 15; bottle > 0; bottle--) {
  lyrics.push(bottle + " On the wall");
  lyrics.push(bottle + " Beer");
  lyrics.push(" Take one");
  if (bottle > 1) {
    lyrics.push(bottle - 1) + " Last";
  } else {
    lyrics.push("No more ");
  }
}

console.log(lyrics);
