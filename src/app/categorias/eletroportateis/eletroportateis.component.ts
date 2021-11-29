import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eletroportateis',
  templateUrl: './eletroportateis.component.html',
  styleUrls: ['./eletroportateis.component.css']
})
export class EletroportateisComponent implements OnInit {
  atacadaotech: any =
  [
    

    {
      pathImage: 'assets/Eletroportateis/Airfry.jpg',
      name: ' Airfry',
      

},{
       pathImage: 'assets/Eletroportateis/AspiradorPo.jpg',
      name: ' Aspirador Po',
      

},{
      pathImage: 'assets/Eletroportateis/Batedeira.jpg',
      name: ' Batedeira',
      

},{
      pathImage: 'assets/Eletroportateis/Cafeteira.jpg',
      name: ' Cafeteira',
      

},{
       pathImage: 'assets/Eletroportateis/FerrodePassar.jpg',
      name: ' Ferro de Passar',
      

},{
       
       pathImage: 'assets/Eletroportateis/Fritadeira.jpg',
      name: ' Fritadeira',
      

},{
       pathImage: 'assets/Eletroportateis/Liquidificador.jpg',
      name: ' Liquidificador',
      

},{
       pathImage: 'assets/Eletroportateis/MiniProcessador.jpg',
      name: ' Mini Processador',
      

},{
       pathImage: 'assets/Eletroportateis/PurificadorAgua.jpg',
      name: ' Purificador Agua',

},{
       pathImage: 'assets/Eletroportateis/Sanduicheira.jpg',
      name: ' Sanduicheira'

}


  ]

  constructor() { }

  ngOnInit(): void {
  }

}
