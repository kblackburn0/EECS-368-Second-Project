//Katelyn Blackburn, EECS 368

document.addEventListener('readystatechange', function() {
    if (document.readyState === "complete") {
      makeBoard();
    }
  });

//Creates the board. Calls the play() function
function makeBoard() {
        // create a table
        var brd = document.createElement("table");

        // loop that creates rows
        for (var r = 0; r < 4; r++) {
          var row = document.createElement("tr");
          // loop that creates columns
             for (var c = 0; c < 4; c++) {
                var space = document.createElement("th");
                space.setAttribute("bgcolor", "white");
                space.setAttribute("id", "cell" + r + "_" + c);

                //creates the input boxes
                var typing = document.createElement("input");
                typing.setAttribute("id", "input" + r + "_" + c);

                space.appendChild(typing);
                row.appendChild(space);
            }
            brd.appendChild(row);
        }
     board.appendChild(brd);

     placeNumbers();
     play();
}

//checks answers once the player has pressed enter
var answers=[[1,2,3,4],[4,3,1,2],[3,4,2,1],[2,1,4,3]];
function play() {
  document.querySelector("#board").addEventListener("keypress", function(e) {
    if(e.keyCode===13){

      //checking the answers for the first 2 rows
      for (var i = 0; i < 3; i++) {
        for (var a = 0; a < 2; a++) {
          let guess1 = document.getElementById("input"+a+"_"+i).value;
          let number1 = parseFloat(guess1);
          if(number1 == answers[a][i]){document.getElementById("cell"+a+"_"+i).innerText = number1;}
        }
      }

      //checking the answers for the last 2 rows
      for (var j = 1; j < 4; j++) {
        for (var k = 2; k < 4; k++) {
          let guess2 = document.getElementById("input"+k+"_"+j).value;
          let number2 = parseFloat(guess2);
          if(number2 == answers[k][j]){document.getElementById("cell"+k+"_"+j).innerText = number2;}
        }
      }

    }
  });
}

//assigning the first numbers
function placeNumbers() {
  document.getElementById("cell0_3").innerText = "4";
  document.getElementById("cell1_3").innerText = "2";
  document.getElementById("cell2_0").innerText = "3";
  document.getElementById("cell3_0").innerText = "2";
}
