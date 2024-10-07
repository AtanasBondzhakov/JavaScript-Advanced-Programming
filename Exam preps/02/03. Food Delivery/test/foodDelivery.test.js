import {expect} from 'chai';
import foodDelivery from '../food delivery.js';

describe('Food delivery', () => {
    describe('Test getCategory functionality', () => {
        it('should return correct message', () => {
            expect(foodDelivery.getCategory('Vegan')).to.equal('Dishes that contain no animal products.');
            expect(foodDelivery.getCategory('Vegetarian')).to.equal('Dishes that contain no meat or fish.');
            expect(foodDelivery.getCategory('Gluten-Free')).to.equal('Dishes that contain no gluten.');
            expect(foodDelivery.getCategory('All')).to.equal('All available dishes.');
        });
        it('should throw if invalid param', () => {
            expect(() => foodDelivery.getCategory(undefined)).to.throw('Invalid Category!');
            expect(() => foodDelivery.getCategory(5)).to.throw('Invalid Category!');
            expect(() => foodDelivery.getCategory([])).to.throw('Invalid Category!');
        });
    });
    
    describe('Test addMenuItem functionality', () => {
        it('should return array length', () => {
            const availableItems = [];

            expect(foodDelivery.addMenuItem([{name: 'Carrot', price: 100}], 99)).to.equal(`There are ${availableItems.length} available menu items matching your criteria!`)
        });
        it('should throw if invalid params', () => {
            expect(() => foodDelivery.addMenuItem('array', 3)).to.throw('Invalid Information!');
            expect(() => foodDelivery.addMenuItem({}, 3)).to.throw('Invalid Information!');
            expect(() => foodDelivery.addMenuItem([{name: 'Carrot', price: 100}], 'car')).to.throw('Invalid Information!');
            expect(() => foodDelivery.addMenuItem([{name: 'Carrot', price: 100}], null)).to.throw('Invalid Information!');
            expect(() => foodDelivery.addMenuItem([], 8)).to.throw('Invalid Information!');
            expect(() => foodDelivery.addMenuItem([{name: 'Carrot', price: 100}], 1)).to.throw('Invalid Information!');
        })
    });

    describe('Test calculateOrderCost functionality', () => {
        it('should throw if invalid params', () => {
            expect(() => foodDelivery.calculateOrderCost(['standard'], ['sauce'], 5)).to.throw('Invalid Information!');
            expect(() => foodDelivery.calculateOrderCost(['standard'], 'sauce', false)).to.throw('Invalid Information!');
            expect(() => foodDelivery.calculateOrderCost(undefined, ['sauce'], true)).to.throw('Invalid Information!');
        });
        it('should return correct message', () => {
            expect(foodDelivery.calculateOrderCost(['express'], ['sauce'], true)).to.equal(`You spend $5.10 for shipping and addons with a 15% discount!`);
            expect(foodDelivery.calculateOrderCost(['express'], ['beverage'], false)).to.equal(`You spend $8.50 for shipping and addons!`);
            expect(foodDelivery.calculateOrderCost(['standard'], ['sauce'], true)).to.equal(`You spend $3.40 for shipping and addons with a 15% discount!`);
            expect(foodDelivery.calculateOrderCost(['standard'], ['beverage'], false)).to.equal(`You spend $6.50 for shipping and addons!`);
        });
    });
});