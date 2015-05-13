var Gtm = require("../../index");


describe("GTM object", function(){
  var gtm;

  beforeEach(function(){
    gtm = new Gtm("token");
  });

  it('Should be able to add property',function(){
    expect(typeof gtm.addProperty).toBe('function');
  });

  it("Should be able to add CIDR map", function(){
    expect(typeof gtm.addCidrMap).toBe('function');
  });

  it("Should be able to add GEO map", function(){
    expect(typeof gtm.addGeoMap).toBe('function');
  });

  it("Should be able to add datacenter", function(){
    expect(typeof gtm.addDataCenter).toBe('function');
  });


});
