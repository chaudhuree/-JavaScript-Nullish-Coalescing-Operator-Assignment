// optional chaining
const users = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Bob', age: 35 },
];
console.log(users?.[0]) // {name: 'John', age: 30 }
console.log(users[0].name); // 'John'
console.log(users[3].name); // error
console.log(users[3]?.name); // undefined

// optional chaining operator in combination with the nullish coalescing operator (??) to provide a default value if the array element is not found:

console.log(users?.[0]?.name ?? 'Default Name'); // 'John'
console.log(users?.[3]?.name ?? 'Default Name'); // 'Default Name'


// The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand. It is a shorthand for checking for null or undefined before performing a default action.


const userName = userInput || 'default name';

// This code uses the logical OR operator (||) to provide a default value for userName if userInput is falsy (i.e., null, undefined, 0, an empty string, or false). However, this can cause problems if userInput is a falsy value that you want to store as a valid value.

// For example, if userInput is 0, the value of userName will be the string 'default name', which is not what we want. To avoid this problem, we can use the nullish coalescing operator instead:

const userName = userInput ?? 'default name';

// This will only assign 'default name' to userName if userInput is null or undefined. If userInput is any other falsy value, it will be preserved.

// The nullish coalescing operator can also be used in assignment statements. For example:

let userName;
userName = userInput ?? 'default name';
// This will assign the value of userInput to userName if it is not null or undefined, and will assign 'default name' to userName if userInput is null or undefined.


// more example:
// nullish coalescing assignment

let userName="chaudhuree"
userName ??="stranger" //if leftSide value (value of userName) is null then it will assign value "stranger" in the userName;

console.log(userName)  // "chaudhuree"

// second scenario
let userName=null
userName ??="stranger"

console.log(userName)  // "stranger"


// second example

const configDB=(options)=>{
  options.name ??="admin"
  options.password ??="admin"
  options.port ??=5001

  return options
}

console.log(configDB({port:8080}) // {name:"admin",password:"admin",port:8080}


// nullish operator

let arr = [0,1,2,3,4]

console.log(arr[5] ?? arr) //arr[5] is undefied so the result will be [0,1,2,3,4]

const arr = [0,1,2,3,4,5,6]
console.log(arr[5] ?? arr) //now arr[5] has value so the result is 5

// another example

const A=()=>{
  console.log("A was called")
  return undefined
}

const B=()=>{
  console.log("B was called")
  return false
}

const C=()=>{
  console.log("C was called")
  return "chaudhuree"
}

console.log( A() ?? C() ) 
//A was called
// C was called
// chaudhuree

console.log( B() ?? C() ) 
//B was called
// false

// desc: in first case it call both functin because left side function A() return undefined. so nullish coalescing operator works for undefined and null
//  in second case B() returns false. so it will not call A()


