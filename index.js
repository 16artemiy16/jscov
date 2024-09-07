const sum = (a, b) => {
    return a + b;
}

const decorate = (text) => {
    return `Text is ${text}`;
}


module.exports = {
    sum, decorate
}

console.log(decorate(sum(10, 15)))