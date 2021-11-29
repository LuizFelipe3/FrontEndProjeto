import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moveis',
  templateUrl: './moveis.component.html',
  styleUrls: ['./moveis.component.css']
})
export class MoveisComponent implements OnInit {
  atacadaotech : any =
[

{
  pathImage: 'assets/Moveis/CadeiraEscritorio.jpg',
  name: ' Cadeira Escritorio',
  

},{
   pathImage: 'assets/Moveis/CadeiraGamer.jpg',
  name: ' Cadeira Gamer',
  

},{
  pathImage: 'assets/Moveis/CadeiraPlastico.jpg',
  name: ' Cadeira Plastico',
  

},{
  pathImage: 'assets/Moveis/ConjuntoMesa.jpg',
  name: ' Conjunto Mesa',
  

},{
  pathImage: 'assets/Moveis/Escrivaninha.jpg',
  name: ' Escrivaninha',
  

},{
   
   pathImage: 'assets/Moveis/MesinhaRedonda.jpg',
  name: ' Mesinha Redonda',
  

},{
   pathImage: 'assets/Moveis/PainelTV.jpg',
  name: ' Painel TV',
  

},{
   pathImage: 'assets/Moveis/PainelTV2.jpg',
  name: ' Painel TV2',
  

},{
   pathImage: 'assets/Moveis/Rack.jpg',
  name: ' Rack',

},{
  pathImage: 'assets/Moveis/Sofá.jpg',
  name: ' Sofá',


}


]

  constructor() { }

  ngOnInit(): void {
  }

}
