import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { AudioComponent } from './categorias/audio/audio.component';
import { AutomotivoComponent } from './categorias/automotivo/automotivo.component';
import { CelularesComponent } from './categorias/celulares/celulares.component';
import { EletrodomesticosComponent } from './categorias/eletrodomesticos/eletrodomesticos.component';
import { EletroportateisComponent } from './categorias/eletroportateis/eletroportateis.component';
import { GameseconsolesComponent } from './categorias/gameseconsoles/gameseconsoles.component';
import { MoveisComponent } from './categorias/moveis/moveis.component';
import { NotebooksComponent } from './categorias/notebooks/notebooks.component';
import { TelevisaovideoComponent } from './categorias/televisaovideo/televisaovideo.component';
import { HomeComponent } from './home/home.component';
import { EsporteelazerComponent } from './categorias/esporteelazer/esporteelazer.component';
 

const routes: Routes = [
 {
  path: '', redirectTo: '/home', pathMatch: 'full'
},
{
 path: 'home', component: HomeComponent
},
{
  path: 'audio', component: AudioComponent 
 },
 {
  path: 'celulares', component: CelularesComponent 
 },
 {
  path: 'eletrodomesticos', component: EletrodomesticosComponent
 },
 {
  path: 'eletroportateis', component: EletroportateisComponent 
 },
 {
  path: 'esporteeLazera', component: EsporteelazerComponent 
 },
 {
  path: 'gameseConsoles', component: GameseconsolesComponent
 },
 {
  path: 'moveis', component: MoveisComponent 
 },
 {
  path: 'notebooks', component: NotebooksComponent 
 },
 {
  path: 'televisaoVideo', component: TelevisaovideoComponent
 },
 {
  path: 'automotivo', component: AutomotivoComponent 
 },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

