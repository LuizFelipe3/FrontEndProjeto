import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eletrodomesticos',
  templateUrl: './eletrodomesticos.component.html',
  styleUrls: ['./eletrodomesticos.component.css']
})
export class EletrodomesticosComponent implements OnInit {
  atacadaotech : any =
  [

    
{
  pathImage: 'assets/Eletrodomesticos/Centrifuga.jpg',
  name: ' Centrifuga',
  

},{
   pathImage: 'assets/Eletrodomesticos/Fogao4Bocas.jpg',
  name: ' Fogao 4 Bocas',
  

},{
  pathImage: 'assets/Eletrodomesticos/Fogao5Bocas.jpg',
  name: ' Fogao 5 Bocas',
  

},{
  pathImage: 'assets/Eletrodomesticos/FornoEletrico.jpg',
  name: ' Forno Eletrico',
  

},{
   pathImage: 'assets/Eletrodomesticos/Geladeira.jpg',
  name: ' Geladeira',
  

},{
   
   pathImage: 'assets/Eletrodomesticos/GeladeiraRefrigerador.jpg',
  name: ' Geladeira Refrigerador',
  

},{
   pathImage: 'assets/Eletrodomesticos/Micro-ondas.jpg',
  name: ' Micro Ondas',
  

},{
   pathImage: 'assets/Eletrodomesticos/RefrigeradorPanasonic.jpg',
  name: ' Refrigerador Panasonic',
  

},{
   pathImage: 'assets/Eletrodomesticos/Servejeira.jpg',
  name: ' Servejeira',

},{
   pathImage: 'assets/Eletrodomesticos/Tanquinho.jpg',
  name: ' Tanquinho',

}


  ]

  constructor() { }

  ngOnInit(): void {
  }

}
