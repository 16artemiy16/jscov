const sum = (a, b) => {
    return a + b;
}

const decorate = (text) => {
    return `Text is ${text}`;
}

console.log(decorate(sum(10, 15)))