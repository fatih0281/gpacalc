function calculateGPA() {
  var lesson1 = document.getElementById("lesson1").value;
  var lesson2 = document.getElementById("lesson2").value;
  var lesson3 = document.getElementById("lesson3").value;
  var lesson4 = document.getElementById("lesson4").value;
  var lesson5 = document.getElementById("lesson5").value;
  var lesson6 = document.getElementById("lesson6").value;
  var lesson7 = document.getElementById("lesson7").value;
  
  // Calculate the weight of each lesson
  var weight1 = 10/58;
  var weight2 = 10/58;
  var weight3 = 8/58;
  var weight4 = 12/58;
  var weight5 = 10/58;
  var weight6 = 8/58;
  
  // Calculate the weighted average of the first 6 lessons
  var weightedAvg = (lesson1 * weight1) + (lesson2 * weight2) + (lesson3 * weight3) + (lesson4 * weight4) + (lesson5 * weight5) + (lesson6 * weight6);

// Calculate the final GPA using the formula provided
var gpa = (weightedAvg * 0.4) + (lesson7 * 0.7);

// Display the result on the webpage
document.getElementById("result").innerHTML = gpa;
}
