var board = document.getElementById("board");
var size = 3;
var circle = "radio_button_unchecked"
var xx = "close"
var firstPlayer = xx;
var playerX = [];
var playerO = [];
var moves = 0;
var winCond = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];

function genBoard(){
    var count = 0;
    var table = document.createElement("table");

    for(var i = 0; i < size; i++){

        var tr = document.createElement("tr")
        
        for(var j = 0; j < size; j++){

            var td = document.createElement("td");
            var ii = document.createElement("i")
            ii.className = "material-icons";
            
            td.appendChild(ii)
            tr.appendChild(td);
            count++
            td.id = count;
            td.addEventListener("click", game);      
        }
        table.appendChild(tr);
    }
    board.appendChild(table);
}
genBoard();

function game (e) {
    var id = e.target.getAttribute("id")
    e.target.lastChild.innerHTML = firstPlayer;
    e.target.style.backgroundColor = "#FDE900";

    if(firstPlayer == xx){  
        firstPlayer = circle;
        playerX.push(parseInt(id))                  
    }else{
        firstPlayer = xx;
        playerO.push(parseInt(id))
    }
    e.target.removeEventListener("click",game);   
    moves++;

    if(moves >= 5){
        winLog();
    }  
}

function winLog (){
   
    let winnerArr1 = winCond.filter(c1 => c1.filter(p1 => {
    return playerX.indexOf(p1) > -1;
    }).length == 3);

   if(winnerArr1.length == 1){
       alert("X wins !");
       newGame();
   }

   let winnerArr2 = winCond.filter(c2 => c2.filter(p2 => {
       return playerO.indexOf(p2) > -1;
   }).length == 3);

   if(winnerArr2.length == 1){
       alert("O wins !");
       newGame();
   }
   if(winnerArr1.length == 0 && winnerArr2.length == 0 && moves == 9){
       alert("Unresolved !");
       newGame();
   }
}

function newGame (){
    while(board.hasChildNodes()){
        board.removeChild(board.lastChild);
    }
    genBoard();
    moves = 0;
    playerX = [];
    playerO = [];
    firstPlayer = xx;
}