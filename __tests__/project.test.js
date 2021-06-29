import Person from '../src/js/planetary-age.js';

let person;
beforeEach(() => {
  person = new Person(30, 'Male', 'Activity');
});

describe('Person class constructor', () => {
  test('should correctly construct a person object with an earth age', () => {
    expect(person.earthAge).toEqual(30);
  });

  test('should correctly assign given gender and activity level to properties', () => {
    expect(person.gender).toEqual('Male');
    expect(person.activityLevel).toEqual('Activity');
  })