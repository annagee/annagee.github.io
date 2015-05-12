console.log("hi anna");

var xMoves = [];
var yMoves = [];



$(document).ready(function() {

var input = "'";
var winningCombinations = [ [1, 2, 3,], [4, 5, 6], [7, 8, 9], [1, 5, 9], [2, 5, 8], [3, 6, 9], [3, 5, 7], [1, 4, 7] ];
var lastMove = "0";
var result = "";
// for (var i = 0; winner.length; i++) {
//   winner[i]
// };

// getting the input and returnning it
 // function (X) {
 
$(".square").on("click", function() {
    // $(this).text('X');
    if( lastMove === "X") {
      $(this).text('0');
      lastMove = "0";
      var id = Number(this.id);
      yMoves.push(id);
      
      // push this in to yMoves array
    } else {
       $(this).text('X');
       lastMove = "X";
       var id = Number(this.id);
       xMoves.push(id)
      // push this in to xMoves array

    }
      
});




  // var secondMove = $(".square").on("click", function() {
  //   $(this).text('0');
  //   });



   


// $(".square" ).toggleClass(function() {
//    $(".square").on("click", function() {
//     $(this).text('X');
//     };
//     function() {
//     $(".square").on("click", function() {
//     $(this).text('Y');
//     });




});
// end of document