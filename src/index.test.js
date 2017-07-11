/* eslint-disable no-unused-vars */
import { expect } from 'chai';
import checkWord from './index';

let testBoard = [];

describe('checkWord', () => {
  beforeEach(() => {
    testBoard = [
      ['E', 'A', 'R', 'A'],
      ['N', 'L', 'E', 'C'],
      ['I', 'A', 'I', 'S'],
      ['B', 'Y', 'O', 'R'],
    ];
  });
  describe('Some simple test', () => {
    it('should return true', () => {
      expect(checkWord(testBoard, 'C')).to.be.equal(true);
    });
    it('should return true', () => {
      expect(checkWord(testBoard, 'EAR')).to.be.equal(true);
    });
    it('should return true', () => {
      expect(checkWord(testBoard, 'BAILER')).to.be.equal(true);
    });
    it('should return false', () => {
      expect(checkWord(testBoard, 'EARS')).to.be.equal(false);
    });
  });
  describe('Must be able to check indefinite word lengths going in all directions', () => {
    it('should return true', () => {
      expect(checkWord(testBoard, 'RSCAREIOYBAILNEA')).to.be.equal(true);
    });
  });
  describe('Valid guesses can\'t overlap themselves', () => {
    it('should return true', () => {
      expect(checkWord(testBoard, 'CEREAL')).to.be.equal(false);
    });
  });
  describe('Valid guesses have to be adjacent', () => {
    it('should return true', () => {
      expect(checkWord(testBoard, 'ROBES')).to.be.equal(false);
    });
  });
  describe('All the letters have to be in the board', () => {
    it('should return true', () => {
      expect(checkWord(testBoard, 'BAKER')).to.be.equal(false);
    });
  });
  describe('Valid guesses cannot wrap around the edges of the board', () => {
    it('should return true', () => {
      expect(checkWord(testBoard, 'CARS')).to.be.equal(false);
    });
  });
  describe('Some more tests', () => {
    beforeEach(() => {
      testBoard = [
        ['L', 'H', 'A', 'R', 'R', 'G', 'A'],
        ['H', 'O', 'E', 'A', 'Y', 'C', 'L'],
        ['C', 'A', 'B', 'D', 'T', 'E', 'U'],
        ['C', 'N', 'A', 'Y', 'O', 'D', 'A'],
        ['R', 'O', 'K', 'T', 'L', 'I', 'R'],
        ['P', 'N', 'I', 'A', 'P', 'T', 'V'],
        ['G', 'M', 'S', 'E', 'M', 'R', 'S'],
      ];
    });
    describe('Valid guesses cannot wrap around the edges of the board', () => {
      it('should return true', () => {
        expect(checkWord(testBoard, 'STRIDE')).to.be.equal(true);
      });
    });
  });
});
