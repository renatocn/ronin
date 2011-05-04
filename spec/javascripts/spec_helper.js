function eventForSelectorHandler(selector, eventType) {
  var lives = jQuery.data(document, "events").live;
  for (var i = 0; i < lives.length; i++) {
    var live = lives[i];
    if ($(selector).is(live.selector)) {
      var event = $.Event(eventType);
      live.handler.call($(selector)[0], event);
      return event;
    }
  }
}

beforeEach(function() {
  this.addMatchers({
    toBeACarousel: function() {
      return this.actual.hasClass("jcarousel-list");
    },

    toBeACalendar: function() {
      return this.actual.hasClass("hasDatepicker");             
    },

    toBeClosed: function() {
      return !this.actual.dialog("isOpen");
    },

    toBeADialog: function() {
      return this.actual.parent().hasClass("ui-dialog");             
    },

    toBeASlider: function() {
      return this.actual.hasClass("ui-slider");             
    },

    toBeATextInput: function() {
      return this.actual.is(":text");
    },

    toBeDefaultPrevented: function() {
      return this.actual.isDefaultPrevented();                    
    },

    toBeHidden: function() {
      return this.actual.is(":hidden");             
    },

    toBeVisible: function() {
      return this.actual.is(":visible");             
    },
    
    toBeAStyleSelect: function() {
      return this.actual.parents("li").find("div").hasClass("selectMenu");
    },

    toHaveClass: function(className) {
      return this.actual.hasClass(className);             
    }
  });
});
