let hasValue: boolean = false
let count: number = 10
let float: number = 3.14
let negative: number = -0.12
let single: string = 'hello'

console.log(typeof hasValue)
console.log(typeof count)
console.log(typeof float)
console.log(typeof negative)
console.log(typeof single)

const person: {
  name: string;
  age: number;
} = {
  name: 'Tanaka',
  age: 34
}

console.log(typeof person)

const fruits: string[] = [ 'apple', 'grape', 'banana' ]
const union: (string | number)[] = [ 'apple', 'grape', 'banana', 2 ]

console.log(typeof fruits) // Object
console.log(typeof union) // Object

// Tuple型
const book: [string, number, boolean] = ['bussiness', 1500, false]
console.log(typeof book) // Object