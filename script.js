const Player = function(symbol, isTurn){
  return { symbol, isTurn };
}
function setId(){
  let index = 0;
  const gameBoard = document.querySelector("#gameBoard");
  Array.from(gameBoard.children).forEach(element => {
    element.setAttribute('id', index);
    index++;
  });
}  

let Game = (function(){  
  let player1 = new Player("X", true);
  let player2 = new Player("O", false);
  let initialBoard = ["", "", "", "", "", "", "", "", ""];
  const gameBoard = document.querySelector("#gameBoard");
  for(let i=0 ; i<9;i++){
    const tile = document.createElement('button');
    tile.addEventListener('click', function(){
      toDisplay(player1, player2, tile, initialBoard);
    })
    gameBoard.append(tile);
  };

})();
setId();

function toDisplay(p1, p2, piece, board){
  pyTurn = playerTurn(p1, p2);
  piece.textContent = pyTurn;
  board[piece.getAttribute('id')] = pyTurn;
  console.log(board);
  piece.disabled = true;
}


function playerTurn(one, two){
  return one.isTurn?changeTurn(one, two): changeTurn(two, one);
}

function changeTurn(player1, player2){
  const turnPara = document.querySelector("#turnPara");
  player1.isTurn = false;
  player2.isTurn = true;
  turnPara.textContent = player2.symbol+"'s turn!";
  return player1.symbol;
}

function CheckWin(one, two, board){
  const win = [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  
}
