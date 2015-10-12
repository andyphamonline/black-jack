	var bankrollValue;
	var newBankrollValue;
	var playerScoreValue;
	var newPlayerScoreValue;
	var dealerScoreValue;
	var newDealerScoreValue;
	var betValue;
	var newBetValue;
	var thereIsAnAce = false;
	var index = 0;
	var image;
	var value = 0;
	var newArray = [];
	var deckOfCards = [
		{image: "images/cards/1.png", value: 11, name: "ace"},
		{image: "images/cards/2.png", value: 11, name: "ace"},
		{image: "images/cards/3.png", value: 11, name: "ace"},
		{image: "images/cards/4.png", value: 11, name: "ace"},
		{image: "images/cards/5.png", value: 10},
		{image: "images/cards/6.png", value: 10},
		{image: "images/cards/7.png", value: 10},
		{image: "images/cards/8.png", value: 10},
		{image: "images/cards/9.png", value: 10},
		{image: "images/cards/10.png", value: 10},
		// {image: "images/cards/11.png", value: 10},
		// {image: "images/cards/12.png", value: 10},
		// {image: "images/cards/13.png", value: 10},
		// {image: "images/cards/14.png", value: 10},
		// {image: "images/cards/15.png", value: 10},
		// {image: "images/cards/16.png", value: 10},
		// {image: "images/cards/17.png", value: 10},
		// {image: "images/cards/18.png", value: 10},
		// {image: "images/cards/19.png", value: 10},
		// {image: "images/cards/20.png", value: 10},
		// {image: "images/cards/21.png", value: 9},
		// {image: "images/cards/22.png", value: 9},
		// {image: "images/cards/23.png", value: 9},
		// {image: "images/cards/24.png", value: 9},
		// {image: "images/cards/25.png", value: 8},
		// {image: "images/cards/26.png", value: 8},
		// {image: "images/cards/27.png", value: 8},
		// {image: "images/cards/28.png", value: 8},
		// {image: "images/cards/29.png", value: 7},
		// {image: "images/cards/30.png", value: 7},
		// {image: "images/cards/31.png", value: 7},
		// {image: "images/cards/32.png", value: 7},
		// {image: "images/cards/33.png", value: 6},
		// {image: "images/cards/34.png", value: 6},
		// {image: "images/cards/35.png", value: 6},
		// {image: "images/cards/36.png", value: 6},
		// {image: "images/cards/37.png", value: 5},
		// {image: "images/cards/38.png", value: 5},
		// {image: "images/cards/39.png", value: 5},
		// {image: "images/cards/40.png", value: 5},
		// {image: "images/cards/41.png", value: 4},
		// {image: "images/cards/42.png", value: 4},
		// {image: "images/cards/43.png", value: 4},
		// {image: "images/cards/44.png", value: 4},
		// {image: "images/cards/45.png", value: 3},
		// {image: "images/cards/46.png", value: 3},
		// {image: "images/cards/47.png", value: 3},
		// {image: "images/cards/48.png", value: 3},
		// {image: "images/cards/49.png", value: 2},
		// {image: "images/cards/50.png", value: 2},
		// {image: "images/cards/51.png", value: 2},
		// {image: "images/cards/52.png", value: 2},
	];

	function getRandomCard() {
		var index = Math.floor(Math.random()*deckOfCards.length);
		newArray = deckOfCards.splice(index, 1);
		return newArray[0].image;
	};

	// function checkForAce() {
	// 	if 
	// };

	function checkPlayerWin() {
		if (newPlayerScoreValue === 21) {
			setTimeout(alert("you win"), 6000);
			$(".dealClearButtons").show();
			$(".hitStayButtons").hide();
		}
		else if (newPlayerScoreValue > 21) {
			setTimeout(alert("you loose"), 6000);
			$(".dealClearButtons").show();
			$(".hitStayButtons").hide();
		}
	};

	function addPlayerScore() {
		playerScoreValue = parseInt($("#playerScore").val());
		newPlayerScoreValue = playerScoreValue + newArray[0].value;
		$("#playerScore").attr("value", newPlayerScoreValue);
		checkPlayerWin();
	};

	function addDealerScore() {
		dealerScoreValue = parseInt($("#dealerScore").val());
		newDealerScoreValue = dealerScoreValue + newArray[0].value;
		$("#dealerScore").attr("value", newDealerScoreValue);
	};
		
$(document).ready(function(){
	
	$("main, .dealClearButtons, .hitStayButtons").hide();
	$(".status").hide();
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
		$(".dealClearButtons").hide();
		$(".hitStayButtons").show();

		setTimeout(function() {
				$(".playerCard").append("<img src=\'" + getRandomCard() + "\'>"),
				addPlayerScore()
			}, 500
		);

		setTimeout(function() {
				$(".dealerCard").append("<img src=\'" + getRandomCard() + "\'>"),
				addDealerScore()
			}, 1000
		);

		setTimeout(function() {
				$(".playerCard").append("<img src=\'" + getRandomCard() + "\'>"),
				addPlayerScore()
			}, 1500
		);

		setTimeout(function() {	
			$(".dealerCard").append("<img src=images//cards/b1pr.png>")
			}, 2000
		);
	});

	//click hit button: deal 1 card to player and add score
	$("#hit").on("click", function() {
		setTimeout(function() {
				$(".playerCard").append("<img src=\'" + getRandomCard() + "\'>"),
				addPlayerScore()
			}, 1000
		);

		
	});

	//click stay button
	$("#stay").on("click", function() {
		alert("dealer turn")
	});







});