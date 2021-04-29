/****** Reduce ****** */
const average = (arr) =>
  arr.reduce((el, index) => {
    return el + index;
  }, 0) / arr.length;

const arr = [20, 20, 20];
console.log(average(arr));

/****** ForEach ****** */
const names = [
  { name: "alice", age: 23 },
  { name: "Axel", age: 44 },
  { name: "Mars", age: 55 },
];

names.forEach((x) => console.log(` Name:${x.name} \t Age ${x.age}`));

/****** Find ****** */
console.log(
  "Mars obj:",
  names.find((x) => x.name === "Mars")
);

/****** FindIndex ****** */
console.log(
  "Mars Index:",
  names.findIndex((x) => x.name === "Mars")
);

/****** Every ****** */
if (names.every((x) => x.age > 0)) {
  console.log("positive numbers");
}

/****** Some ****** */
console.log(
  "Some people ages is more than 40?",
  names.some((x) => x.age > 40)
);
