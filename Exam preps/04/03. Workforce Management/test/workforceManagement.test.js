import { expect } from "chai";
import workforceManagement from "../workforceManagement.js";

describe('Test', () => {
    describe('Test recruitStaff functionality', () => {
        it('should throw error', () => {
            expect(() => workforceManagement.recruitStaff('Bob', 'worker', 2)).to.throw('We are not currently hiring for this role.')
        });

        it('should work correct', () => {
            expect(workforceManagement.recruitStaff('John', 'Developer', 4)).to.equal('John has been successfully recruited for the role of Developer.')
            expect(workforceManagement.recruitStaff('John', 'Developer', 7)).to.equal('John has been successfully recruited for the role of Developer.')
        });

        it('should return correct msg', () => {
            expect(workforceManagement.recruitStaff('Pesho', 'Developer', 2)).to.equal('Pesho is not suitable for this role.')
        })
    })

    describe('Test computeWages functionality', () => {
        it('should throw if param is negative or not number', () => {
            expect(() => workforceManagement.computeWages('12')).to.throw('Invalid hours');
            expect(() => workforceManagement.computeWages([])).to.throw('Invalid hours');
            expect(() => workforceManagement.computeWages(null)).to.throw('Invalid hours');
            expect(() => workforceManagement.computeWages(-5)).to.throw('Invalid hours');
        });

        it('should return correct salary', () => {
            expect(workforceManagement.computeWages(100)).to.equal(1800);
            expect(workforceManagement.computeWages(5.5)).to.equal(99);
            expect(workforceManagement.computeWages(161)).to.equal(4398);
            expect(workforceManagement.computeWages(1)).to.equal(18);
        });
    })

    describe('Test dismissEmployee  functionality', () => {
        it('should throw if invalid params', () => {
            expect(() => workforceManagement.dismissEmployee('hello', 5)).to.throw('Invalid input');
            expect(() => workforceManagement.dismissEmployee({}, 5)).to.throw('Invalid input');
            expect(() => workforceManagement.dismissEmployee(null, 5)).to.throw('Invalid input');
            expect(() => workforceManagement.dismissEmployee(['John', 'Max', 'George'], 5)).to.throw('Invalid input');
            expect(() => workforceManagement.dismissEmployee(['John', 'Max', 'George'], -5)).to.throw('Invalid input');
        });

        it('should return correct msg', () => {
            expect(workforceManagement.dismissEmployee(['John', 'Max', 'George'], 0)).to.equal('Max, George');
            expect(workforceManagement.dismissEmployee(['John', 'Max', 'George'], 1)).to.equal('John, George');
            expect(workforceManagement.dismissEmployee(['John', 'Max', 'George'], 2)).to.equal('John, Max');
        });
    })
})