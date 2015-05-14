
console.log("hi anna");
var xMoves = [];
var yMoves = [];
var winningCombinations = [ [1, 2, 3], [4, 5, 6],[7, 8, 9], [1, 5, 9], [2, 5, 8], [3, 6, 9], [3, 5, 7], [1, 4, 7]];
$(document).ready(function() {
// var winningCombinations = [ [1, 2, 3,], [4, 5, 6], [7, 8, 9], [1, 5, 9], [2, 5, 8], [3, 6, 9], [3, 5, 7], [1, 4, 7] ];
var lastMove = "0";
var result = "";
$(".square").on("click", function() {
    // $(this).text('X');
    if( lastMove === "X") {
      $(this).text('0');
      lastMove = "0";
      var id = Number(this.id);
      yMoves.push(id);
      checkWinner(yMoves, "Player O");
    }else {
      $(this).text('X');
      lastMove = "X";
      var id = Number(this.id);
      xMoves.push(id);
      checkWinner(xMoves, "Player X");     
      }
    });
   function checkWinner (winner, currentPlayer) {
    var sorted = winner.sort()
    if (sorted.length < 3){
      return; 
    } 
    for (var i = 0; i< winningCombinations.length;  i++) {
     var winnerExists = findingWinner(sorted, winningCombinations[i])
        if(winnerExists === true){ 
        console.log(currentPlayer +' is winner');
    }
    };
    };
      function findingWinner (array1, array2){
        for (var i = 0; i< array1.length;  i++) {
        console.log(array1[i] !== array2[i])
        if(array1[i] !== array2[i]){
        return false
      }
    };
      return true
  };


});