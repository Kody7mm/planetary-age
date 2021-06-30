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

  test('should correctly construct a person with a galaxy ages object', () => {
    expect(typeof(person.planetaryAges)).toEqual('object');
  });

  test('should correctly construct a person with a galaxy life expectancies object', () => {
    expect(typeof(person.galaxyLifeExpectancies)).toEqual('object');
  });
});

describe('Person.getGalacticAge()', () => {
  test('should correctly return the age of the user on a given planet', () => {
    expect(person.getGalacticAge('Mercury')).toEqual('You are 125 years old on Mercury.');
  });
});

describe('Person.getEarthLifeExpectancy()', () => {
  test('should correctly set an earth-age life expectancy if male and activity', () => {
    expect(person.getEarthLifeExpectancy()).toEqual(73.1);
  });

  test('should correctly set an earth-age life expectancy if not male and activity', () => {
    let nonMale = new Person(30);
    expect(nonMale.getEarthLifeExpectancy()).toEqual(81.1);
  });
});