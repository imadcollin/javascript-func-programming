
const _ = require("underscore");

/**Applicative Programming */
var nums = [1,2,3,4,5];

function doubleAll(arr){
  return _.map(arr,function(n){return n*2}); 
}
console.log(doubleAll(nums)); 

function avg(arr){
  let sum = _.reduce(arr, function(a,b){return a+b});
  return sum/_.size(arr); 
}

console.log(avg(nums))

function onlyEven(arr){
  return _.filter(arr, function(n){
    return (n%2)===0; 
  })
}

function onlyOdds(arr){
  return _.filter(arr,function(n){
return (n%2!=0)
  })
}
console.log(onlyEven(nums))
console.log(onlyOdds(nums))


/**Reduce */
function div(x,y){ return x/y; }

console.log(_.reduce(nums,div))
console.log(_.reduceRight(nums,div))

/**Find */
console.log(_.find(['a','b',3,'c'],_.isNumber))

/**Reject */
console.log(_.reject(['a','b',3,'c'],_.isNumber))

/**All */
console.log(_.all(['a','b',3,'c'],_.isNumber))

/**Any */
console.log(_.any(['a','b',3,'c'],_.isNumber))

/**sortBy, groupBy, and countBy */
let people = [{name: 'A', age:55, gender: 'male', salary: 200},
{name: 'B', age:22, gender: 'female', salary: 400}
,{name: 'C', age:77, gender: 'male', salary: 700}]
let sort1=_.sortBy(people, function(p){return p.age})
console.log(sort1)

let group=_.groupBy(people, function(p){return p.gender})
console.log(group)

let count=_.countBy(people, function(p){return p.salary})
console.log(count)