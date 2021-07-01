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

describe('Person.setGalaxyAges()', () => {
  test('should correctly calc age on Mercury and add to galaxyAges', () => {
    person.setGalaxyAges();
    expect(person.galaxyAges['Mercury']).toBeCloseTo(125);
  });

  test('should correctly calc age on Venus and add to galaxyAges', () => {
    person.setGalaxyAges();
    expect(person.galaxyAges['Venus']).toBeCloseTo(48.387);
  });

  test('should correctly calc age on Mars and Jupiter and add to galaxyAges', () => {
    person.setGalaxyAges();
    expect(person.galaxyAges['Mars']).toBeCloseTo(15.957);
    expect(person.galaxyAges['Jupiter']).toBeCloseTo(2.53);
  });
});

describe('Person.getGalaxyAge()', () => {
  test('should correctly return the age of the user on a given planet', () => {
    person.setGalaxyAges();
    expect(person.getGalaxyAge('Mercury')).toEqual('You are 125 years old on Mercury.');
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

describe('Person.setGalaxyLifeExpectancies()', () => {
  test('should correctly return an object of galaxy life expectancies', () => {
    const galaxyLifeExpectancies = person.setGalaxyLifeExpectancies();
    expect(galaxyLifeExpectancies['Earth']).toEqual(73.1);
  });
});

describe('Person.getGalaxyLifeExpectancy()', () => {
  test('should correctly return a life expectancy on a given planet', () => {
    expect(person.getGalaxyLifeExpectancy('Mercury')).toEqual('Based on your gender and activity level, on Mercury you will live 180 more years.');
  });

  test('should correctly return a message for one who has outlived their life expectancy', () => {
    let newPerson = new Person(78.1, 'Male', 'Activity');
    expect(newPerson.getGalaxyLifeExpectancy('Mercury')).toEqual('Based on your gender and activity level, you have outlived your life expectancy on Mercury by 21 years.');
  });
});