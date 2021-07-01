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

  setGalaxyAges() {
    return this.convertSolarYears(this.earthAge);
  }

  getGalaxyAge(planet) {
    return `You are ${Math.round(this.galaxyAges[planet])} years old on ${planet}.`;
  }

  getEarthLifeExpectancy() {
    let earthLifeExpectancy = 81.1;
    if (this.gender === 'Male') {
      earthLifeExpectancy -= 5;
    }
    if (this.activityLevel === 'Activity') {
      earthLifeExpectancy -= 3;
    }
    return earthLifeExpectancy;
  }

  setGalaxyLifeExpectancies() {
    return this.convertSolarYears(this.getEarthLifeExpectancy());
  }

  getGalaxyLifeExpectancy(planet) {
    const yearsToLive =  Math.round(this.galaxyLifeExpectancies[planet] - this.galaxyAges[planet]);
    if (yearsToLive >= 0) {
      return `Based on your gender and activity level, on ${planet} you will live approximately ${yearsToLive} more years.`;
    } else {
      return `Based on your gender and activity level, you have outlived your life expectancy on ${planet} by ${Math.abs(yearsToLive)} years.`;
    }
  }
}