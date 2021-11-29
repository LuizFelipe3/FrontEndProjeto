import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-automotivo',
  templateUrl: './automotivo.component.html',
  styleUrls: ['./automotivo.component.css']
})
export class AutomotivoComponent implements OnInit {
  atacadaotech : any =
[
  {
    pathImage: 'assets/Automotivo/AltoFalante.jpg',
   name: ' Alto Falante',
   
},
{
    pathImage: 'assets/Automotivo/CalibradorPneu.jpg',
   name: ' Calibrador Pneu',
   

},
{
    pathImage: 'assets/Automotivo/CapaceteMoto.jpg',
   name: ' Capacete Moto',
   

},{
    pathImage: 'assets/Automotivo/CapaChuva.jpg',
   name: ' Capa Chuva',
   

},{
    pathImage: 'assets/Automotivo/kitCapaChuva.jpg',
   name: ' Kit Capa Chuva',
   

},{
    pathImage: 'assets/Automotivo/KitSom.jpg',
   name: ' Kit Som',
   

},{
    pathImage: 'assets/Automotivo/LuvaMotoqueiro.jpg',
   name: ' Luva Motoqueiro',
   

},{
    pathImage: 'assets/Automotivo/Multimidia.jpg',
   name: ' Multimidia',
   

},{
    pathImage: 'assets/Automotivo/PneuCarro.jpg',
   name: ' Pneu Carro',
   

},{
    pathImage: 'assets/Automotivo/SomAutomotivo.jpg',
   name: ' Som Automotivo',
   
}


]

  constructor() { }

  ngOnInit(): void {
  }

}
