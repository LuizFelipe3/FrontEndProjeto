import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gameseconsoles',
  templateUrl: './gameseconsoles.component.html',
  styleUrls: ['./gameseconsoles.component.css']
})
export class GameseconsolesComponent implements OnInit {
  atacadaotech : any =
  [
    
{
  pathImage: 'assets/GameseConsoles/ControleAndroid.jpg',
  name: ' Controle Android',
  

},{
   pathImage: 'assets/GameseConsoles/ControleNitendo.jpg',
  name: ' Controle Nitendo',
  

},{
  pathImage: 'assets/GameseConsoles/ControlePS3.jpg',
  name: ' Controle PS3',
  

},{
  pathImage: 'assets/GameseConsoles/ControlePS4.jpg',
  name: ' Controle PS4',
  

},{
   pathImage: 'assets/GameseConsoles/ControlePS5.jpg',
  name: ' Controle PS5',
  

},{
   
   pathImage: 'assets/GameseConsoles/FarcryPS4.jpg',
  name: ' Farcry PS4',
  

},{
   pathImage: 'assets/GameseConsoles/Fifa22PS5.jpg',
  name: ' Fifa 22 PS5',
  

},{
   pathImage: 'assets/GameseConsoles/GTAVPS3.jpg',
  name: ' GTA V PS3',
  

},{
   pathImage: 'assets/GameseConsoles/VolanteGamer.jpg',
  name: 'Volante Gamer',

},{
  pathImage: 'assets/GameseConsoles/XboxSeriesX.jpg',
  name: ' Xbox Series X',


}


  ]

  constructor() { }

  ngOnInit(): void {
  }

}
