console.log('Hello World'[10])
console.log('12345'.length)
let str = 'David'
console.log(str[5 - 1])
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

let subscribed = false
let loggedIn = true

if (subscribed === true) {
    console.log('show the video')
}
else if (loggedIn === true) {
    console.log('tell the user to upgrade thier subscription')
}
else {
    console.log('tell user to log into the account')

}

let cash = 50
let price = 40
let difference = cash - price
let isStoreOpen = false

if (cash > price) {
    console.log(`You paid extra - here is ${difference} dollars change`)
}
else if (cash === price) {
    console.log("Thank you for your purchase we look forawrd to serving you again. Bye!")
}
else {
    console.log(`The amount paid is insufficient, amount owed is ${difference * -1} dollars`)
}


if (cash >= price) {
    console.log('we have enough cash to buy the products')
}
if (cash >= price && isStoreOpen) {
    console.log('Print the reciept')
}
else if (cash >= price && !isStoreOpen) {
    console.log('but the store is not open today')
}




