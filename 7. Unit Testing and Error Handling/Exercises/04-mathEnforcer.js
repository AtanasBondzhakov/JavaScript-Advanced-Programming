describe('test math enforcer functionality', () => {
    describe('test addFive method', () => {
        it('should work correctly', () => {
            expect(mathEnforcer.addFive(null)).to.be.undefined;
            expect(mathEnforcer.addFive('null')).to.be.undefined;
            expect(mathEnforcer.addFive([])).to.be.undefined;
        });
        it('should work correctly', () => {
            expect(mathEnforcer.addFive(2)).to.equal(7);
            expect(mathEnforcer.addFive(-10)).to.equal(-5);
            expect(mathEnforcer.addFive(0.3)).to.equal(5.3);
        });
    });

    describe('test subtractTen method', () => {
        it('should work correctly', () => {
            expect(mathEnforcer.subtractTen(null)).to.be.undefined;
            expect(mathEnforcer.subtractTen('null')).to.be.undefined;
            expect(mathEnforcer.subtractTen([])).to.be.undefined;
        });
        it('should work correctly', () => {
            expect(mathEnforcer.subtractTen(2)).to.equal(-8);
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
            expect(mathEnforcer.subtractTen(100.1)).to.equal(90.1);
        });
    });

    describe('test sum method', () => {
        it('should work correctly', () => {
            expect(mathEnforcer.sum(null, 5)).to.be.undefined;
            expect(mathEnforcer.sum('null', [])).to.be.undefined;
            expect(mathEnforcer.sum([], 4)).to.be.undefined;
            expect(mathEnforcer.sum(3, 'egg')).to.be.undefined;
            expect(mathEnforcer.sum(1, undefined)).to.be.undefined;
            expect(mathEnforcer.sum(3.3, '')).to.be.undefined;
        });
        it('should work correctly', () => {
            expect(mathEnforcer.sum(2, 5)).to.equal(7);
            expect(mathEnforcer.sum(-10, -5)).to.equal(-15);
            expect(mathEnforcer.sum(1.1, 2)).to.equal(3.1);
            expect(mathEnforcer.sum(-2, 2)).to.equal(0);
            expect(mathEnforcer.sum(-2.2, 5.5)).to.equal(3.3);
        });
    });
})