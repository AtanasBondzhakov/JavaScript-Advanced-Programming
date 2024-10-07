describe('Testing isOddOrEven functionality', () => {
    it('Should return undefined if parameter is not string', () => {
        expect(isOddOrEven(10)).to.equal(undefined);
        expect(isOddOrEven([])).to.equal(undefined);
        expect(isOddOrEven({})).to.equal(undefined);
        expect(isOddOrEven(null)).to.equal(undefined);
    });

    it('Should return odd if parameter is string with odd length', () => {
        expect(isOddOrEven('hello')).to.equal('odd');
    });

    it('Should return even if parameter is string with even length', () => {
        expect(isOddOrEven('home')).to.equal('even');
    });
})