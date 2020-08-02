import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { RoomPageComponent } from './components/room-page/room-page.component';
import { TokenComponent } from './components/token/token.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    RoomPageComponent,
    TokenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
