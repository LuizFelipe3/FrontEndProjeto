import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit {
  atacadaotech: any = [
    {
      pathImage: 'assets/Audio/Bombox.jpg',
     name: ' Bombox',
     

},
{
     pathImage: 'assets/Audio/CaixadeSom.jpg',
     name: ' Caixa de Som',
     

},
{
      pathImage: 'assets/Audio/CaixadeSomJBL.jpg',
     name: ' Caixa  de Som JBL',
     

},{
      pathImage: 'assets/Audio/FoneOuvido.jpg',
     name: ' Fone Ouvido',
     

},{
     pathImage: 'assets/Audio/FoneOuvidoJBL.jpg',
     name: ' Fone Ouvido JBL',
     

},{
     pathImage: 'assets/Audio/Headphone.jpg',
     name: ' Headphone',
     

},{
      pathImage: 'assets/Audio/Headset.jpg',
     name: ' Headset',
     

},{
      pathImage: 'assets/Audio/HeadsetPS5.jpg',
     name: ' Headset PS5',
     

},{
      pathImage: 'assets/Audio/JBLExtreme.jpg',
     name: ' JBL Extreme',
     

},{
      pathImage: 'assets/Audio/MiniSystem.jpg',
     name: ' Mini System',

}

  ] 

  constructor() { }

  ngOnInit(): void {
  }

}
