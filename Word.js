function Word(gw){
	this.guess_word = "newton";
	this.all_letters = [];
	this.correct_letters = [];
}

Word.prototype.dispWord = function(){
	return "The correct word is " + this.guess_word;
}

Word.prototype.hangmanWord = function(){
	var hWord ="";
	for (var i=0; i<= this.guess_word.length; i++){		
		hWord +=  " _";
	}
	return   hWord;
}

Word.prototype.add_letter = function(alpha){
	if( IndexOf(alpha, this.all_letters)> 0 ) {
		this.all_letters.push(alpa);
		return true;
	} 
	return false;

}
Word.prototype.check_letter = function(alpha){

}


module.exports = Word;