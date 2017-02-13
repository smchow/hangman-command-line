var inquirer = require('inquirer');
var Letter = require('./Letter');
var Word = require('./Word');

//var newClass;
var play_again = true;
var start_again = false;
var MAX_NUM_OF_TRIES = 6;
var i = 0;
var nw;
var wordlist = ['Cloudburst', 'Condensation' , 'Drought' , 'Evaporation' , 'Scattering' , 'Thermometer' , 'Rain' , 'Snow' , 'Weather' , 'Climate']

playHM();


function playHM(){
	console.log("Here is a new word for you:\n")
	getRandomWord()
	i=0;
	nw.createLetterArray();
	nw.dispWord();
	askForLetter(MAX_NUM_OF_TRIES);

}

function getRandomWord(){
	var randomWord = wordlist[(Math.floor(Math.random() * wordlist.length))];
	console.log(randomWord);
   nw = new Word((randomWord).toLowerCase());
}

function askForLetter(num_tries){
	inquirer.prompt([
  {type: "input",
    name: "letter",
    message: "You have " + num_tries + " tries left. Enter a letter: "},
  /*{type: "input",
    name: "capacity",
    message: "What's the capacity of the class?"},*/

]).then(function(data){
	  i++;
    
      nw.check_letter(data.letter.toLowerCase());
      nw.dispWord();
      //console.log(hasCompleted());
      var x = nw.hasCompleted();
	if(!x){
		 if ((i < MAX_NUM_OF_TRIES)){
      	askForLetter(MAX_NUM_OF_TRIES-i);
      }else {
      	console.log("You have reached the maximum # of tries!");
      	 continuePlayCheck();
      }
	} else{
		console.log("You guessed it correctly!");
		 continuePlayCheck();
	}


	
    
     
     /* if(play_again){
			askForLetter();
			nw.dispWord();
		}*/

	//var Letter = new Letter(data.letter);
      //askToAddStudent();
});
}

function continuePlayCheck(){
	inquirer.prompt([
  {type: "input",
    name: "continue",
    message: " Do you want to continue? Y/N "},
  /*{type: "input",
    name: "capacity",
    message: "What's the capacity of the class?"},*/

]).then(function(data){
	if(data.continue.toLowerCase()  == "y") 
		playHM();
	else 
		endGame();
});
}

function endGame(){

	console.log("See you next time");
}

/*function newStudent(){
	inquirer.prompt([
	  {type: "input",
	    name: "sName",
	    message: "What's your student's name?"}

	]).then(function(data){
	      var newStudent = new Student(data.sName);
	      newClass.addStudent(newStudent);

	      console.log(newClass);
	      
	      askToAddStudent();
	});
}

function askToAddStudent(){
	inquirer.prompt([
	  {type: "input",
	    name: "addStudents",
	    message: "Do you want to add students to that class?"}

	]).then(function(data){
	      if (data.addStudents == 'yes'){
	      	newStudent();
	      }else{
	      	console.log(newClass);
	      }
	});
}*/