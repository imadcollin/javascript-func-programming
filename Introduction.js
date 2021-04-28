/******They can be assigned to variables***** */
const func1 = (msg) => {
  console.log(msg);
};

func1("Hello world");

/******They can be added to objectss****** */
const obj = {
  func2(msg) {
    console.group(msg);
  },
};

obj.func2("Hello world from the object");

/******They can be added to Array****** */
const arr = [(msg) => console.log(msg)];
arr[0]("Hello from Array");

/******They can be returned by functions****** */
const funcA = () => {
  return (msg) => console.log(msg);
};

const createFuncA = funcA();
createFuncA("Hello world returned from the funcA");

/****** Concat s****** */
const a = [1, 2, 3];
const b = [1, 2, 3].concat(4);
console.log("b", b);

const c = [...b, 5];
console.log("c", c);

/****** Filter s****** */
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const even = arr1.filter((x) => x % 2 === 0);

console.log("even numbers", even);

/****** Map s****** */
const multBy4 = arr1.map((x) => x * 4);
console.log("multBy4", multBy4);

/****** Map Index s****** */
const multByIndex = arr1.map((x, v) => x * v);
console.log("multByIndex", multByIndex);

/****** Reduce ****** */
const sun = arr1.reduce((el, index) => el + index);
console.log("sum", sun);
