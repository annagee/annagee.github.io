
console.log("hi anna");
var xMoves = [];
var oMoves = [];
var winningCombinations = [ [1, 2, 3], [4, 5, 6],[7, 8, 9], [1, 5, 9], [2, 5, 8], [3, 6, 9], [3, 5, 7], [1, 4, 7]];
$(document).ready(function() {
var lastMove = "O";
var result = "";
playGame();

  function playGame(){
    $(".square").on("click", function() {
      if( lastMove === "X") {
      $(this).text('O');
      lastMove = "O";
      var id = Number(this.id);
      oMoves.push(id);
      checkWinner(oMoves, "Player O");
      $(this).off();
    }else {
      $(this).text('X');
      lastMove = "X";
      var id = Number(this.id);
      xMoves.push(id);
      checkWinner(xMoves, "Player X"); 
      $(this).off();    
      }
    });
  }

   function checkWinner (winner, currentPlayer) {
      var sorted = winner.sort()
      if (sorted.length < 3){
      return; 
      } 
      for (var i = 0; i< winningCombinations.length;  i++) {
      var winnerExists = findingWinner(sorted, winningCombinations[i])
      if(winnerExists === true){
      $(".result").text(currentPlayer +' is winner')
      }
      // };

      // if (sorted.length >= 5){
      // $(".result").text("Its a draw");
      // return true
    }
     };

    function findingWinner (array1, array2){
      for (var i = 0; i < array2.length; i++) {
      if ($.inArray(array2[i], array1) !== -1 && $.inArray(array2[i+1], array1) !== -1  && $.inArray(array2[i+2],array1) !== -1){
      return true  
      }
      if (array1.length >= 5){
      $(".result").text("Its a draw");
      return true
      }
      return false
      }
    }

    function newGame (){
      xMoves = [];
      oMoves = [];
      $(".result").empty();
      $(".square").html('?');
  
    }

    $('.button').click(function(){
      newGame();
      playGame();
    })
// };
});