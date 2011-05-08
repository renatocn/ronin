window.ronin = init: ->
  postsWidthDefiner()
  $("aside").height($("ul#posts").height())

$().ready ronin.init

window.postsWidthDefiner = ->
  $("section#content").width ->
    window_ = $(window).width()
    aside = $("aside").width()
    margins = 40
    window_ - aside - margins
