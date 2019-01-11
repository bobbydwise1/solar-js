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
    expect(user_info.whatIsMyAgeOn(this.earthAge,mvemjsunp[0].year)).toBe(137.01701502204727);
  })

  it ("Converts 33 Earth years into Venus Years", function(){
    expect(user_info.whatIsMyAgeOn(this.earthAge,mvemjsunp[1].year)).toBe(53.641266714131056);
  })

  it ("Converts 33 Earth years into Mars Years", function(){
    expect(user_info.whatIsMyAgeOn(this.earthAge,mvemjsunp[3].year)).toBe(17.545538648036494);
  })

  it ("Converts 33 Earth years into Jupiter Years", function(){
    expect(user_info.whatIsMyAgeOn(this.earthAge,mvemjsunp[4].year)).toBe(2.78199291856348);
  })

});
