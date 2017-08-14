// var game = { 
// 	numberOption: [100, 50, 30, 10, 70],
// 	numberIndex: Math.floor(Math.random()*2),
// 	numberIndex: 2,
// 	increment: function() {
// 		return game.numberOption[game.numberIndex]
// 	},
// 	targetNumber: Math.floor(Math.random()*10 + 1),
// 	counter: 0,
// }

// var obj = {
// 	property1: 'value',
// 	property2: Math.random(),
// 	changeProperty1: function(a) {
// 		this.property1 = a
// 	},
// 	property3: obj.property
// }



	// var numberOption = [0, 0, 0, 0];
	// var numberIndex = Math.floor(Math.random()*5);
	// var increment = numberOption[numberIndex];
	var targetNumber = (Math.floor(Math.random()*10) + 1) * 10;
	var counter = 0;
	var wins = 0;
	var lose = 0;
	setUpRandomCrystals()

function setUpRandomCrystals(){

	$('.crystal').each(function() {
		var rand = Math.floor(Math.random() * 10) + 1
		$(this).attr('data-crystalvalue', rand)
	})	//$("#target").html(getRandomArbirrary);
	//return;
}

// for (var i = 0; i < numberOption.length; i++) {
// 	numberOption[i] = getRandomArbirrary();
// }
// // 
// numberOption.map(getRandomArbirrary)

$(document).ready(function() {

//Get Crystal 1
//Get Random Number (call function)
//Assign value to crystal.

	// var randimNumber = getRandomArbirrary(1,4);
	// var val = numberOption.pop();

	$("#target").html("Your target number is: " + targetNumber);

	// for (var i = 0; i < numberOption.length; i++) {
	// 	var imageCrystal = $(".crystal");
	// 	$("#"+imageCrystal[i].id).attr("data-crystalvalue",numberOption[i]);
	// 	$(".crystal").append(imageCrystal);
	// }



	// $("#value1").html("total wins: " + wins);
	// $("#value2").html("total lost: " + lose);
	
	$(".crystal").on("click", function(a){

		var increment = $(this).attr("data-crystalvalue");
		console.log(increment)
		counter += parseInt(increment);


		// alert("your crystal number " + counter);
		$("#currentScoreValue").html("Your current score is: " + counter);
		
		if (counter == targetNumber){
			alert ("win");
			wins++;
			$("#totalWins").html("Total Wins: " + wins++);
			resetGame();

		} else if(counter > targetNumber) {
			alert("lose");
			lose++
			$("#totalLose").html("Total Losses: " + lose++);
			resetGame();

		}
		
		// for(var i = 0; i<numberOption.length; i++){
		// 	var 
		// }
 
	});

	function resetGame(){
	 	counter = 0;
		// numberIndex = Math.floor(Math.random()*5);
		// increment = numberOption[numberIndex];
		setUpRandomCrystals()
		targetNumber = (Math.floor(Math.random()*10) + 1) * 10;
		$("#target").html(targetNumber);
	};

});
