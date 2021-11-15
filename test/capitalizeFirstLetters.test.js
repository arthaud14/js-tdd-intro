const assert = require('assert');
const capitalizeFirstLetters = require('../capitalizeFirstLetters');

describe('capitalizeFirstLetters', () => {
    it('is a function that accepts one argument', () => {
        assert.strictEqual(typeof capitalizeFirstLetters, 'function');
    });
    it('transforms javaScript correctly', () => {
        assert.strictEqual(capitalizeFirstLetters('javaScript is good'), 'Javascript Is Good');
    });
    it('works for a 1-character string', () => {
        assert.strictEqual(capitalizeFirstLetters('z'), 'Z');
    });
    it('works for an empty string', () => {
        assert.strictEqual(capitalizeFirstLetters(''), '');
    });
});






