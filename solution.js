//the last part of checkIfBust(); not sure why i don't need this part and the function still works

else if (playerAce === 3) {
	newPlayerScoreValue = newPlayerScoreValue - 10;
	$("#playerScore").attr("value", newPlayerScoreValue);
	checkIfScoreIs21();
		if (newPlayerScoreValue > 21) {
			newPlayerScoreValue = newPlayerScoreValue - 10;
			$("#playerScore").attr("value", newPlayerScoreValue);
			checkIfScoreIs21();
			if (newPlayerScoreValue > 21) {
				newPlayerScoreValue = newPlayerScoreValue - 10;
				$("#playerScore").attr("value", newPlayerScoreValue);
				checkIfScoreIs21();
			}
		}				
}
else {
	newPlayerScoreValue = newPlayerScoreValue - 10;
	$("#playerScore").attr("value", newPlayerScoreValue);
	checkIfScoreIs21();
	if (newPlayerScoreValue > 21) {
		newPlayerScoreValue = newPlayerScoreValue - 10;
		$("#playerScore").attr("value", newPlayerScoreValue);
		checkIfScoreIs21();
		if (newPlayerScoreValue > 21) {
			newPlayerScoreValue = newPlayerScoreValue - 10;
			$("#playerScore").attr("value", newPlayerScoreValue);
			checkIfScoreIs21();
			if (newPlayerScoreValue > 21) {
				newPlayerScoreValue = newPlayerScoreValue - 10;
				$("#playerScore").attr("value", newPlayerScoreValue);
			}
		}
	}
}