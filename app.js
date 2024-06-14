console.log('Hello World'[10])
console.log('12345'.length)
// let str = 'David'
// console.log(str[5 - 1])
// console log the numbers 1 to 3
console.log('123')
/**
 * hi there
 * comments appreciated!
 */

let fullName = 'David Bowen'
let isRaining = true
let planet = 'Earth'


let celsius = 10;
let fahrenheit = celsius * 1.8 + 32;
console.log(fahrenheit);

let bool = '1' !== 1
console.log(bool)

/* CONDITIONALS */


// let cash = 50
// let price = 40
// let difference = cash - price
// let isStoreOpen = false

// if (cash > price) {
//     console.log(`You paid extra - here is ${difference} dollars change`)
// }
// else if (cash === price) {
//     console.log("Thank you for your purchase we look forawrd to serving you again. Bye!")
// }
// else {
//     console.log(`The amount paid is insufficient, amount owed is ${difference * -1} dollars`)
// }


// if (cash >= price) {
//     console.log('we have enough cash to buy the products')
// }
// if (cash >= price && isStoreOpen) {
//     console.log('Print the reciept')
// }
// else if (cash >= price && !isStoreOpen) {
//     console.log('but the store is not open today')
// }


// IN ORDER FOR IF STATEMENTS TO RUN THEY NEED TO BE A TRUTHY VALUE

// HOWEVER IN ORDER FOR AN ELSE STATEMENT TO RUN THE "IF" NEEDS TO BE A FALSY VALUE

// eg:

let val = "";

if (val) {
    console.log(!!val)
}
else {
    console.log(!!val)
}

// turnery operationals



let subscribed = true
let loggedIn = true

subscribed ? console.log('user is subscribed') : console.log('please subscribe to view the video')
let str = subscribed || loggedIn ? 'show the video' : 'hide the video'
console.log(str);

let hot = ""

hot ? console.log('weather is hot outside!') : console.log('its snowing!')


let cash = 40
let price = 40
let isStoreOpen = true

let str1 = cash >= price && isStoreOpen ? 'print reciept' : 'do not give reciept'
console.log(str1);

// LOLOOPS also DRY (DON'T REPEAT YOURSELF!)



// let count = 1

// while (count <=100) {
//     console.log(count)
//     count++;
// }


for (let i = 1; i <= 20 ; ++i ) {
    console.log(i);
    if (i % 3 === 0) {
     console.log(`${i} -> Frontend`)
    }
    else if (i % 5 === 0) {
     console.log(`${i} -> Simplified`)
    }
    else (i % 3 === 0 && i % 5 === 0) {
     console.log(`${i} -> Frontend Simplified`)
    }

}