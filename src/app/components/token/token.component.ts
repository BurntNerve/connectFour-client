import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { BoardToken } from 'src/app/classes/board-token';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss']
})
export class TokenComponent implements OnInit {

  constructor() { }

  @Input() token: BoardToken;

  ngOnInit(): void {
  }
}
