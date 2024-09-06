const sum = (a, b) => {
    return a + b;
}

const decorate = (text) => {
    return `Text is ${text}`;
}

const div = (a, b) => a/b;

module.exports = {
    sum, decorate, div
}

console.log(decorate(sum(10, 15)))