describe('Testing lookupChar functionality', () => {
    it('should return undefined', () => {
        expect(lookupChar(2, 2)).to.equal(undefined);
        expect(lookupChar([], 8)).to.equal(undefined);
        expect(lookupChar(null, 3)).to.equal(undefined);
    });

    it('should return undefined', () => {
        expect(lookupChar('2', '2')).to.equal(undefined);
        expect(lookupChar('home', null)).to.equal(undefined);
        expect(lookupChar('home', 'home')).to.equal(undefined);
        expect(lookupChar('home', 2.2)).to.equal(undefined);
    });

    it('should return Incorrect index', () => {
        expect(lookupChar('home', 5)).to.equal('Incorrect index');
        expect(lookupChar('home', -1)).to.equal('Incorrect index');
        expect(lookupChar('home', 4)).to.equal('Incorrect index');
    });

    it('should return correct character', () => {
        expect(lookupChar('car', 2)).to.equal('r');
    });
});