let word = 'JavaScript'
word[0] ='Y'

let numOne =3 
let numTwo = 3
console.log(numOne==numTwo)

let js = 'JavaScript'
let py = 'Python'

console.log(js==py)

let lightOn = true 
let lightOff = false
console .log(lightOn == lightOff)

let nums  = [1, 2, 3]
nums[0] =10

console.log(nums)
let nums1 = [1, 2, 3]
let numbers = [1, 2, 3]
console.log(nums1 == numbers)
console.log(nums1=== numbers)

let userOne = {
  name:'Vaziuddin',
  role:'teaching',
  country:'India'
}
let userTwo = {
  name : 'Vaziuddin',
  role : 'teaching',
  country : 'India'
}
console.log(userOne==userTwo)
console.log(userOne ===userTwo)

let nums2  = [1, 2, 3]
let numbers2 = nums2
console.log(nums2==numbers2)
console.log(nums2 === numbers2)

//NUMBERS
let age = 35
const gravity = 9.81
let mass = 72
const PI = 3.14

const biolingPoint = 100
const bodyTemp = 37
console.log(age, gravity, mass, PI, biolingPoint, bodyTemp)

//Math Object
const Pi = Math.PI
console.log(Pi)

console.log(Math.round(Pi))
console.log(Math.round(9.81))
console.log(Math.floor(Pi))
console.log(Math.ceil(Pi))
console.log(Math.min(-5, 3, 20, 4, 5, 10))
console.log(Math.max(-5, 3, 20, 4, 5, 10))
const randNum = Math.random()
console.log(randNum)
const num = Math.floor(Math.random()*11)
console.log(num)

console.log(Math.abs(-10))
console.log(Math.sqrt(100))
console.log(Math.sqrt(2))
console.log(Math.pow(3,2))
console.log(Math.E)
console.log(Math.log(2))
console.log(Math.log(10))

Math.sin(0)
Math.sin(60)
Math.cos(0)
Math.cos(60)

let randomNum = Math.random()
let numBtnZeroAndTen = randomNum*11
console.log(numBtnZeroAndTen)

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)

//STRINGS

let space = ' '
let firstName ='Vaziuddin'
let lastName = 'Mohammed'
let country = 'India'
let city = 'Hyderabad'
let language = 'Java'
let job = 'Software Developer'

let quote = "The saying, 'Seeing is Believing' is not correct in 2020"
let quoteWithBackTick = `The saying, 'Seeing is Believing' is not correct in 2020`

let fullName = firstName + space + lastName;

console.log(fullName)
let personInfoOne = fullName + '.I am '+ age + '. I live in'+ country;
console.log(personInfoOne)

const paragraph =" My name is Vaziuddin Mohammed. I live in India, Hyderabad.\
I am a teacher and I love software developer. I developer HTML, CSS, JavaScript, React, Redux, Node.js, Python, Data Analysis and D3.js for anyone is interesed to learn.\
In the end of 2019, I was thinking to expand my teaching and to reach\
to global audience and I started a Python challenge from Novermber 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and I hope you are enjoying too."

console.log(paragraph)

console.log('I hope everyone the 30 Days of JavaScript challenge. \n Do you?.')
console.log('Days \t Topics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash symbol (\\)')
console.log('In every programming language it starts with \"Hello, World!\"')

console.log("In every programming it start with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')
//TEMPLATE
console.log(`The sum of 2 and 3 is 5`)
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a+b}`)

let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.`
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. `
console.log(personInfoTwo)
console.log(personInfoThree)
let c = 2
let d = 3
console.log(`${c} is greater than ${d}:${c>d}`)