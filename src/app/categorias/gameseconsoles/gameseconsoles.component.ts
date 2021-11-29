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
  pathImage: 'assets/GamesConsoles/ControleAndroid.jpg',
  name: ' Controle Android',
  

},{
   pathImage: 'assets/GamesConsoles/ControleNitendo.jpg',
  name: ' Controle Nitendo',
  

},{
  pathImage: 'assets/GamesConsoles/ControlePS3.jpg',
  name: ' Controle PS3',
  

},{
  pathImage: 'assets/GamesConsoles/ControlePS4.jpg',
  name: ' Controle PS4',
  

},{
   pathImage: 'assets/GamesConsoles/ControlePS5.jpg',
  name: ' Controle PS5',
  

},{
   
   pathImage: 'assets/GamesConsoles/FarcryPS4.jpg',
  name: ' Farcry PS4',
  

},{
   pathImage: 'assets/GamesConsoles/Fifa22PS5.jpg',
  name: ' Fifa 22 PS5',
  

},{
   pathImage: 'assets/GamesConsoles/GTAVPS3.jpg',
  name: ' GTA V PS3',
  

},{
   pathImage: 'assets/GamesConsoles/Volante Gamer.jpg',
  name: ' GTA V PS3',

},{
  pathImage: 'assets/GamesConsoles/XboxSeriesX.jpg',
  name: ' Xbox Series X',


}


  ]

  constructor() { }

  ngOnInit(): void {
  }

}
