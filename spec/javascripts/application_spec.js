require("/javascripts/jquery.js");
require("/javascripts/rails.js");
require("/javascripts/application.js");

describe("with main template", function() {
  template('application.html');

  describe("on load", function() {
    beforeEach(function() {
      ronin.init();
    });

    it("should set the section#content width with (window width - aside width - 60px)", function() {
      expect($("section#content").width()).toEqual($(window).width() - $("aside").width() - 60);
    });

    it("should set aside height as the ul#posts height", function() {
      expect($("aside").height()).toEqual(400);
    });
  });

  describe("when window is resized", function() {
    it("should update the section#content width", function() {
      $(window).resize();
      expect($("section#content").width()).toEqual($(window).width() - $("aside").width() - 60);
    });

    it("should update the aside height", function() {
      $(window).resize();
      expect($("aside").height()).toEqual(400);
    });
  });

});
