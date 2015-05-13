
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
      console.log('yMoves', yMoves);
    }else {
      $(this).text('X');
      lastMove = "X";
      var id = Number(this.id);
      xMoves.push(id);
      checkWinner(xMoves, "Player X");
      console.log('xMoves', xMoves);
        
  }
});


   function checkWinner (winner, currentPlayer) {
    var sorted = winner.sort()
    if (sorted.length < 3){
      console.log('not enough moves');
      return; 
    } 
    for (var i = 0; i< winningCombinations.length;  i++) {
     var winnerExists = findingWinner(sorted, winningCombinations[i])
       console.log(sorted, winningCombinations[i]);
        console.log(winnerExists);
        if(winnerExists === true){ 
        console.log(currentPlayer +' is winner');

    }



    };

  


    

    };

  
      function findingWinner (array1, array2){
    for (var i = 0; i< array1.length - 1;  i++) {
      if(array1[i] !== array2[i]){
        return false
      }


    };
      return true


  };














    // for (var i = 0; i< winningCombinations.length -1; i++) {
    //   for (var j = 0; j< sorted.length - 1; j++){
    //     console.log(sorted)


    //     if(sorted[j] !== winningCombinations[i][j]){
    //       console.log("jvalue",sorted[j]);
    //       console.log("value",winningCombinations[i][j]);
    //       continue;
    //      }
    //   }
    //   console.log(currentPlayer + ' is winner');
     
         

      


        // console.log("its a match");



        //we now know the first element in the array matches - so we need to find out whether the second and third elements match too.....
             
       
     
    
  


});