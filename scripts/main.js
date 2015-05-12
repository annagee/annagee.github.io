$(document).ready(function() {

var input = "'"
var winningCombinations = [ [a, b, c,], [ d, e, f], [d, e, f], [i, j, k], [i, j, k], [a, b, c], [b, e, j], [c, f, j], [c, e, i]]
var lastMove = "0"

// for (var i = 0; winner.length; i++) {
//   winner[i]
// };

// getting the input and returnning it
 // function (X) {
 
$(".square").on("click", function() {
    // $(this).text('X');
    if( lastMove === "X") {
      $(this).text('0');
      lastMove = "0" 
    } else {
       $(this).text('X');
       lastMove = "X"
    }
      
});

  // var secondMove = $(".square").on("click", function() {
  //   $(this).text('0');
  //   });



    // function nextMove() {
    // if (lastMove === firstMove) {
    //   result secondMove;
    // }
    // };



// $(".square" ).toggleClass(function() {
//    $(".square").on("click", function() {
//     $(this).text('X');
//     };
//     function() {
//     $(".square").on("click", function() {
//     $(this).text('Y');
//     });




  // nnerHTML( )

// $(".choice").valueOf()
// return(val);
});
// end of document