$(document).ready(function(){
	var random_num = Math.floor((Math.random()*100) + 1);
	
	$("#Submit").click(function(){
		var guess = $("input[name=guess]").val();
		if(guess == random_num){
			$('div').html("You guessed correctly!");
		}
		else if(guess < random_num){
			$('div').html("You guessed too low. Bring it Up!");
		}
		else {
			$('div').html("You guessed too high. Lower it!");
		}
	});



	//create click event for clear button


});

