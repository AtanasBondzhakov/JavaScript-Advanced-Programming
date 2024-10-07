import { expect } from "chai";
import artGallery from "../artGallery.js";

describe('Test Art Gallery', () => {
    describe('test addWork functionality', () => {
        it('should throw if invalid params', () => {
            expect(() => artGallery.addArtwork(5, '5 x 5', 'orange')).to.throw('Invalid Information!');
            expect(() => artGallery.addArtwork('hello', '5 x 5', null)).to.throw('Invalid Information!');
            // expect(() => artGallery.addArtwork('', '5 x 5', 'black')).to.throw('Invalid Information!');
            // expect(() => artGallery.addArtwork('hello', '5 x 5', '')).to.throw('Invalid Information!');
        });

        it('should throw if invalid dimension', () => {
            expect(() => artGallery.addArtwork('car', [], 'white')).to.throw('Invalid Dimensions!');
            expect(() => artGallery.addArtwork('car', undefined, 'white')).to.throw('Invalid Dimensions!');
            expect(() => artGallery.addArtwork('car', '10 10', 'white')).to.throw('Invalid Dimensions!');
        });

        it('should throw if not allowed artist', () => {
            expect(() => artGallery.addArtwork('paint', '10 x 10', 'Pesho')).to.throw('This artist is not allowed in the gallery!');
            expect(() => artGallery.addArtwork('paint', '10 x 10', 'Gosho')).to.throw('This artist is not allowed in the gallery!');
            expect(() => artGallery.addArtwork('paint', '10 x 10', 'Pepa')).to.throw('This artist is not allowed in the gallery!');
        });

        it('should work correct', () => {
            expect(artGallery.addArtwork('Tree', '2 x 2', 'Van Gogh')).to.equal('Artwork added successfully: \'Tree\' by Van Gogh with dimensions 2 x 2.');
            expect(artGallery.addArtwork('House', '20 x 20', 'Picasso')).to.equal('Artwork added successfully: \'House\' by Picasso with dimensions 20 x 20.');
            expect(artGallery.addArtwork('Bird', '5 x 5', 'Monet')).to.equal('Artwork added successfully: \'Bird\' by Monet with dimensions 5 x 5.');
        })
    });

    describe('test calculateCosts functionality', () => {
        it('should throw if invalid params', () => {
            expect(() => artGallery.calculateCosts({}, 5, false)).to.throw('Invalid Information!');
            expect(() => artGallery.calculateCosts(2, null, true)).to.throw('Invalid Information!');
            expect(() => artGallery.calculateCosts(10, -5, false)).to.throw('Invalid Information!');
            expect(() => artGallery.calculateCosts(-1, 5, true)).to.throw('Invalid Information!');
            expect(() => artGallery.calculateCosts(2, 5, 'true')).to.throw('Invalid Information!');
            expect(() => artGallery.calculateCosts(-1, 5, undefined)).to.throw('Invalid Information!');
        });

        it('should sum correctly if sponsor is true', () => {
            expect(artGallery.calculateCosts(5, 10, true)).to.equal('Exhibition and insurance costs are 13.5$, reduced by 10% with the help of a donation from your sponsor.');
            expect(artGallery.calculateCosts(2.2, 4.4, true)).to.equal('Exhibition and insurance costs are 5.94$, reduced by 10% with the help of a donation from your sponsor.');
        });

        it('should sum correctly if sponsor is false', () => {
            expect(artGallery.calculateCosts(5, 10, false)).to.equal('Exhibition and insurance costs are 15$.');
            expect(artGallery.calculateCosts(2.2, 4.5, false)).to.equal('Exhibition and insurance costs are 6.7$.');
        });
    });

    describe('test organizeExhibits functionality', () => {
        it('should throw if invalid params', () => {
            expect(() => artGallery.organizeExhibits(10, 'string')).to.throw('Invalid Information!');
            expect(() => artGallery.organizeExhibits(10, -2)).to.throw('Invalid Information!');
            expect(() => artGallery.organizeExhibits(10.2, undefined)).to.throw('Invalid Information!');
            expect(() => artGallery.organizeExhibits(10, [])).to.throw('Invalid Information!');
            expect(() => artGallery.organizeExhibits(-1, 5)).to.throw('Invalid Information!');
            expect(() => artGallery.organizeExhibits(null, 5.5)).to.throw('Invalid Information!');
            expect(() => artGallery.organizeExhibits('car', 5)).to.throw('Invalid Information!');
            expect(() => artGallery.organizeExhibits({}, 5)).to.throw('Invalid Information!');
        });

        it('should calculate correct', () => {
            expect(artGallery.organizeExhibits(10, 2)).to.equal('You have 2 display spaces with 5 artworks in each space.');
            expect(artGallery.organizeExhibits(4, 4)).to.equal('There are only 1 artworks in each display space, you can add more artworks.');
        });
    });
});