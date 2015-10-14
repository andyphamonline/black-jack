	var bankrollValue;
	var newBankrollValue;
	var playerScoreValue;
	var newPlayerScoreValue;
	var dealerScoreValue;
	var newDealerScoreValue;
	var betValue;
	var newBetValue;
	var newWinValue;
	var thereIsAnAce = false;
	var playerAce = 0;
	var dealerAce = 0;
	var index = 0;
	var image;
	var value = 0;
	var newArray = [];
	var cardsOnBoard = [];

	var deckOfCards = [
		{image: "images/cards/1.png", value: 11, name: "ace"},
		{image: "images/cards/2.png", value: 11, name: "ace"},
		{image: "images/cards/3.png", value: 11, name: "ace"},
		{image: "images/cards/4.png", value: 11, name: "ace"},
		{image: "images/cards/1.png", value: 11, name: "ace"},
		{image: "images/cards/2.png", value: 11, name: "ace"},
		{image: "images/cards/3.png", value: 11, name: "ace"},
		{image: "images/cards/4.png", value: 11, name: "ace"},
		{image: "images/cards/1.png", value: 11, name: "ace"},
		{image: "images/cards/2.png", value: 11, name: "ace"},
		{image: "images/cards/3.png", value: 11, name: "ace"},
		{image: "images/cards/4.png", value: 11, name: "ace"},
		{image: "images/cards/4.png", value: 11, name: "ace"},
		{image: "images/cards/1.png", value: 11, name: "ace"},
		{image: "images/cards/2.png", value: 11, name: "ace"},
		{image: "images/cards/3.png", value: 11, name: "ace"},
		{image: "images/cards/4.png", value: 11, name: "ace"},
		
		{image: "images/cards/37.png", value: 5},
		{image: "images/cards/38.png", value: 5},
		{image: "images/cards/39.png", value: 5},
		{image: "images/cards/40.png", value: 5},
		{image: "images/cards/41.png", value: 4},
		{image: "images/cards/42.png", value: 4},
		{image: "images/cards/43.png", value: 4},
		{image: "images/cards/44.png", value: 4},
		{image: "images/cards/45.png", value: 3},
		{image: "images/cards/46.png", value: 3},
		{image: "images/cards/47.png", value: 3},
		{image: "images/cards/48.png", value: 3},
		{image: "images/cards/49.png", value: 2},
		{image: "images/cards/50.png", value: 2},
		{image: "images/cards/51.png", value: 2},
		{image: "images/cards/52.png", value: 2},
	];

	function dealerTurn() {
		drawDealerCard();
		$(".hitStayButtons").hide();
		setTimeout(
			function(){
				$(".dealerCard img:nth-child(2)").remove()
			},
			500	
		);
	};

	function drawDealerCard() {
		setTimeout(
			function() {
				getRandomCard(),
				$(".dealerCard").append("<img src=\'" + getRandomCard() + "\'>"),
				addDealerScore(),
				countDealerAce()
			}, 
			500
		);
		setTimeout(
			function() {
				compareDealerScore17()
			}, 
			1000
		);
	}

	function getRandomCard() {
		var index = Math.floor(Math.random()*deckOfCards.length);
		newArray = deckOfCards.splice(index, 1);
		cardsOnBoard.push(newArray[0]);
		return newArray[0].image;
	};

	function addPlayerScore() {
		playerScoreValue = parseInt($("#playerScore").val());
		newPlayerScoreValue = playerScoreValue + newArray[0].value;
		$("#playerScore").attr("value", newPlayerScoreValue);
	};

	function addDealerScore() {
		dealerScoreValue = parseInt($("#dealerScore").val());
		newDealerScoreValue = dealerScoreValue + newArray[0].value;
		$("#dealerScore").attr("value", newDealerScoreValue);
	};

	function countPlayerAce() {
		if (newArray[0].value === 11) {
			playerAce++;
		}
	};

	function countDealerAce() {
		if (newArray[0].value === 11) {
			dealerAce++;
		}
	};

	function compareDealerScore17() {
		if (newDealerScoreValue < 17) {
			drawDealerCard();
		}
		else {
			checkIfDealerBust();
		}
	}

	function checkIfDealerBust() {
		if (newDealerScoreValue < 22) {
			compareScore();
		}
		else {
			if (dealerAce === 0) {
				whenPlayerWin();
			}
			else if (dealerAce === 1) {
				newDealerScoreValue = newDealerScoreValue - 10;
				dealerAce--;
				$("#dealerScore").attr("value", newDealerScoreValue);
				compareDealerScore17()
				checkIfDealerScore21()
			}
			else if (dealerAce === 2) {
				newDealerScoreValue = newDealerScoreValue - 10;
				dealerAce--;
				$("#dealerScore").attr("value", newDealerScoreValue);
				compareDealerScore17()
				checkIfDealerScore21()
			}
		}
	}

	function checkIfDealerScore21() {
		if (newDealerScoreValue === 21) {
			compareScore();
		}
	}

	function checkIfPlayerScore21() {
		if (newPlayerScoreValue === 21) {
			whenPlayerWin();
		}
	};
	
	function checkIfPlayerBust() {
		if (newPlayerScoreValue > 21) {
			if (playerAce === 0) {
				alert("you loose");
				$(".dealClearButtons").hide();
				$(".hitStayButtons").hide();
				$("#playAgainButton").show();
			}
			else if (playerAce === 1) {
				newPlayerScoreValue = newPlayerScoreValue - 10;
				playerAce--;
				$("#playerScore").attr("value", newPlayerScoreValue);
				checkIfPlayerScore21();
			}
			else if (playerAce === 2) {
				newPlayerScoreValue = newPlayerScoreValue - 10;
				playerAce--;
				$("#playerScore").attr("value", newPlayerScoreValue);
				checkIfPlayerScore21();
			}			
		}
	};

	function compareScore() {
		if (newDealerScoreValue === newPlayerScoreValue) {
			whenTie();
		}
		else if (newDealerScoreValue > newPlayerScoreValue) {
			whenPlayerLoose();
		}
		else {
			whenPlayerWin();
		}
	}

	function whenTie() {
		alert("money back");
		$("#playAgainButton").show();
		newBankrollValue = newBankrollValue + newBetValue;
		$("#bankroll").attr("value", newBankrollValue);
		newBetValue = 0;
		$("#bet").attr("value", newBetValue);
	}

	function whenPlayerLoose() {
		alert("you loose");
		$(".dealClearButtons").hide();
		$(".hitStayButtons").hide();
		$("#playAgainButton").show();
		newBetValue = 0;
		$("#bet").attr("value", newBetValue);
	};

	function whenPlayerWin() {
		alert("you win");
		$(".dealClearButtons").hide();
		$(".hitStayButtons").hide();
		$("#playAgainButton").show();
		newWinValue = newBetValue * 2;
		$("#win").attr("value", newWinValue);
		newBankrollValue = newBankrollValue + newWinValue;
		$("#bankroll").attr("value", newBankrollValue);
	};

	function checkDealerScore() {
		if (newDealerScoreValue > 21) {
			if (dealerAce === 0) {
				whenPlayerWin();
			}
			else if (dealerAce === 1) {
				newDealerScoreValue = newDealerScoreValue - 10;
				dealerAce--;
				$("#dealerScore").attr("value", newDealerScoreValue);
				checkDealerScore()
			}
			else if (dealerAce === 2) {
				newDealerScoreValue = newDealerScoreValue - 10;
				dealerAce--;
				$("#dealerScore").attr("value", newDealerScoreValue);
			}
			
		}
	};
		
