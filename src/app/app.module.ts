import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AudioComponent } from './categorias/audio/audio.component';
import { AutomotivoComponent } from './categorias/automotivo/automotivo.component';
import { CelularesComponent } from './categorias/celulares/celulares.component';
import { EletrodomesticosComponent } from './categorias/eletrodomesticos/eletrodomesticos.component';
import { EletroportateisComponent } from './categorias/eletroportateis/eletroportateis.component';
import { MoveisComponent } from './categorias/moveis/moveis.component';
import { NotebooksComponent } from './categorias/notebooks/notebooks.component';
import { EsporteelazerComponent } from './categorias/esporteelazer/esporteelazer.component';
import { GameseconsolesComponent } from './categorias/gameseconsoles/gameseconsoles.component';
import { TelevisaovideoComponent } from './categorias/televisaovideo/televisaovideo.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
@NgModule({
  declarations: [
    AppComponent,
    AudioComponent,
    AutomotivoComponent,
    CelularesComponent,
    EletrodomesticosComponent,
    EletroportateisComponent,
    MoveisComponent,
    NotebooksComponent,
    EsporteelazerComponent,
    GameseconsolesComponent,
    TelevisaovideoComponent,
    HomeComponent,
    MenuComponent
  ],

  imports: [
   BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
