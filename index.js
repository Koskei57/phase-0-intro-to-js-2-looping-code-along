// Code your solutions in this file
/*for (let age = 30; age < 40; age++) {
console.log(`I'm ${age} years old. Happy birthday to me!`);
debugger;
}
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }

    return gifts;
}

wrapGifts(gifts);*/


const cards = (["Charlie", "Dennis", "Ali"], "birthday");

function writeCards(name, event) {
    let thankYouCards = []
    for (let i = 0; i < name.length; i++) {
        thankYouCards.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)

    }
    return thankYouCards
}
writeCards(["Charlie", "Dennis", "Ali"], "birthday");


function countDown(number) {
    while (number > 0) {
        console.log(number);
        number--;
    }
    console.log(number);
}