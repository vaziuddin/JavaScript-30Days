//Days-6
//Loops
for(let i=0;i<=5;i++){
  console.log(i)
}
for(let i=5;i>=0;i--){
  console.log(i)
}
for(let i=0;i<=5;i++){
  console.log(`${i}*${i}=${i*i}`)
}

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway','Iceland']
const newArr = []
for(let i=0;i<countries.length;i++){
  newArr.push(countries[i].toUpperCase())
}
console.log(newArr)

const numbers = [1, 2, 3, 4, 5]
let sum =0
for(let i =0;i<numbers.length;i++){
  sum = sum+numbers[i]
}
console.log(sum)
const sqrArr=[]
for(let j=0;j<numbers.length;j++){
  sqrArr.push(j*j)
}
console.log(sqrArr)

const countArr = []
for(let i=0;i<countries.length;i++){
  countArr.push(countries[i].toUpperCase())
}
console.log(countArr)
//while loop
let k=0
while(k<5){
  console.log(k)
  k++
}

let i=0
do {
  console.log(i)
  i++
} while(i<5)

  //For of loop
const numbers1 = [1, 2, 3, 4, 5]
for( const num of numbers){
  console.log(num)
}
const numbers2 = [1, 2, 3, 4, 5]
for( const num of numbers2){
  console.log(num*num)
}

let sum1 =0
for(const num of numbers2){
  sum1 += sum1+ num
}
console.log(sum1)

const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB']
for(const tech of webTechs){
  console.log(tech.toUpperCase())
}

for(const tech of webTechs){
  console.log(tech[0])
}
const newArr1 = []
for(const country of countries){
  newArr1.push(country.toUpperCase())
}
console.log(newArr1)

for(let i=0;i<=5;i++){
  if(i==3){
    break
  }
  console.log(i)
}

for(let i=0;i<=5;i++){
  if(i==3){
    continue
  }
  console.log(i)
}