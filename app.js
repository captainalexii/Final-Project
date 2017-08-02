$('document').ready(function(){
  $(.button).click(function(){
    $(.button).append.html(at the moment there are _____ )
  })


  $.getJSON('https://opensky-network.org/api/states/all')
  .done(function(results) {
    console.log(results);
