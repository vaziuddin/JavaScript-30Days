let isLightOn = true
let isRaining = false
let isHungry = false
let isMarried = true
let truValue =4>3
let falseValue = 4<3

let firstName
console.log(firstName)

let empty = null
console.log(empty)

//let firstName = 'Vaziuddin'
let country = 'India'

let numOne = 4
let numTwo = 3
let sum = numOne + numTwo
let diff = numOne - numTwo
let mult = numOne * numTwo
let remainder = numOne % numTwo
let powerOf = numOne ** numTwo

console.log(sum, diff, mult, remainder, powerOf)
const PI =3.14
let radius = 100
const areaOfCircle = PI * radius * radius
console.log(areaOfCircle)

const gravity = 9.81
let mass =72
const weight = mass * gravity
console.log(weight)
const boilingPoint =100
const bodyTemp = 37
console.log(`The boiling point of water is ${boilingPoint} oC.\nHuman body temperature is ${bodyTemp} oC.\nThe gravity of earth is ${gravity} m / s2.`)

console.log(3>2)
console.log(3>=2)
console.log(3<2)
console.log(2<3)
console.log(2<=3)
console.log(3!=2)
console.log(3==2)
console.log(3===2)
console.log(3!=2)
console.log(3==='3')
console.log(3!=='3')
console.log(3!=3)
console.log(3!==3)
console.log(0==false)
console.log(0===false)
console.log( 0=='')
console.log(0==' ')
console.log(0==='')
console.log(1==true)
console.log(1===true)
console.log(undefined ==null)
console.log(undefined===null)
console.log(NaN==NaN)
console.log(NaN===NaN)
console.log(typeof NaN)

console.log('mango'.length == 'avocade'.length)
console.log('mango'.length!='avocade'.length)
console.log('mango'.length < 'avocade'.length)
console.log('milk'.length== 'meat'.length)
console.log('milk'.length != 'meat'.length)
console.log('tomato'.length == 'potato'.length)
console.log('python'.length > 'dragon'.length)

//Logical Operators
const check = 4>3 && 10 > 5
const check2 = 4>3 && 10 <5
const check3 = 4<3 && 10<5

const check4 = 4>3 || 10>5
const check5 = 4>3||10<5
const check6 = 4<3||10<5

let check7 = 4>3
let check8 = !(4>3)
let isLightOn1 = true
let isLightOff = !isLightOn1
let issMarried = !false
//PRE-INCREMENT
let count=0
console.log(++count)
console.log(count)
//POST-INCREMENT
//let count1=0
console.log(count++)
console.log(count)
//Pre-decrement
let count3=0
console.log(--count3)
console.log(count3)
//Post-decrement
let count4 = 0
console.log(count4--)
console.log(count4)

//Ternary Operators
let issRaining = true
issRaining ?
  console.log('You need a rain coat.'):console.log('No need fora rain coat.')

let isssRaining = false
isssRaining?console.log('You need a rain coat.'):console.log('No need for a rain coat.')

let number =5
number > 0 ?console.log(`${number} is a positive number`):console.log(`${number} is a negative number`)
let number2 = -5
number2 > 0 ? console.log(`${number2} is a positive number`) : console.log(`${number2} is a negative number`)

//Windows Methods
// alert('Welcome to 30DaysOfJavaScript')

// let number4 = prompt('Enter number ', 'number goes here')
// console.log(number4)
// const agree = confirm('Are you sure you like to delete?')
// console.log(agree)

//Date Object

const now = new Date()
console.log(now)
console.log(now.getFullYear())
console.log(now.getDate())
console.log(now.getDay())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getSeconds())
console.log(now.getTime())
console.log(now.)
