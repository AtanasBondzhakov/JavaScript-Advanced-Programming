import { expect } from "chai";
import streamingServiceSelector from "../streamingServiceSelector.js";

describe('Test', () => {
    describe('Test selectingContent functionality', () => {
        it('should throw if genre is not maintained', () => {
            expect(() => streamingServiceSelector.selectingContent('Movie', 'HBO', 'Fantasy')).to.throw('We currently support these genres: Action, Comedy, Drama, Thriller, Horror, Romance, Sci-Fi.');
            expect(() => streamingServiceSelector.selectingContent('Series', 'HBO', 'Action')).to.throw('We currently only support \'Movie\' or \'TV Show\' types.')
        });

        it('should return correct msg with valid inputs', () => {
            expect(streamingServiceSelector.selectingContent('Movie', 'HBO', 'Action')).to.equal(`You can watch this Action Movie on HBO. Enjoy your Action-filled experience!`)
            expect(streamingServiceSelector.selectingContent('TV Show', 'HBO', 'Comedy')).to.equal(`You can watch this Comedy TV Show on HBO. Enjoy your Comedy-filled experience!`)
            expect(streamingServiceSelector.selectingContent('Movie', 'HBO', 'Drama')).to.equal(`You can watch this Drama Movie on HBO. Enjoy your Drama-filled experience!`)
            expect(streamingServiceSelector.selectingContent('Movie', 'HBO', 'Horror')).to.equal(`You can watch this Horror Movie on HBO. Enjoy your Horror-filled experience!`)
            expect(streamingServiceSelector.selectingContent('TV Show', 'HBO', 'Romance')).to.equal(`You can watch this Romance TV Show on HBO. Enjoy your Romance-filled experience!`)
            expect(streamingServiceSelector.selectingContent('Movie', 'HBO', 'Sci-Fi')).to.equal(`You can watch this Sci-Fi Movie on HBO. Enjoy your Sci-Fi-filled experience!`)
        });
    })

    describe('Test availablePlatforms functionality', () => {
        it('should throw if invalid params', () => {
            expect(() => streamingServiceSelector.availablePlatforms({}, 3)).to.throw('Invalid platform selection.');
            expect(() => streamingServiceSelector.availablePlatforms(2, 3)).to.throw('Invalid platform selection.');
            expect(() => streamingServiceSelector.availablePlatforms(null, 3)).to.throw('Invalid platform selection.');
            expect(() => streamingServiceSelector.availablePlatforms('car', 3)).to.throw('Invalid platform selection.');
            expect(() => streamingServiceSelector.availablePlatforms(['HBO', 'Cinemax', 'Netflix'], -1)).to.throw('Invalid platform selection.');
            expect(() => streamingServiceSelector.availablePlatforms(['HBO', 'Cinemax', 'Netflix'], 2.2)).to.throw('Invalid platform selection.');
            expect(() => streamingServiceSelector.availablePlatforms(['HBO', 'Cinemax', 'Netflix'], 5)).to.throw('Invalid platform selection.');
            expect(() => streamingServiceSelector.availablePlatforms(['HBO', 'Cinemax', 'Netflix'], 'car')).to.throw('Invalid platform selection.');
            expect(() => streamingServiceSelector.availablePlatforms(['HBO', 'Cinemax', 'Netflix'], [])).to.throw('Invalid platform selection.');
            expect(() => streamingServiceSelector.availablePlatforms(['HBO', 'Cinemax', 'Netflix'], undefined)).to.throw('Invalid platform selection.');
        });

        it('should return msg with correct platforms', () => {
            expect(streamingServiceSelector.availablePlatforms(['HBO', 'Cinemax', 'Netflix'], 2)).to.equal('Other available platforms are: HBO, Cinemax.')
            expect(streamingServiceSelector.availablePlatforms(['HBO', 'Cinemax', 'Netflix'], 1)).to.equal('Other available platforms are: HBO, Netflix.')
            expect(streamingServiceSelector.availablePlatforms(['HBO', 'Cinemax', 'Netflix'], 0)).to.equal('Other available platforms are: Cinemax, Netflix.')
        });
    })

    describe('Test contentRating functionality', () => {
        it('should throw if invalid params', () => {
            expect(() => streamingServiceSelector.contentRating(-5, 5)).to.throw('Invalid runtime or rating.');
            expect(() => streamingServiceSelector.contentRating(20, -5)).to.throw('Invalid runtime or rating.');
            expect(() => streamingServiceSelector.contentRating(20, 11)).to.throw('Invalid runtime or rating.');
        })

        it('should return msg in rating is >= 7', () => {
            expect(streamingServiceSelector.contentRating(30, 7)).to.equal('This content is highly rated (7/10) and has a runtime of 0.50 hours. Enjoy your watch!')
            expect(streamingServiceSelector.contentRating(15, 10)).to.equal('This content is highly rated (10/10) and has a runtime of 0.25 hours. Enjoy your watch!')
        });
        
        it('should return msg in rating is < 7', () => {
            expect(streamingServiceSelector.contentRating(30, 6)).to.equal('This content has a lower rating (6/10) and runs for 0.50 hours. You might want to check reviews first.')
            expect(streamingServiceSelector.contentRating(15, 0)).to.equal('This content has a lower rating (0/10) and runs for 0.25 hours. You might want to check reviews first.')
        });
    })
})