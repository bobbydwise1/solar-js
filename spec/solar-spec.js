import { Solar } from './../src/solar.js';

describe("Solar", function(){
  var haiku1;
  beforeEach(function() {
    solar = new Solar(1,1,1)
    );
  });

  it ( "determines whether line1 equals 5 syllables for haiku 1", function(){
    console.log(haiku1.syllableChecker1())
    expect(haiku1.syllableChecker1()).toBe(false)
  })

});
