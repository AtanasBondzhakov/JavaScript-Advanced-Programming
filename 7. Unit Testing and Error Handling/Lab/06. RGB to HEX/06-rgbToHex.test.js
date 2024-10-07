import {expect} from 'chai';
import rgbToHexColor from './06-rgbToHex.js';

describe('Test', () => {
    it('should return undefined if any param is not int', () => {
        expect(rgbToHexColor(220, 100, '100')).to.equal(undefined);
        expect(rgbToHexColor(null, 100, 50)).to.equal(undefined);
        expect(rgbToHexColor(5, {}, 100)).to.equal(undefined);
        expect(rgbToHexColor([], undefined, 'hello')).to.equal(undefined);
    });
    it('should return undefined if any param is out of range', () => {
        expect(rgbToHexColor(-1, 10, 20)).to.equal(undefined);
        expect(rgbToHexColor(500, 10, 20)).to.equal(undefined);
        expect(rgbToHexColor(1, 333, 20)).to.equal(undefined);
        expect(rgbToHexColor(6, 10, 2000)).to.equal(undefined);
    });
    it('should return correct hex', () => {
        expect(rgbToHexColor(5, 5, 5)).to.equal('#050505');
        expect(rgbToHexColor(222, 0, 250)).to.equal('#DE00FA');
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });
});