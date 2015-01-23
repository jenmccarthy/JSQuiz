var position = 0;
var test;
var test_status;
var question;
var choice;
var choices;
var chA;
var chB;
var chC;
var correct = 0;

var questions = [
  ["What is 5 + 5?", "12", "3", "10", "C"],
  ["What is 20 - 8?", "22", "12", "14", "B"],
  ["What is 4 x 5?", "20", "24", "16", "A"],
  ["Who was the first president of the US?", "Abraham Lincoln", "George Washington", "Rutheford B Hayes", "B"]
];

function _(x) {
  return document.getElementById(x);
}
function renderQuestion() {
  test = _("test");
  _("test_status").innerHTML = "Questions " +(position+1)+ " of "+questions.length;
  question = questions[position][0];
  chA = questions[position][1];
  chB = questions[position][2];
  chC = questions[position][3];
  test.innerHTML = "<h3>"+question+"</h3>";
  test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
  test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br><br>";
  test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer() {
  choices = document.getElementsByName("choices");
  for (var i=0; i<choices.length; i++) {
    if(choice[i].checked) {
      choice = choices[i].value;
    }
  }
  if(choice === questions[position][4]) {
    correct++;
  }
  pos++;
  renderQuestion();
}
window.addEventListener("load", renderQuestion, false);
