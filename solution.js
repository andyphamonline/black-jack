function dealerTurn()
	setTimeout 500
		drawDealerCard()

function drawDealerCard()
	getRandomCard()
	append getRandomCard to div dealerCard
	addDealerScore()
	countDealerAce()
	compareDealerScore17

function getRandomCard()
	random card
	push that card to cardsOnBoard[]	

function addDealerScore()
	add dealer score
	display dealer score

function countDealerAce()
	dealerAce++

function compareDealerScore17()
	if (newDealerScoreValue < 17)
		drawDealerCard()
	else
		checkIfDealerBust()

function checkIfDealerBust()
	if (newDealerScoreValue < 22) {
		compareScore()
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

function checkIfDealerScore21()
	if (newPlayerScoreValue === 21) {
		compareScore()
	}	

function whenPlayerLoose ()
	alert("you loose")
	display play again button


function compareScore()
	if (newDealerScoreValue === newPlayerScoreValue)
		alert("money back")
		display "play again" button
	else if (newDealerScoreValue > newPlayerScoreValue)
		whenPlayerLoose
	else 
		whenPlayerWin

function whenPlayerWin()
	alert("you win")
	win = bet * 2
	bankroll = bankroll + win
	display "play again" button

//the last part of checkIfBust()
	if (newPlayerScoreValue > 21) {
		newPlayerScoreValue = newPlayerScoreValue - 10;
		playerAce--;
		$("#playerScore").attr("value", newPlayerScoreValue);
	}

else if (playerAce === 3) {
	newPlayerScoreValue = newPlayerScoreValue - 10;
	playerAce--;
	$("#playerScore").attr("value", newPlayerScoreValue);
	checkIfScoreIs21();
		if (newPlayerScoreValue > 21) {
			newPlayerScoreValue = newPlayerScoreValue - 10;
			playerAce--;
			$("#playerScore").attr("value", newPlayerScoreValue);
			checkIfScoreIs21();
			
		}
}
else {
	newPlayerScoreValue = newPlayerScoreValue - 10;
	playerAce--;
	$("#playerScore").attr("value", newPlayerScoreValue);
	checkIfScoreIs21();
	if (newPlayerScoreValue > 21) {
		newPlayerScoreValue = newPlayerScoreValue - 10;
		playerAce--;
		$("#playerScore").attr("value", newPlayerScoreValue);
		checkIfScoreIs21();
		if (newPlayerScoreValue > 21) {
			newPlayerScoreValue = newPlayerScoreValue - 10;
			playerAce--;
			$("#playerScore").attr("value", newPlayerScoreValue);
			checkIfScoreIs21();
			if (newPlayerScoreValue > 21) {
				newPlayerScoreValue = newPlayerScoreValue - 10;
				playerAce--;
				$("#playerScore").attr("value", newPlayerScoreValue);
			}
		}
	}
}