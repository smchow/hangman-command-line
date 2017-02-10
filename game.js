var inquirer = require('inquirer');
var Letter = require('./Letter');
var Word = require('./Word');

//var newClass;
var play_again = true;
var start_again = false;
var nw = new Word("newton");
nw.createLetterArray();
//askForLetter();
	
nw.check_letter('e');
nw.dispWord();

function askForLetter(){
	inquirer.prompt([
  {type: "input",
    name: "letter",
    message: "What's your letter?"},
  /*{type: "input",
    name: "capacity",
    message: "What's the capacity of the class?"},*/

]).then(function(data){
	  var students = [];
      conole.log(data.Letter);
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