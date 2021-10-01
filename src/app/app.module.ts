import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { CartaComponent } from './carta';
import { ReiniciarJogoComponent } from './reiniciar-jogo';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CartaComponent,
    ReiniciarJogoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
