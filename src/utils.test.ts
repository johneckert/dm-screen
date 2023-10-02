import { splitAndTitleCase } from './utils';

describe('splitAndTitleCase', () => {
  describe('when given a single argument', () => {
    it('should split and title case a string', () => {
      expect(splitAndTitleCase('hello world')).toEqual('Hello World');
    });
  });

  describe('when given 2 arguments', () => {
    it('should split the first argument on the second argument', () => {
      expect(splitAndTitleCase('hello-world', '-')).toEqual('Hello World');
    });
  });

  describe('when given 3 arguments', () => {
    it('should split the first argument on the second argument and then rejoin with the third argument', () => {
      expect(splitAndTitleCase('hello-world', '-', '#')).toEqual('Hello#World');
    });
  });
});
