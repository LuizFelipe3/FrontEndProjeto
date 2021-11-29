import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esporteelazer',
  templateUrl: './esporteelazer.component.html',
  styleUrls: ['./esporteelazer.component.css']
})
export class EsporteelazerComponent implements OnInit {
  atacadaotech: any=
  [
    
{
  pathImage: 'assets/EsporteeLazer/BicicletaAdulto.jpg',
  name: ' Bicicleta Adulto',
  

},{
   pathImage: 'assets/EsporteeLazer/BicicletaInfantil.jpg',
  name: ' Bicicleta Infantil',
  

},{
  pathImage: 'assets/EsporteeLazer/Boné.jpg',
  name: ' Boné',
  

},{
  pathImage: 'assets/EsporteeLazer/ColchoneteAcademia.jpg',
  name: ' Colchonete Academia',
  

},{
   pathImage: 'assets/EsporteeLazer/KitPlacasTatame.jpg',
  name: ' Kit Placas Tatame',
  

},{
   
   pathImage: 'assets/EsporteeLazer/MalaViagem.jpg',
  name: ' Mala Viagem',
  

},{
   pathImage: 'assets/EsporteeLazer/Mochila.jpg',
  name: ' Mochila',
  

},{
   pathImage: 'assets/EsporteeLazer/Patinete.jpg',
  name: ' Patinete',
  

},{
   pathImage: 'assets/EsporteeLazer/SkateInfantil.jpg',
  name: 'Skate infantil',

},{
   pathImage: 'assets/EsporteeLazer/TenisCorrida.jpg',
  name: ' Tenis Corrida',


}



  ]


  constructor() { }

  ngOnInit(): void {
  }

}
