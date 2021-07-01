import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Person from './js/galactic-age.js';

$(document).ready(() => {
  let user;
  $("form#userInput").submit((event) => {
    event.preventDefault();
    const age = parseInt($("input#ageInput").val());
    const planet = $("select#planetSelect").val();
    const gender = $("input:radio[name=genderRadio]:checked").val();
    const activityLevel = $("input:radio[name=activityRadio]:checked").val();

    user = new Person(age, gender, activityLevel);
    $("#galaxyAge").text(user.getGalaxyAge(planet));
    $("#lifeExpectancyResult").text(user.getGalaxyLifeExpectancy(planet));
    $("#results").show();
    $("#seeAllLink").show();
  });

  $("#seeAllLink").click(() => {
    $("tr#appendedTableRows").remove();
    $("#statsTable").show();
    for (const planet in user.galaxyAges) {
      $("#statsTable").append(`<tr id="appendedTableRows"><td>${planet}</td><td>${Math.round(user.galaxyAges[planet])}</td><td>${Math.round(user.galaxyLifeExpectancies[planet])}</td><td>${Math.round(user.galaxyLifeExpectancies[planet] - user.galaxyAges[planet])}</td></tr>`);
    }
  });
});