// JavaScript File

document.getElementById("submitguess").onclick = function() {
var times = document.getElementById("times");
var val = document.getElementById("val");
var answer = document.getElementById("answer");
var timesvalue = +times.value;
var valvalue = +val.value;
var answervalue = 0;

while (timesvalue > 0) {
  answervalue = (answervalue + valvalue);
  timesvalue = (timesvalue - 1);
}
alert("The answer is "+answervalue+"!");
};