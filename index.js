const sum = (a, b) => {
    return a + b;
}

const decorate = (text) => {
    return `Text is ${text}`;
}

const foo = () => console.log('foo()')

module.exports = {
    sum, decorate
}