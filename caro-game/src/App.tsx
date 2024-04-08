import { useState, useEffect } from "react";

export default function App() {
  const [numberOfTiles, setNumberOfTiles] = useState(3);
  const [boardState, setBoardState] = useState<number[][]>([]);
  //NOTE: x=1, o=0, X go first
  const [whoseTurn, setWhoseTurn] = useState(1);
  const [whoWon, setWhoWon] = useState(-1);

  useEffect(() => {
    const b: number[][] = [];
    for (let j = 0; j < numberOfTiles; j++) {
      b[j] = [];
      for (let i = 0; i < numberOfTiles; i++) {
        b[j][i] = -1;
      }
    }
    setBoardState(b);
  }, [numberOfTiles]);

  function renderBoard() {
    return boardState.map((jArray, y) => {
      return (
        <div>
          {jArray.map((e, x) => (
            <button onClick={(event) => PlayerMove(event, whoseTurn, y, x)}>
              {`${e}, ${x} - ${y}`}
            </button>
          ))}
        </div>
      );
    });
  }

  function ResetBoard(e: React.MouseEvent<HTMLButtonElement>) {
    setWhoWon(-1);
    console.log(whoWon);
    setWhoseTurn(1);
    setNumberOfTiles(3);
  }

  function PlayerMove(
    event: React.MouseEvent<HTMLButtonElement>,
    player: number,
    yCoordinates: number,
    xCoordinates: number,
  ): React.MouseEventHandler<HTMLButtonElement> {
    event.preventDefault();
    const board = [...boardState];
    if (board[yCoordinates][xCoordinates] !== -1) return;
    board[yCoordinates][xCoordinates] = player;
    setBoardState(board);
    if (HasPlayerWon(player, yCoordinates, xCoordinates)) {
      setWhoWon(player);
      console.log("someone won");
      return;
    }
    setWhoseTurn(player === 1 ? 0 : 1);
  }

  function CheckWin(
    player: number,
    checkingYCoordinate: number,
    checkingXCoordinate: number,
    winCondition: number,
    stackList: number[][],
  ): boolean {
    // NOTE: base case
    if (checkingXCoordinate >= numberOfTiles || checkingXCoordinate < 0)
      return false;
    if (checkingYCoordinate >= numberOfTiles || checkingYCoordinate < 0)
      return false;
    if (boardState[checkingYCoordinate][checkingXCoordinate] !== player)
      return false;
    for (let i = 0; i < stackList.length; i++) {
      if (
        stackList[i][0] === checkingYCoordinate &&
        stackList[i][1] === checkingXCoordinate
      )
        return false;
    }

    stackList.push([checkingYCoordinate, checkingXCoordinate]);
    if (stackList.length === winCondition) return true;
    return (
      CheckWin(
        player,
        checkingYCoordinate,
        checkingXCoordinate + 1,
        winCondition,
        stackList,
      ) ||
      CheckWin(
        player,
        checkingYCoordinate + 1,
        checkingXCoordinate,
        winCondition,
        stackList,
      ) ||
      CheckWin(
        player,
        checkingYCoordinate + 1,
        checkingXCoordinate + 1,
        winCondition,
        stackList,
      ) ||
      CheckWin(
        player,
        checkingYCoordinate,
        checkingXCoordinate - 1,
        winCondition,
        stackList,
      ) ||
      CheckWin(
        player,
        checkingYCoordinate - 1,
        checkingXCoordinate,
        winCondition,
        stackList,
      ) ||
      CheckWin(
        player,
        checkingYCoordinate - 1,
        checkingXCoordinate - 1,
        winCondition,
        stackList,
      ) ||
      CheckWin(
        player,
        checkingYCoordinate + 1,
        checkingXCoordinate - 1,
        winCondition,
        stackList,
      ) ||
      CheckWin(
        player,
        checkingYCoordinate - 1,
        checkingXCoordinate + 1,
        winCondition,
        stackList,
      )
    );
  }
  function HasPlayerWon(
    player: number,
    lastMoveYCoordinate: number,
    lastMoveXCoordinate: number,
  ): boolean {
    return CheckWin(player, lastMoveYCoordinate, lastMoveXCoordinate, 3, []);
  }

  if (whoWon !== -1) {
    console.log(whoWon);
    return (
      <>
        <div>{`Player ${whoWon} has won`}</div>
        <button onClick={(e) => ResetBoard()}>Reset</button>
      </>
    );
  } else return renderBoard();
}
