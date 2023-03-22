const Player = function(symbol, isTurn){
  return { symbol, isTurn };
}


const Game = () => {  
  let player1 = Player("X", true);
  let player2 = Player("O", false);
  let initialBoard = ["", "", "", "", "", "", "", "", ""];
  const gameBoard = document.querySelector("#gameBoard");

  const setId = () => {
    let index = 0;
    const gameBoard = document.querySelector("#gameBoard");
    Array.from(gameBoard.children).forEach(element => {
      element.setAttribute('id', index);
      index++;
    });
  };

  const toDisplay = (p1, p2, piece, board) => {
    pyTurn = playerTurn(p1, p2);
    piece.textContent = pyTurn;
    board[piece.getAttribute('id')] = pyTurn;
    piece.disabled = true;
    checkDraw();
    checkWin(p1, p2, board);
  };
  
  const playerTurn = (one, two) => {
    return one.isTurn?changeTurn(one, two): changeTurn(two, one);
  }

  const changeTurn = (player1, player2) => {
    const turnPara = document.querySelector("#turnPara");
    player1.isTurn = false;
    player2.isTurn = true;
    turnPara.textContent = player2.symbol+"'s turn!";
    return player1.symbol;
  }

  const checkWin = (one, two, board) => {
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
  
    for(let i = 0; i<win.length; i++){
      let a = win[i][0];
      let b = win[i][1];
      let c = win[i][2];
      symbolCheck(a, b, c, one.symbol, board);
      symbolCheck(a, b, c, two.symbol, board);
    }
  }

  const symbolCheck = (one, two , three, symbol, board) => {
    if(board[one] === symbol && board[two] === symbol && board[three] === symbol){
      declareWinner(symbol);
    }
  }
  
  const declareWinner = (winner)=>{
    const para = document.querySelector("#turnPara");
    para.textContent = `${winner} won!`;
    const gameBoard = document.querySelector("#gameBoard");
    Array.from(gameBoard.children).forEach(element => {
      element.disabled = true;
    });
  }
  
  const checkDraw = () => {
    const para = document.querySelector("#turnPara");
    let filled = true;
    const gameBoard = document.querySelector("#gameBoard");
    Array.from(gameBoard.children).forEach(element => {
      if(element.textContent === ""){
        filled = false;
      }
    });
    if(filled){
      para.textContent = "It's a draw!";
    } 
  }

  for(let i=0 ; i<9;i++){
    const tile = document.createElement('button');
    tile.addEventListener('click', function(){
      toDisplay(player1, player2, tile, initialBoard);
    })
    gameBoard.append(tile);
  };

  setId();
};

Game();