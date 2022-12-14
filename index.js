function writeCards(names, event) {
const messages = []
    for (let i = 0; i < names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        messages.push(message);
    }
    return messages;
}
writeCards(names)

function countDown() {
    let myNumber = 10;
    while (myNumber >= 0) {
        console.log(myNumber--);
    }
}
countDown(myNumber);