$(document).ready(function(){
	
	$("main, .dealClearButtons, .hitStayButtons").hide();
	$(".status").hide();
	$("#playAgainButton").hide();
	$(".dealerImage").show();

	//choose dealer
	$(".chooseDealerImage").on("click", function(){
		$(".chooseDealer").hide();
		$("main").show();
		$(".status").show();
	});

	//click on any chips to show Deal & Clear buttons
	$(".chipsImage").on("click", function() {
		$(".dealClearButtons").show();			
	});

	//click on each chip value to decrease bankroll & increase bet amount
	//ask to shorten this block
	$("#chip1").on("click", function() {
		bankrollValue = parseInt($("#bankroll").val());
		newBankrollValue = bankrollValue - 1;
		$("#bankroll").attr("value", newBankrollValue);

		betValue = parseInt($("#bet").val());
		newBetValue = betValue + 1;
		$("#bet").attr("value", newBetValue);
	});

	$("#chip5").on("click", function() {
		bankrollValue = parseInt($("#bankroll").val());
		newBankrollValue = bankrollValue - 5;
		$("#bankroll").attr("value", newBankrollValue);

		betValue = parseInt($("#bet").val());
		newBetValue = betValue + 5;
		$("#bet").attr("value", newBetValue);
	});

	$("#chip25").on("click", function() {
		bankrollValue = parseInt($("#bankroll").val());
		newBankrollValue = bankrollValue - 25;
		$("#bankroll").attr("value", newBankrollValue);

		betValue = parseInt($("#bet").val());
		newBetValue = betValue + 25;
		$("#bet").attr("value", newBetValue);
	});

	$("#chip100").on("click", function() {
		bankrollValue = parseInt($("#bankroll").val());
		newBankrollValue = bankrollValue - 100;
		$("#bankroll").attr("value", newBankrollValue);

		betValue = parseInt($("#bet").val());
		newBetValue = betValue + 100;
		$("#bet").attr("value", newBetValue);
	});
//shorten this block end

	//click clear to reset bankroll & bet amount
	$("#clear").on("click", function(){
		newBankrollValue = newBankrollValue + newBetValue;
		$("#bankroll").attr("value", newBankrollValue);
		newBetValue = 0;
		$("#bet").attr("value", newBetValue);
	});
	
	//click Deal button: deal the 1st 3 cards with delay
	$("#deal").on("click", function(){
		if (parseInt($("#bet").val()) === 0) {
			alert("Don't be so cheap. Bet something");
		}
		else {
			$(".dealClearButtons").hide();
			$(".hitStayButtons").show();

			setTimeout(
				function() {
					$(".playerCard").append("<img src=\'" + getRandomCard() + "\'>"),
					addPlayerScore(),
					countPlayerAce()
				}, 
				500
			);

			setTimeout(
				function() {
					$(".dealerCard").append("<img src=\'" + getRandomCard() + "\'>"),
					addDealerScore(),
					countDealerAce()
				}, 
				1000
			);

			setTimeout(
				function() {
					$(".playerCard").append("<img src=\'" + getRandomCard() + "\'>"),
					addPlayerScore()
					countPlayerAce()
				}, 
				1500
			);

			setTimeout(
				function() {	
				$(".dealerCard").append("<img src=images//cards/b1pr.png>")
				}, 
				2000
			);

			setTimeout(checkIfPlayerScore21, 1600);
			setTimeout(checkIfPlayerBust, 1600);
		}
	});

	//click hit button: deal 1 card to player and add score
	$("#hit").on("click", function() {
		setTimeout(function() {
				$(".playerCard").append("<img src=\'" + getRandomCard() + "\'>"),
				addPlayerScore()
				countPlayerAce()
			}, 500
		);
		setTimeout(checkIfPlayerScore21, 600);
		setTimeout(checkIfPlayerBust, 600);
		
	});

	//click stay button
	$("#stay").on("click", function() {
		$(".hitStayButtons").hide();
		dealerTurn();
	});

	$("#playAgainButton").on("click", function() {
		$(".dealClearButtons").show();
		$("#playAgainButton").hide();
		newBetValue = 0;
		$("#bet").attr("value", newBetValue);
		newWinValue = 0;
		$("#win").attr("value", newWinValue);
		newPlayerScoreValue = 0;
		$("#playerScore").attr("value", newPlayerScoreValue);
		newDealerScoreValue = 0;
		$("#dealerScore").attr("value", newDealerScoreValue);
		$(".playerCard").html("");
		$(".dealerCard").html("");
		deckOfCards = deckOfCards.concat(cardsOnBoard);
		cardsOnBoard = [];
		playerAce = 0;
		dealerAce = 0;
	});






});