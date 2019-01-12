import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import './styles.css';
import { Planet, AgeMass, mvemjsunp } from './solar.js';

$(document).ready(function() {
  $("#solarAgeForm").submit(function(event){
    event.preventDefault()
    $("input:checkbox[name=le]:checked").each(function(){let smoker = 1})
    $("input:checkbox[name=le]:checked").each(function(){let fat = 1})
    $("input:checkbox[name=le]:checked").each(function(){let diabetic = 1})
    $("input:checkbox[name=le]:checked").each(function(){let excercise = 1})
    console.log("made it: " + age + smoker + fat + diabetic + excercise)
  });
});
