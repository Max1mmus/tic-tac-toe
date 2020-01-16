var board = document.getElementById("board");
var size = 3;
var circle = "radio_button_unchecked"
var xx = "close"
var firstPlayer = xx;
var playerX = [];
var playerO = [];
var players = [];
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

function genGrid(){
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

            td.addEventListener("click", someF);      
        }
        table.appendChild(tr);
    }
    board.appendChild(table);
}
genGrid();

function someF (e) {
    var id = e.target.getAttribute("id")
    e.target.lastChild.innerHTML = firstPlayer;
    e.target.style.backgroundColor = "#FDE900";

    if(firstPlayer == xx){  
        firstPlayer = circle;
        playerX.push(parseInt(id)) 
        playerX.sort(); 
                 
    }else
    {
        firstPlayer = xx;
        playerO.push(parseInt(id))
        playerO.sort();
    }
    e.target.removeEventListener("click",someF);
    players.push(playerX,playerO);     
    moves++       
}
