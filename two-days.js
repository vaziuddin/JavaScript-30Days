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
//STRING METHODS
//let js1 = 'JavaScript'
console.log(js.length)
console.log(firstName.length)
let firstLetter = js[0]
console.log(firstLetter)
let secondLetter = js[1]
let thirdLetter = js[2]
let lastLetter = js[9]
console.log(lastLetter)
let lastIndex = js.length-1
console.log(lastIndex)
console.log(js[lastIndex])

//toUpperCase()
console.log(js.toUpperCase())
console.log(firstName.toUpperCase())
console.log(country.toUpperCase())
console.log(city.toUpperCase())
//toLowerCase()
console.log(js.toLowerCase())
console.log(firstName.toLowerCase())
console.log(country.toLowerCase())
console.log(city.toLowerCase())
//substr
console.log(js.substr(4, 6))
console.log(country.substr(3, 4))
//substring
console.log(js.substring(0, 4))
console.log(js.substring(4, 10))
console.log(js.substring(4))
console.log(country.substring(0, 3))
console.log(country.substring(3,5))
console.log(country.substring(3))
//Split
let string = '30 Days Of JavaScript'
console.log(string.split())
console.log(string.split(' '))
console.log(firstName.split())
console.log(firstName.split(''))
let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'
console.log(countries.split(','))
console.log(countries.split(', '))
//Trim
let str1 = '  30 Days Of JavaScript  '
console.log(str1)
console.log(str1.trim(' '))
let firstname = ' Asabeneh '
console.log(firstname)
console.log(firstname.trim())
//Includes
console.log(str1.includes('Days'))
console.log(str1.includes('days'))
console.log(str1.includes('Script'))
console.log(str1.includes('script'))
console.log(str1.includes('java'))
console.log(str1.includes('Java'))


console.log(country.includes('in'))
console.log(country.includes('In'))
console.log(country.includes('ind'))
console.log(country.includes('Ind'))

//Replace
console.log(string.replace('JavaScript', 'Python'))
console.log(country.replace('In', 'An In'))
//CharAt
console.log(js.charAt(0))
console.log(js.charAt(lastIndex))
//charCodeAt
console.log(js.charCodeAt(3))
console.log(js.charCodeAt(lastIndex))
//indexOf
console.log(str1.indexOf('3'))
console.log(str1.indexOf('Days'))
console.log(str1.indexOf('days'))
console.log(str1.indexOf('a'))
console.log(str1.indexOf('JavaScript'))
console.log(str1.indexOf('Script'))
console.log(str1.indexOf('script'))
//lastIndexOf
let strings = 'I love JavaScript. If you do not love JavaScript what else can you love'
console.log(strings.lastIndexOf('love'))
console.log(strings.lastIndexOf('you'))
console.log(strings.lastIndexOf('JavaScript'))
//concat
let day = '30'
console.log(day.concat("Days", "Of","JavaScript"))

console.log(country.concat("n"))
//startsWith
let str2 = 'Love is the best to in this World'
console.log(str2.startsWith('Love'))
console.log(str2.startsWith('love'))
console.log(str2.startsWith('world'))
console.log(country.startsWith('In'))
console.log(country.startsWith('in'))
console.log(country.startsWith('an'))
//endsWith
console.log(str2.endsWith('World'))
console.log(str2.endsWith('love'))
console.log(str2.endsWith('in this World'))
console.log(country.endsWith('ia'))
console.log(country.endsWith('in'))
console.log(country.endsWith('In'))
//search
console.log(strings.search('love'))
console.log(strings.search(/javascript/gi))
//Match
let love = 'love'
let patternOne = /love/
let patternTwo = /love/gi
console.log(strings.match('love'))
console.log(strings.match(patternTwo))
//repeat
console.log(love.repeat(10))