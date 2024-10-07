import { expect } from "chai";
import isSymmetric from "./05-checkForSymmetry.js";

describe('test', () => {
    it('should return false if incorrect param', () => {
        expect(isSymmetric('car')).to.equal(false);
        expect(isSymmetric(2)).to.equal(false);
        expect(isSymmetric(undefined)).to.equal(false);
    });
    it('should work correct if not symmetry', () => {
        expect(isSymmetric(['home', 'car'])).to.equal(false);
        expect(isSymmetric(['home', 'car', null])).to.equal(false);
        expect(isSymmetric(['home', 2, 3, {}])).to.equal(false);
    });
    it('should work correct if is symmetry', () => {
        expect(isSymmetric([2, 2])).to.equal(true);
        expect(isSymmetric(['5', 'car', '5'])).to.equal(true);
        expect(isSymmetric([8, 'car', 8])).to.equal(true);
    });
    it('should work correct with empty array', () => {
        expect(isSymmetric([])).to.equal(true);
    });
    it('should work correct with objects', () => {
        expect(isSymmetric([{ name: 'Pesho' }, { name: 'Pesho' }])).to.equal(true);
    });
})