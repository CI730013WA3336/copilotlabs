//generate function to add two numbers
function add(a, b) {
    return a + b;
}   
//export the function
module.exports = add;
//generate a testcase for the function
// Path: app.test.js
const add = require('./app');
test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});
    