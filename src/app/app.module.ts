import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { GameComponent } from './page/game/game.component';
import { ContactComponent } from './page/contact/contact.component';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HeadbarComponent } from './common/headbar/headbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent,
    ContactComponent,
    HeadbarComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HighlightModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
