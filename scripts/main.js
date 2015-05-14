
console.log("hi anna");
var xMoves = [];
var oMoves = [];
var winningCombinations = [ [1, 2, 3], [4, 5, 6],[7, 8, 9], [1, 5, 9], [2, 5, 8], [3, 6, 9], [3, 5, 7], [1, 4, 7]];
$(document).ready(function() {
// var winningCombinations = [ [1, 2, 3,], [4, 5, 6], [7, 8, 9], [1, 5, 9], [2, 5, 8], [3, 6, 9], [3, 5, 7], [1, 4, 7] ];
var lastMove = "O";
var result = "";
$(".square").on("click", function() {
    // $(this).text('X');
    if( lastMove === "X") {
      $(this).text('O');
      lastMove = "O";
      var id = Number(this.id);
      oMoves.push(id);
      checkWinner(oMoves, "Player O");
      $(this).unbind();
    }else {
      $(this).text('X');
      lastMove = "X";
      var id = Number(this.id);
      xMoves.push(id);
      checkWinner(xMoves, "Player X"); 
      $(this).unbind();    
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
        alert(currentPlayer +' is winner');
    }
    };
    };
      function findingWinner (array1, array2){
        console.log(array1)
        console.log(array2)
        for (var i = 0; i < array2.length; i++) {
          if ($.inArray(array2[i], array1) !== -1 && $.inArray(array2[i+1], array1) !== -1  && $.inArray(array2[i+2], array1) !== -1){
            return true  
        }
       }
        return false
      }
        if (array1.length >= 4){
          $("sorted").console.log("Its a draw");
          return true
         console.log("Its a draw");

    

        }

         $("#play").on("click",function() {
         if( lastMove === "X") {
         $(this).text('O');
          lastMove = "O";
          var id = Number(this.id);
          oMoves.push(id);
          checkWinner(oMoves, "Player O");
          $(this).unbind();
    }else {
         $(this).text('X');
         lastMove = "X";
         var id = Number(this.id);
         xMoves.push(id);
        checkWinner(xMoves, "Player X"); 
        $(this).unbind();    
      }
    });




          
          } 


        
        // document.getElementById("play").addEventListener("click'", function(){ alert"play game"});

    
     

          // document.getElementById("play").onlick = function(){
          //   document.getElmentById("play").innerHTML = "?";
        // }
});