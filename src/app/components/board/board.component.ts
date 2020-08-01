import { Component, OnInit } from '@angular/core';
import {BoardToken} from '../../classes/board-token';
import {GameService} from '../../services/game.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor(private GAME: GameService) { }

  board: BoardToken[][] = [];

  ngOnInit(): void {
    this.GAME.initBoard();
    this.GAME.board$.subscribe(newBoard => {
      this.board = newBoard;
    });
  }

  handleColumnClick(columnIndex: number): void {
    if (this.board[columnIndex][0].isMine !== null) {
      return;
    }

    this.GAME.playToken(columnIndex, true);
  }


}
