
var readlineSync = require("readline-sync");
var score = 0;
console.log("                            QUIZ GAME  ")
var userName = readlineSync.question("what's your name ? :");
console.log("                          Hello "+ userName+" Welcome");
console.log( " ")
console.log(" ")
console.log(" There are 5 questions in this game, each question is of 2 marks and if wrong, the number will be decrease from it, so play carefully.")
console.log("")
console.log(" ")
 console.log(" let's see how much you know about general knowledge");
 var questions = [{
 question:"In a computer, most processing takes place in _______? \nA.moniter B.CPU   C.keyword D.decstop\n\nchoose your answer : -" ,answer:"B"},
 {
 question: "What translates and executes program at run time line by line?\nA.compiler B.Interpreter C.keyword D.none of this\n\nchoose your answer :      : -",
 answer:"B"
},{
 question: "	The first web browser is _______?\nA.google chrome B.FireBox C.mosaic D.WWW\n\nchoose your answer :  :-",
 answer:"C"
},{
 question: "	IBM stands for _______? :-\nA.there is no options    ",
 answer:"International Business Machines"
},{
 question: "	The first computers were programmed using _______?\nA.machine Lauguage B.graphic design C.DSA D.Mathamatic opration\n\nchoose your answer :   :-",
 answer:"A"
}];
function play(question, answer) {
 var userAnswer = readlineSync.question(question);
 if (userAnswer === answer) { 
   console.log("ohhh..you are right! ");
   score = score + 2;
 } else {
   console.log("sorry your ans is wrong! PLAY CEARFULLY");
   score=score-1;
 }
 console.log("your score: ", score);
}

 for (var i=0; i<questions.length; i++) {
   var currentQuestion = questions[i];
   play(currentQuestion.question, currentQuestion.answer)
 }

function first() 
 
{ console.log(" ")
 console.log("YOUR TOTALE SCORE  10 / ", score);

}
first();
console.log(" ")
console.log(" ")
console.log( "                            THANKS FOR PLAYING")