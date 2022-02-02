const arrayNames = ["Guadalupe", "Ollie", "Aki"];
let newArray = [];
function writeCards(names,event) {
    for (let i = 0; i < names.length; i++) {
        newArray[i] = (`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return newArray;
}
writeCards();

function countDown() {
    for (let countDown = 10; countDown >= 0; countDown--) {
        console.log(countDown);
    }
    return countDown;
}
countDown();