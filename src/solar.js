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

mercury = new Planet(0.240846, 0.5, 3.7);
venus = new Planet(0.615198, 1.92, 8.87);
earth = new Planet(1, 365.2425, 9.81);
mars = new Planet(1.88082, 686.971, 3.72076);
jupiter = new Planet(11.862, 10475.8, 24.79);
saturn = new Planet(29.4571, 24491.07, 10.44);
uranus = new Planet(84.0205, 42718, 8.69);
neptune = new Planet(164.8, 89666, 11.15);
pluto = new Planet(248, 90560, .62);

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
}
