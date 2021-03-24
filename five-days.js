const array = Array()
console.log(array)

const arr1 = []
console.log(arr1)

const numbers = [0, 3.14, 9.81, 37, 98.6, 100]
const fruits = ['banana', 'orange', 'mango', 'lemon']
const vegatables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt']
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Node', 'MongDB']
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']

console.log('Numbers: ',numbers)
console.log('Number of numbers: ',numbers.length)
console.log('Fruits: ',fruits)
console.log('Number of fruits:',fruits.length)
console.log('Vegatables: ',vegatables)
console.log('Number of Vegatables:', vegatables.length)
console.log('Animal Products:',animalProducts)
console.log('Number of animalProducts:',animalProducts.length)
console.log('Web technologies:',webTechs)
console.log('Number of WebTeachs:',webTechs.length)
console.log('Countries: ',countries)
console.log('Number of Countries:',countries.length)
const arr= [
  'Vaziuddin',
  250,
  true,
  {country: 'Finland', city:'Helsinki'},
  {skills:['HTML', 'CSS', 'JS', 'React', 'Python']}
]
console.log(arr)

let firstFruits =fruits[0]
console.log(firstFruits)
secondFruit =fruits[1]
console.log(secondFruit)
let lastfruit = fruits[3]
console.log(lastfruit)
let lastIndex = fruits.length-1
lastFruit = fruits[lastIndex]
console.log(lastFruit)

console.log(numbers.length)
console.log(numbers)
console.log(numbers[0])
console.log(numbers[5])

let lastIndex1 = numbers.length-1;
console.log(numbers[lastIndex])

console.log(webTechs)
console.log(webTechs.length)
console.log(webTechs[0])
console.log(webTechs[5])
let lastIndexW = webTechs.length-1
console.log(webTechs[lastIndexW])

console.log(countries)
console.log(countries[0])
console.log(countries[4])

const shoppingCart = [
  'Milk',
  'Mango',
  'Tomato',
  'potato',
  'Avocado',
  'Meat',
  'Eggs',
  'Sugar'
]

console.log(shoppingCart)
console.log(shoppingCart[0])
console.log(shoppingCart[7])

let lastIndexS = shoppingCart.length-1;
console.log(shoppingCart[lastIndexS])

const eightEmptyValues = Array(8)
console.log(eightEmptyValues)

const eightXvalues = Array(8).fill('X')
console.log(eightXvalues)

const eight0values = Array(8).fill(0)
console.log(eight0values)

const four4values = Array(4).fill(4)
console.log(four4values)

const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)
console.log(thirdList)

const fruitsAndVegatables = fruits.concat(vegatables)
console.log(fruitsAndVegatables)

console.log(thirdList.indexOf(5))
console.log(thirdList.indexOf(0))
console.log(thirdList.indexOf(1))
console.log(thirdList.indexOf(6))

let indexb = fruits.indexOf('banana')
if(indexb != -1){
  console.log('This fruit does exist in the array')
} else {
  console.log('This fruit does not exist in the array')
}

indexb !=-1?console.log('This fruit does exist in the array') : console.log('This fruit does not in the array')

let indexOfAvocade = fruits.indexOf('avocade')
if(indexOfAvocade!=-1){
  console.log('This fruit does exist in the array')
} else {
  console.log('This fruit does not exist in the array')
}

console.log(thirdList.lastIndexOf(2))
console.log(thirdList.lastIndexOf(0))
console.log(thirdList.lastIndexOf(1))
console.log(thirdList.lastIndexOf(4))
console.log(thirdList.lastIndexOf(6))

console.log(thirdList.includes(5))
console.log(thirdList.includes(0))
console.log(thirdList.includes(1))
console.log(thirdList.includes(6))

console.log(webTechs.includes('Node'))
console.log(webTechs.includes('C'))

console.log(Array.isArray(numbers))
const number =100
console.log(Array.isArray(number))

console.log(numbers.toString())
console.log(countries.toString())
console.log(thirdList.join())

console.log(countries.join())
console.log(countries.join(''))
console.log(countries.join(' '))
console.log(countries.join(', '))
console.log(countries.join(' # '))

console.log(thirdList.slice())
console.log(thirdList.slice(0))
console.log(thirdList.slice(0, numbers.length))
console.log(thirdList.slice(1,4))
console.log(numbers.splice())
console.log(thirdList.splice(0,1))
console.log(thirdList.splice(3, 3, 7, 8, 9))
const number1 = [1, 2, 3, 4, 5, 6]
number1.push(7)
console.log(number1)
number1.pop()
console.log(number1)
fruits.push('apple')
console.log(fruits)
fruits.push('lime')
console.log(fruits)
number1.shift()
console.log(number1)
number1.unshift(0)
console.log(number1)
number1.reverse()
console.log(number1)
number1.reverse()
console.log(number1)
webTechs.sort()
webTechs.reverse()
const arrayOfArray = [[1, 2, 3], [1, 2, 3]]
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = [frontEnd, backEnd]
console.log(fullStack)
console.log(fullStack.length)
console.log(fullStack[0])
console.log(fullStack[1])