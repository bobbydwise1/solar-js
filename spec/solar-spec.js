import { Solar, AgeMass } from '../src/solar.js';

describe("Solar", function(){
  var user_info;
  beforeEach(function() {
    user_info = new AgeMass(33,100); //Age 33, 100 Newtons
    );
  });

  it ( "Creates an object that has the user's Age and Weight", function(){
    expect(user_info.earthAge).toBe(33);
    expect(user_info.earthWeight).toBe(100);
  })

});
