
	var dice = document.querySelector(".Player1", "img")
	dice.addEventListener("click", Dice1);
	// var random ;
	// var random2 ;
	console.log(dice);

	function Dice1() {

			random = Math.floor((Math.random() * 6) + 1);
			var randomimage = "Dice/dice-" + random + ".png";
			var image1 = document.querySelectorAll("img")[0];
			image1.setAttribute("src", randomimage);
			dice.removeEventListener("click", Dice1);
	};
	
	var dice2 = document.querySelector(".Player2", "img");
	dice2.addEventListener("click", Dice2);

	function Dice2() {
		
		random2 = Math.floor((Math.random() * 6) + 1);
		var randomimage2 = "Dice/dice-" + random2 + ".png";
		document.querySelectorAll("img")[1].setAttribute("src", randomimage2);
		dice2.removeEventListener("click", Dice2);

		if (random > random2) {
			document.querySelector("h1").innerHTML = "Player1 Wins!";
		}

		else if (random < random2) {
			document.querySelector("h1").innerHTML = "Player2 Wins!";
		}
		else {
			document.querySelector("h1").innerHTML = "It's Draw!";
		}
		document.getElementById("again").style.display = "inline";
	};

	