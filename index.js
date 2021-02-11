// package for taking input

var readlineSync = require('readline-sync')

var score = 0;
console.log("--------Do you know me CLI application--------")
var userName = readlineSync.question("Enter your name: ")

var score_card = {
  name: "Dheeraj",
  score: 3
}

console.log("Namaste "+ userName +" let's begin with our quiz! :-)")
console.log("---------------------------------------------")

function play_quiz(question, answer){
  // processing unit
  var userAnswer = readlineSync.question(question);
  if(userAnswer === answer){
    console.log("Correct!");
    score = score + 1
  }else{
    console.log("incorrect!");
    console.log("Correct answer was: "+ answer)
  }

  console.log("Your score is: ", score)
  console.log("------------")
}

var question_arr = [{
  question: "What is my name?\na.Dhairya\nb.Dheeraj\nc.Dhiraj\nanswer:",
  answer: 'b'
},{question: "Which Martial Arts do i practise?\na.Karate\nb.Silambam\nc.Muai Thai\nanswer: ",answer: "b"},{question: "Were do i live?\na.Mumbai\nb.Rajasthan\nc.Orissa\nanswer: ",answer: "a"},{question: "What is my career stream?\na.Computer Science\nb.Research\nc.Marketing\nanswer: ",answer: "a"}]

for(var i = 0; i<question_arr.length; i++){
  play_quiz(question_arr[i].question, question_arr[i].answer)
}

console.log("Yay! You SCORED:"+ score +"/"+question_arr.length + "\nHigh score was "+score_card.score );

if (score > score_card.score){
  console.log("hey " +userName+ " you have beaten the high score\nsend me screenshot of your score to add your name to the list:->")
}