//

	var bankrollValue;
	var newBankrollValue;
	var playerScoreValue;
	var newPlayerScoreValue;
	var dealerScoreValue;
	var newDealerScoreValue;
	var betValue;
	var newBetValue;
	var newWinValue = 0;
	var playerAce = 0;
	var dealerAce = 0;
	var index = 0;
	var newArray = [];
	var cardsOnBoard = [];
	var deckOfCards = [
		{image: "images/cards/1.png", value: 11,},
		{image: "images/cards/2.png", value: 11,},
		{image: "images/cards/3.png", value: 11,},
		{image: "images/cards/4.png", value: 11,},
		{image: "images/cards/5.png", value: 10},
		{image: "images/cards/6.png", value: 10},
		{image: "images/cards/7.png", value: 10},
		{image: "images/cards/8.png", value: 10},
		{image: "images/cards/9.png", value: 10},
		{image: "images/cards/10.png", value: 10},
		{image: "images/cards/11.png", value: 10},
		{image: "images/cards/12.png", value: 10},
		{image: "images/cards/13.png", value: 10},
		{image: "images/cards/14.png", value: 10},
		{image: "images/cards/15.png", value: 10},
		{image: "images/cards/16.png", value: 10},
		{image: "images/cards/17.png", value: 10},
		{image: "images/cards/18.png", value: 10},
		{image: "images/cards/19.png", value: 10},
		{image: "images/cards/20.png", value: 10},
		{image: "images/cards/21.png", value: 9},
		{image: "images/cards/22.png", value: 9},
		{image: "images/cards/23.png", value: 9},
		{image: "images/cards/24.png", value: 9},
		{image: "images/cards/25.png", value: 8},
		{image: "images/cards/26.png", value: 8},
		{image: "images/cards/27.png", value: 8},
		{image: "images/cards/28.png", value: 8},
		{image: "images/cards/29.png", value: 7},
		{image: "images/cards/30.png", value: 7},
		{image: "images/cards/31.png", value: 7},
		{image: "images/cards/32.png", value: 7},
		{image: "images/cards/33.png", value: 6},
		{image: "images/cards/34.png", value: 6},
		{image: "images/cards/35.png", value: 6},
		{image: "images/cards/36.png", value: 6},
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

	function chooseChips (chip, amount) {		
		$(chip).on("click", function() {
			if (newBankrollValue < 1) {
				alert("you can't play on credit");
			}
			else {
				bankrollValue = parseInt($("#bankroll").val());
				newBankrollValue = bankrollValue - amount;
				$("#bankroll").attr("value", newBankrollValue);

				betValue = parseInt($("#bet").val());
				newBetValue = betValue + amount;
				$("#bet").attr("value", newBetValue);
			}
		});
	};

	function dealCard (player, time) {
		var divName = (player === "player") ? ".playerCard" : ".dealerCard"
		var callback1 = (player === "player") ? addPlayerScore : addDealerScore
		var callback2 = (player === "player") ? countPlayerAce : countDealerAce

		setTimeout(
			function() {
				$(divName).append("<img src=\'" + getRandomCard() + "\'>");
				callback1();
				callback2();
			}, 
			time
		);
	};

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
				setTimeout(function() {
					swal({
						title: "Thanks for the donation!",
						imageUrl: "images/loose.png"
					})
				},
					800
				);
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
		setTimeout(function() {
			swal({
				title: "It's a tie",
				imageUrl: "images/tie.png"
			})
		},
			800
		);
		$("#playAgainButton").show();
		newBankrollValue = newBankrollValue + newBetValue;
	}

	function whenPlayerLoose() {
		setTimeout(function() {
			swal({
				title: "Thanks for the donation!",
				imageUrl: "images/loose.png"
			})
		},
			800
		);
		$(".dealClearButtons").hide();
		$(".hitStayButtons").hide();
		$("#playAgainButton").show();
	};

	function whenPlayerWin() {
		setTimeout(function() {
			swal({
				title: "EZ money",
				imageUrl: "images/win.jpg"
			})
		},
			800
		);
		$(".dealClearButtons").hide();
		$(".hitStayButtons").hide();
		$("#playAgainButton").show();
		newWinValue = newBetValue * 2;
		$("#win").attr("value", newWinValue);
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
	
	$("main, .dealClearButtons, .hitStayButtons, #playAgainButton, .status").hide();

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
	chooseChips ("#chip1", 1);
	chooseChips ("#chip5", 5);
	chooseChips ("#chip25", 25);
	chooseChips ("#chip100", 100);

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
			swal({
				title: "Don't be so cheap. Bet something",
				imageUrl: "images/cheap.jpg"
			});
		}
		else {
			$(".dealClearButtons").hide();
			$(".hitStayButtons").show();
			dealCard("player", 500);
			dealCard("dealer", 1000);
			dealCard("player", 1500);

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
		newBankrollValue = newBankrollValue + newWinValue;
		$("#bankroll").attr("value", newBankrollValue);
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