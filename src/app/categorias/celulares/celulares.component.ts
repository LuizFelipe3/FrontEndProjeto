import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-celulares',
  templateUrl: './celulares.component.html',
  styleUrls: ['./celulares.component.css']
})
export class CelularesComponent implements OnInit {
  atacadaotech: any =
  [
    
    {
      pathImage: 'assets/Celulares/GalaxyA02.jpg',
     name: ' Galaxy A02',
     

},
{
     pathImage: 'assets/Celulares/GalaxyA03s.jpg',
     name: ' Galaxy A03s',
     

},
{
     pathImage: 'assets/Celulares/GalaxyA12.jpg',
     name: ' Galaxy A12',
     

},{
      pathImage: 'assets/Celulares/GalaxyA22.jpg',
     name: ' Galaxy A22',
     

},{
     pathImage: 'assets/Celulares/Iphone11.jpg',
     name: ' Iphone 11',
     

},{
     pathImage: 'assets/Celulares/Iphone12.jpg',
     name: ' Iphone 12',
     

},{
      pathImage: 'assets/Celulares/LGK41s.jpg',
     name: ' LG K41s',
     

},{
      pathImage: 'assets/Celulares/lgK52.jpg',
     name: ' lg K52',
     

},{
      pathImage: 'assets/Celulares/Motog30.jpg',
     name: ' Moto g30',
     

},{
      pathImage: 'assets/Celulares/MotorolaE7.jpg',
     name: ' Motorola E7',
     
}

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
