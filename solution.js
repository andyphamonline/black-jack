//the middle part of deckOfCards. Need to add this back
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