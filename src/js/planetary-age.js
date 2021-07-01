export default class Person {
  constructor(age, gender, activityLevel) {
    this.earthAge = age;
    this.gender = gender;
    this.activityLevel = activityLevel;
    this.galaxyAges = this.setGalaxyAges();
    this.galaxyLifeExpectancies = this.setGalaxyLifeExpectancies();
  }

  convertSolarYears(earthYears) {
    const solarYears = {
      'Mercury':   .24,
      'Venus':     .62,
      'Earth':       1,
      'Mars':     1.88,
      'Jupiter': 11.86
    };
    let converted = {};
    for (const planet in solarYears) {
      converted[planet] = earthYears / solarYears[planet];
    }
    return converted;
  }