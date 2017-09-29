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
