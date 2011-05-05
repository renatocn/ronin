window.ronin = init: ->
  $("aside").height($("ul#posts").height())

$().ready ronin.init
