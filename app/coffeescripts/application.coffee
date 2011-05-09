window.ronin = init: ->
  postsWidthDefiner()
  asideHeightDefiner()
  $(window).resize ->
    postsWidthDefiner()
    asideHeightDefiner()

$().ready ronin.init

window.postsWidthDefiner = ->
  $("section#content").width ->
    window_ = $(window).width()
    aside = $("aside").width()
    margins = 60
    window_ - aside - margins

window.asideHeightDefiner = ->
  $("aside").height($("ul#posts").height())
