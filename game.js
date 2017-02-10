var inquirer = require('inquirer');
var Letter = require('./Letter');
var Word = require('./Word');

//var newClass;
var play_again = true;
var start_again = false;
var nw = new Word("newton");
var MAX_NUM_OF_TRIES = 6;

var i = 0; 
nw.createLetterArray();
//
	

nw.dispWord();

askForLetter();

function askForLetter(){
	inquirer.prompt([
  {type: "input",
    name: "letter",
    message: "What's your letter?"},
  /*{type: "input",
    name: "capacity",
    message: "What's the capacity of the class?"},*/

]).then(function(data){
	  i++;
    
      nw.check_letter(data.letter);
      nw.dispWord();
      //console.log(hasCompleted());
      var x = nw.hasCompleted();
	if(!x){
		 if ((i < MAX_NUM_OF_TRIES)){
      	askForLetter();
      }else {
      	console.log("You have reached the maximum # of tries!");
      }

	} else{
		console.log("You guessed it correctly!");
	}
     
     
     /* if(play_again){
			askForLetter();
			nw.dispWord();
		}*/

	//var Letter = new Letter(data.letter);
      //askToAddStudent();
});
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