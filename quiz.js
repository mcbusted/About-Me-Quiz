var userName = readlineSync.question("What is your name ?");

console.log("Hello ",userName);

var Gaurav =
{
  name: 'Gaurav',
  company : 'KPMG',
  age : 23
  
}   

var highscores =
[
  {
    name:'gaurav',
    score:3
  }
]

var questions =
[
  {
    question: "What is Gaurav's age :",
    answer: 23,
  },
  {
    question: "Which company does he work in ? :",
    answer: "KPMG",
  },

  {
    question: "What is Gaurav's favourite color :",
    answer: "red",
  }
]
function play(question, answer)
{
  
  var userAnswer = readlineSync.question(question);
  if((userAnswer.toString()).toUpperCase() == (answer.toString()).toUpperCase())
  {
    console.log("you are right");
    score=score+1;
    

  }
  else
  {
    console.log("you are wrong");
  }
console.log("Your score is " ,score);
console.log("--------------");
}

for (var i = 0;i<questions.length;i++)
{
play(questions[i].question,questions[i].answer);
}


for( var i =0; i<highscores.length;i++)
{
  if (score>=highscores[i].score)
  {
    console.log("Congrats you have the highest score!!")
  }
}
