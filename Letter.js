//hould control whether or 
//not a letter appears as a "_" or as itself on-screen.

function Letter(alpha){
	this.alpha = alpha;
	this.display =  "-";
}

Letter.prototype.set_guessed_letter = function(){
	 this.display = this.alpha;
}

Letter.prototype.get_disp_letter = function(){
	return this.display;
}

Letter.prototype.get_letter = function(){
	return this.alpha;
}

module.exports = Letter;