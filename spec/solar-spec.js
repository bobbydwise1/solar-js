import { Planet, AgeMass, mvemjsunp } from '../src/solar.js';

describe("Solar", function(){
  var user_info;
  beforeEach(function() {
    user_info = new AgeMass(33,100); //Age 33, 100 Newtons
  });

  it ("Creates an object that has the user's Age and Weight", function(){
    expect(user_info.earthAge).toBe(33);
    expect(user_info.earthWeight).toBe(100);
  })

  it ("Converts 33 Earth years into Mercury Years", function(){
    expect(user_info.whatIsMyAgeOn(mvemjsunp[0].year)).toEqual(137.01701502204727);
  })

  it ("Converts 33 Earth years into Venus Years", function(){
    expect(user_info.whatIsMyAgeOn(mvemjsunp[1].year)).toEqual(53.641266714131056);
  })

  it ("Converts 33 Earth years into Mars Years", function(){
    expect(user_info.whatIsMyAgeOn(mvemjsunp[3].year)).toEqual(17.545538648036494);
  })

  it ("Converts 33 Earth years into Jupiter Years", function(){
    expect(user_info.whatIsMyAgeOn(mvemjsunp[4].year)).toEqual(2.78199291856348);
  })

  it ("Converts (Life Expectancy - 33  Earth years) into Years of all planets:", function(){
    expect(user_info.howManyPlanetYearsLeft(user_info.howManyEarthYearsLeft(1,1,1,1))).toEqual([110.44, 43.24, 26.6, 14.14, 2.24, 0.9, 0.32, 0.16, 0.11]);
  })


});
