import { expect } from 'chai';
import sum from './04-sumOfNumbers.js';

describe('Test', () => {
    it('should sum', () => {
        expect(sum([1, 3])).to.equal(4);
        expect(sum([])).to.equal(0);
        expect(sum([1, 3, 8])).to.equal(12);
    });
});