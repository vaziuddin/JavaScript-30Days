//Days 4
//Conditionals

let num =3
if (num >0 ){
  console.log(`${num} is a positive number`)
}

let isRaining = true
if (isRaining){
  console.log('Remember to take your rain coat.')
}
//If Else

let num1 =3
if(num1 > 0){
  console.log(`${num1} is a positive number`)
} else {
  console.log(`${num1} is a negative number`)
}

let isRaining1 =false
if(isRaining1){
  console.log('You need a rain coat.')
} else {
  console.log('No need for a rain coat.')
}

isRaining2 = false
if(isRaining){
  console.log('You need a rain coat.')
} else {
  console.log('No need for a rain coat.')
}
//If  Else if Else
let a=3
if(a>0){
  console.log(`${a} is a positive number`)
} else if (a < 0){
  console.log(`${a} is a negative number`)
} else if(a==0){
  console.log(`${a} is zero.`)
} else {
  console.log(`${a} is not a number`)
}

let weather = 'sunny'
if(weather=== 'rainy'){
  console.log('You  need a rain coat.')
} else if (weather === 'cloudy'){
  console.log('It might be cold you need a jacket.')
} else if(weather === 'sunny'){
  console.log('Go out freely.')
} else {
  console.log('No need for rain coat.')
}
//Switch
// let weather1 = 'cloudy'
// switch(weather1){
// case'rainy':console.log('You need a rain coat.') break
// case'cloudy':console.log('It might be cold , you need a jacket.') break
//   case'sunny':console.log('Go out freely.') break
//   default:console.log('No need for rain coat.')
// }

// let dayUserInput = prompt('What day is today ?')
// let day =dayUserInput.toLowerCase()
// switch(day) {
//   case 'monday':console.log('Today is Monday') break;
//     case'tuesday':console.log('Today is Tuesday') break;
//   case 'wednesday':console.log('Today is Wednesday') break
//   case 'thursday': console.log('Today is Thursday') break
//   case 'friday': console.log('Today is Saturday') break
//   case 'saturday': console.log('Today is Saturday') break
//   default:
//     console.log('It is not a week day.')
// }

let isRainingq = false
isRainingq ? console.log('You need a rain coat.'): console.log('No need for a rain coat.')