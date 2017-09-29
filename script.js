//gör att javascripten körs när documentet har laddat färdigt
$(document).ready(function(){
  $(".knappner").click(function(){
    $(".cities, .cities").toggle();
  });
  $(".knappner").click(function(){
    $(".knappupp, .knappner").toggle();
  });
  $(".knappupp").click(function(){
    $(".cities, .cities").toggle();
  });
  $(".knappupp").click(function(){
    $(".knappupp, .knappner").toggle();
  });
});
var toolbar = mdc.toolbar.MDCToolbar.attachTo(document.getElementById('mdc-toolbar'));
toolbar.fixedAdjustElement = document.getElementById('toolbar-fixed');

var drawer = new mdc.drawer.MDCTemporaryDrawer(document.getElementById('drawer'));
document.getElementById('menu').addEventListener('click', () => drawer.open = true);
