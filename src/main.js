import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import './styles.css';
import { Planet, AgeMass, mvemjsunp } from './solar.js';

$(document).ready(function() {
  $("#solarAgeForm").submit(function(event){
    event.preventDefault()
    let age = $("#user_age").val();
    let smoker = $('input[type=checkbox]#smoker').prop('checked')*1;
    let fat = $('input[type=checkbox]#fat').prop('checked')*1;
    let diabetic = $('input[type=checkbox]#diabetic').prop('checked')*1;
    let excercise = $('input[type=checkbox]#excercise').prop('checked')*1;
    console.log("made it: " + age + smoker + fat + diabetic + excercise)

    let user_info = new AgeMass(age, 100);

    $("#output-mercury").text(user_info.whatIsMyAgeOn(mvemjsunp[0].year).toFixed(2));
    $("#output-venus").text(user_info.whatIsMyAgeOn(mvemjsunp[1].year).toFixed(2));
    $("#output-earth").text(user_info.whatIsMyAgeOn(mvemjsunp[2].year).toFixed(2));
    $("#output-mars").text(user_info.whatIsMyAgeOn(mvemjsunp[3].year).toFixed(2));
    $("#output-jupiter").text(user_info.whatIsMyAgeOn(mvemjsunp[4].year).toFixed(2));
    $("#output-saturn").text(user_info.whatIsMyAgeOn(mvemjsunp[5].year).toFixed(2));
    $("#output-uranus").text(user_info.whatIsMyAgeOn(mvemjsunp[6].year).toFixed(2));
    $("#output-neptune").text(user_info.whatIsMyAgeOn(mvemjsunp[7].year).toFixed(2));
    $("#output-pluto").text(user_info.whatIsMyAgeOn(mvemjsunp[8].year).toFixed(2));
    $("#output-lifeExpect").text(user_info.howManyEarthYearsLeft(smoker,fat,diabetic,excercise).toFixed(2));
  });
});
