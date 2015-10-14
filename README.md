# Blackjack

1. Single deck blackjack.
2. Aces maybe counted as 1 or 11 points. Tens and face cards count as ten points.
3. Player chooses 1 of 4 lucky dealers.
4. Player chooses amount to bet then has the options below:
* `Deal`: dealer gives 2 cards to player and 1 face up and 1 face down card to himself.
* `Clear`: reset the bet amount
5. After clicking on `Deal`, player can:
* `Hit`: to draw a new card
* `Stay`: stay at the current points
6. Dealer stops drawing card at 17 points. 
7. Player can click `Play again` to repeat.

## Technologies used
* `jQuery`
* `Google Font`
* `Bootstrap`
* `HTML5`
* `CSS3`
* `Javascript`
* `Sweet Alert`

##Approaches
I keep track of how many Aces are in player's hand and dealer's hand. When either of them busts I subtract 10 for each Ace if point is more than 22. 
If dealer's point is more than 17, I check if it's less than 22, then compare to dealer's point. If it's more than 21 then subtract 10 for each Ace.

## Issues
Didn't add `double down` and `split` and different payout for `blackjack`. My code is very repetitive. Need to learn DRY.