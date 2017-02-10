/*should contain all of the methods which will check 
the letters guessed versus the random word selected.*/
var Letter = require('./Letter');

function Word(gw){
	this.guess_word = gw;
	this.all_letters = [];
	this.correct_letters = [];
	this.has_guessed_correctly = false;
	this.display_str = "";
}
 

Word.prototype.dispWord = function(){
	this.display_str = "";
	//console.log(this.guess_word) 
	//console.log(this.correct_letters);
	
	for (var i=0; i<= this.guess_word.length-1; i++){
		this.display_str += " " + this.correct_letters[i].get_disp_letter();
	}
	console.log(this.display_str)
	
}

Word.prototype.hasCompleted = function(){
	var has_completed = true;
	//n = str.indexOf("welcome")
	if ((this.display_str).indexOf("-") >= 0) has_completed = false;
	return has_completed;
}

Word.prototype.createLetterArray = function(){
	//var hWord ="";
	for (var i=0; i<= this.guess_word.length-1; i++){		
		var lt = new Letter(this.guess_word[i])
		this.correct_letters.push(lt);
	}
	return ;
}

Word.prototype.add_letter = function(alpha){
	if( IndexOf(alpha, this.all_letters)> 0 ) {
		this.all_letters.push(alpa);
		return true;
	} 
	return false;

}
Word.prototype.check_letter = function(alpha){
	for (var i=0; i<= this.guess_word.length-1; i++){
		
		console.log(this.correct_letters[i].get_letter());
		if (alpha == this.correct_letters[i].get_letter()){
			console.log(alpha);
			this.correct_letters[i].set_guessed_letter();
		}
	}

}


module.exports = Word;