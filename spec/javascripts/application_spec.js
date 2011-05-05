require("/javascripts/jquery.js");
require("/javascripts/rails.js");
require("/javascripts/application.js");

describe("with main template", function() {
  template('application.html');

  describe("on load", function() {
    beforeEach(function() {
      ronin.init();
    });

    it("should set aside height as the ul#posts height", function() {
      expect($("aside").height()).toEqual(400);
    });
  });

});
