import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BoardToken } from '../classes/board-token';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  private _BOARD_COLUMNS = 7;
  private _BOARD_ROWS = 6;

  private _board$: BehaviorSubject<BoardToken[][]> = new BehaviorSubject([]);
  board$ = this._board$.asObservable();

  get board(): BoardToken[][] {
    return this._board$.getValue();
  }

  set board(newValue) {
    this._board$.next(newValue);
  }

  // Generate board tokens and prepare for game start.
  initBoard(): void {
    const newBoard = [];
    let tokenCount = 0;
    for (let columnCount = 0; columnCount < this._BOARD_COLUMNS; columnCount++) {
      const newColumn = [];
      for (let rowCount = 0; rowCount < this._BOARD_ROWS; rowCount++) {
        newColumn.push(new BoardToken(tokenCount));
        tokenCount++;
      }
      newBoard.push(newColumn);
    }
    this.board = [...newBoard];
  }

  // Allows current player to place a token on the board.
  playToken(columnIndex: number, isMine: boolean): void {
    const currentColumn = this.board[columnIndex];
    // Check if the top token in the column has already been played.
    if (currentColumn[0].isMine !== null) {
      throw new Error('This column is full already.');
    }

    // Iterate through columns starting with end.
    // If the token has not been played, play there.
    for (let i = currentColumn.length - 1; i >= 0; i--) {
      const currentToken = currentColumn[i];
      if (currentToken.isMine === null) {
        this.board[columnIndex][i] = {
          ...currentToken,
          isMine
        };
        break;
      }
    }
  }
}
