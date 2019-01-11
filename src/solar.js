export class Planet {
  constructor(year,day,gravity) {
  this.year = year;  //planet solar year in earth solar years
  this.day = day;  //planet solar day in relation to planet's year
  this.gravity = gravity;  //planet surface gravity in units of meters/sec/sec.
  }
  earthYear(earthYears) {
    return (earthYears/this.year);
  }
  earthDay(earthDays) {
    return (earthDays/this.day);
  }
  earthGravity(earthGravities) {
    return (earthGravities/this.gravity)
  }
}

let mercury = new Planet(0.240846, 0.5, 3.7);
let venus = new Planet(0.615198, 1.92, 8.87);
let earth = new Planet(1, 365.2425, 9.81);
let mars = new Planet(1.88082, 686.971, 3.72076);
let jupiter = new Planet(11.862, 10475.8, 24.79);
let saturn = new Planet(29.4571, 24491.07, 10.44);
let uranus = new Planet(84.0205, 42718, 8.69);
let neptune = new Planet(164.8, 89666, 11.15);
let pluto = new Planet(248, 90560, .62);

let mvemjsunp = [mercury,venus,earth,mars,jupiter,saturn,uranus,neptune,pluto];

export {mvemjsunp};

export class AgeMass {
  constructor(user_age,user_weight) {
    this.earthAge = user_age;
    this.earthWeight = user_weight;  //measured in newtons, which is mass*9.81 (m/s/s)
  }

  whatIsMyAgeOn(conversion_year) {
    return (this.earthAge/conversion_year);
  }

  whatIsMyWeightOn(conversion_weight) {
    return (this.earthWeight/9.81*conversion_weight);
  }

  howManyEarthYearsLeft(smoker,obese,diebetic,excercise,conversion_year) {
      let avgAgeDed = 78.6;
      if (smoker === true) {avgAgeDed = avgAgeDed - 7.5}
      if (obese === true) {avgAgeDed = avgAgeDed - 10}
      if (diebetic === true) {avgAgeDed = avgAgeDed - 8.5}
      if (excercise === true) {avgAgeDed = avgAgeDed + 7}
      let yearsLeft = avgAgeDed - this.earthAge;
      return yearsLeft;
    }


  }

  }
}
