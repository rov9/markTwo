var c = require("readline-sync");

console.log("Hello! Welcome to my game!");

//input
var player = c.question("Please enter your name: ");

// processing 
var welcomeMessage = `Hey! ${player} good to have you here!`;

// output
console.log(welcomeMessage);



var score = 0;

function gameplay(question, correctAnswer) {
  var isAnswerCorrect; 

  var answer = c.question(question);

  if (answer.toUpperCase() === correctAnswer.toUpperCase()) {
    isAnswerCorrect = true;
    score = score + 1;
  } else {
    isAnswerCorrect = false;
    score = score - 1;
  }

  return isAnswerCorrect;
}



const questionList = [
  {
    question: "Which is the largest coffee producing state of India?",
    answer: "Karnataka"
  },
  {
    question: "India is a federal union comprising twenty-nine states and how many union territories?",
    answer: "7"
  },
{
    question: "Which of the following is the capital of Arunachal Pradesh?",
    answer: "Itanagar"
  },
{
    question: "In which state is the main language Khasi?",
    answer: "Meghalaya"
  },
  {
    question: "Which state has the largest area?",
    answer: "Rajasthan"
  },
  {
    question: "Which place never gets the vertical rays of the Sun??",
    answer: "Srinagar"
  }
];

var i = 0; 

while (i < questionList.length) {
 
  var isCorrect = gameplay(questionList[i].question, questionList[i].answer);

  console.log("is your answer correct?", isCorrect);
  console.log("your score is: ", score);
  if(score == 3)
  {
    console.log("You levelled up:Scholar")
  }
  else if (score == 5)
  {
   console.log("You levelled up:Boss") 
  }
  i++;  
}

//top scores

var topScores = [
  { name: "Saurabh", score: 5 },
  { name: "Saptarshi", score: 4 }
];

console.log("These are the top scores, if you have more than these, please send me a screenshot!!")

for (var i = 0; i < topScores.length; i++) {
  console.log(`${topScores[i].name} ::: ${topScores[i].score}`);
}


