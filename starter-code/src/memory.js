var MemoryGame = function (cards) {
    this.cards=cards;
    this.pickedCards=[];
    this.pairsClicked=0;
    this.pairsGuessed=0;
};

MemoryGame.prototype.shuffleCard = function (cardsArr) {
    var temp; // A temporary variable to hold reference to index variable i points to
    for (var i = cardsArr.length-1; i > 0; i--) { 
        swap = Math.floor(Math.random() * i);
        temp = cardsArr[i];
       cardsArr[i] = cardsArr[swap];
        cardsArr[swap] = temp;
    }
    return temp;
 };

 MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
 this.pairsClicked++;
 if(firstCard===secondCard){
 this.pairsGuessed++;
 return true;
 }
 else {
     return false;
 }
};

MemoryGame.prototype.finished = function (){
return this.pairsGuessed > 0
&& this.pairsGuessed===this.cards.length/2;
};