$('document').ready(function() {
  console.log("Yo!");
  $(".button").click(function() {
    $.getJSON('https://opensky-network.org/api/states/all')
      .done(function(results) {
        var totalNumFlights = results.states.length;
        var flightCountByCountry = {};
        var output = "<ul>"
        for (var i = 0; i < results.states.length; i++) {
          if (flightCountByCountry[results.states[i][2]]) {
            flightCountByCountry[results.states[i][2]]++;
          } else {
            flightCountByCountry[results.states[i][2]] = 1;
          }

        }

        for (country in flightCountByCountry) {
          (output += "<li>" + country + " " + ":" + " " + flightCountByCountry[country] + "</li>");
        }


        $("#total").append("There are currently " + totalNumFlights + " planes flying into the U.S. at the moment.");


        output += "</ul>"
        console.log(results);
        console.log("totalNumFlights: ", totalNumFlights);
        console.log(flightCountByCountry);
        console.log(output);
        $("#results").append(output)

      })
  })
  $("li").click(function() {

  })
})






// insert vvvv
// https://opensky-network.org/api/states/all
// ^^^ into postman
