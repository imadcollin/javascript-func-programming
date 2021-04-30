/****** Expressions ****** */
const message = function (hour) {
  if (hour < 12) {
    console.log("Good morning..!");
  } else console.log("Good evening");
};

message(10);
message(14);
message(22);

// Using FP you write:
const messageFP = (hour) =>
  hour < 12 ? console.log("Good morning..!") : console.log("Good evening");
message(10);
message(14);
message(22);

/****** High Order Functions ****** */
const consecutive = (array, fn) => {
  let res = [];
  for (let index = 0; index < array.length; index++) {
    res.push(fn(array[index], array[index + 1]));
  }
  return res;
};

const chars = ["a", "b", "c", "d"];
const pairs = consecutive(chars, (x, y) => [x, y]);
console.log(pairs);

/****** Method Chaining ****** */
const names = [
  { name: "alice", age: 23, budget: 450, currency: "US" },
  { name: "Axel", age: 44, budget: 250, currency: "EU" },
  { name: "Mars", age: 55, budget: 150, currency: "US" },
];

const totalAmount = names
  .filter((x) => x.currency === "US")
  .map((x) => x.budget)
  .reduce((b, v) => b + v)
  .toFixed(2);
console.log("The total amount of US dollar:", totalAmount);
