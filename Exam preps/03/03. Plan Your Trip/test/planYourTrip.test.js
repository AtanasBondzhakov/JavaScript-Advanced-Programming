import { expect } from 'chai';
import planYourTrip from '../planYourTrip.js';

describe('Test', () => {
    describe('test choosingDestination functionality', () => {
        it('should throw if year is not 2024', () => {
            expect(() => planYourTrip.choosingDestination('Ski Resort', 'Summer', 2000)).to.throw('Invalid Year!');
        });
        it('should throw if destination is not Ski Resort', () => {
            expect(() => planYourTrip.choosingDestination('Mountain', 'Winter', 2024)).to.throw('This destination is not what you are looking for.');
        })
        it('should work correct', () => {
            expect(planYourTrip.choosingDestination('Ski Resort', 'Winter', 2024)).to.equal('Great choice! The Winter is the perfect time to visit the Ski Resort.')
        })
        it('should return correct msg', () => {
            expect(planYourTrip.choosingDestination('Ski Resort', 'Summer', 2024)).to.equal('Consider visiting during the Winter for the best experience at the Ski Resort.')
        })
    })

    describe('test exploreOptions functionality', () => {
        it('should throw if invalid params', () => {
            expect(() => planYourTrip.exploreOptions([], -1)).to.throw('Invalid Information!');
            expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 5)).to.throw('Invalid Information!');
            expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 2.2)).to.throw('Invalid Information!');
            expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], undefined)).to.throw('Invalid Information!');
            expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 'test')).to.throw('Invalid Information!');
            expect(() => planYourTrip.exploreOptions(null, 3)).to.throw('Invalid Information!');
            expect(() => planYourTrip.exploreOptions('car', 2)).to.throw('Invalid Information!');
            expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding"], 1.5)).to.throw('Invalid Information!');
            expect(() => planYourTrip.exploreOptions([], 0)).to.throw('Invalid Information!');
        })
        it('should return correct msg', () => {
            expect(planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 2)).to.equal('Skiing, Snowboarding');
            expect(planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 0)).to.equal('Snowboarding, Winter Hiking');
            expect(planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 1)).to.equal('Skiing, Winter Hiking');
        })
    })

    describe('test estimateExpenses functionality', () => {
        it('should throw if invalid params', () => {
            expect(() => planYourTrip.estimateExpenses('car', 2)).to.throw('Invalid Information!');
            expect(() => planYourTrip.estimateExpenses(-1, 2)).to.throw('Invalid Information!');
            expect(() => planYourTrip.estimateExpenses(0, 2)).to.throw('Invalid Information!');
            expect(() => planYourTrip.estimateExpenses(null, 2)).to.throw('Invalid Information!');
            expect(() => planYourTrip.estimateExpenses(5, -2)).to.throw('Invalid Information!');
            expect(() => planYourTrip.estimateExpenses(5, 0)).to.throw('Invalid Information!');
            expect(() => planYourTrip.estimateExpenses(5, 'black')).to.throw('Invalid Information!');
            expect(() => planYourTrip.estimateExpenses(5, {})).to.throw('Invalid Information!');
            expect(() => planYourTrip.estimateExpenses(undefined, [])).to.throw('Invalid Information!');
            expect(() => planYourTrip.estimateExpenses(0, 0)).to.throw('Invalid Information!');
            expect(() => planYourTrip.estimateExpenses(-5, -5)).to.throw('Invalid Information!');
        })
        it('should calc total cost', () => {
            expect(planYourTrip.estimateExpenses(5, 5)).to.equal('The trip is budget-friendly, estimated cost is $25.00.');
            expect(planYourTrip.estimateExpenses(5, 100)).to.equal('The trip is budget-friendly, estimated cost is $500.00.');
            expect(planYourTrip.estimateExpenses(5, 10.5)).to.equal('The trip is budget-friendly, estimated cost is $52.50.');
            expect(planYourTrip.estimateExpenses(1, 0.1)).to.equal('The trip is budget-friendly, estimated cost is $0.10.');
            expect(planYourTrip.estimateExpenses(5, 200)).to.equal('The estimated cost for the trip is $1000.00, plan accordingly.');
            expect(planYourTrip.estimateExpenses(1, 501)).to.equal('The estimated cost for the trip is $501.00, plan accordingly.');
            expect(planYourTrip.estimateExpenses(3, 1000.2)).to.equal('The estimated cost for the trip is $3000.60, plan accordingly.');
            expect(planYourTrip.estimateExpenses(10, 50.01)).to.equal('The estimated cost for the trip is $500.10, plan accordingly.');
            expect(planYourTrip.estimateExpenses(99.9, 5)).to.equal('The trip is budget-friendly, estimated cost is $499.50.');
            expect(planYourTrip.estimateExpenses(100.1, 5)).to.equal('The estimated cost for the trip is $500.50, plan accordingly.');
            expect(planYourTrip.estimateExpenses(10000, 100)).to.equal('The estimated cost for the trip is $1000000.00, plan accordingly.');
            expect(planYourTrip.estimateExpenses(100, 5)).to.equal('The trip is budget-friendly, estimated cost is $500.00.');
        })
    })
})