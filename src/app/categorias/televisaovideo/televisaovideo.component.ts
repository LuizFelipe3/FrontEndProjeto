import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-televisaovideo',
  templateUrl: './televisaovideo.component.html',
  styleUrls: ['./televisaovideo.component.css']
})
export class TelevisaovideoComponent implements OnInit {
  atacadaotech : any =
  [
    
{
  pathImage: 'assets/TelevisaoVideo/AntenaDigital.jpg',
  name: ' Antena Digital',
  

},{
   pathImage: 'assets/TelevisaoVideo/CaboHDMI.jpg',
  name: ' Cabo HDMI',
  

},{
  pathImage: 'assets/TelevisaoVideo/Chromecast3.jpg',
  name: ' Chrome cast 3',
  

},{
  pathImage: 'assets/TelevisaoVideo/ControleUniversal.jpg',
  name: ' Controle Universal',
  

},{
  pathImage: 'assets/TelevisaoVideo/ConversorDigital.jpg',
  name: ' Conversor Digital',
  

},{
   
   pathImage: 'assets/TelevisaoVideo/SmartTVled32.jpg',
  name: ' SmartTV led 32',
  

},{
   pathImage: 'assets/TelevisaoVideo/SmartTVLG50.jpg',
  name: ' SmartTV LG 50',
  

},{
   pathImage: 'assets/TelevisaoVideo/Smartv4K65.jpg',
  name: ' Smartv 4K 65',
  

},{
   pathImage: 'assets/TelevisaoVideo/SuporteTV.jpg',
  name: ' Suporte TV',

},{
  
   pathImage: 'assets/TelevisaoVideo/SuporteTV2.jpg',
  name: ' Suporte TV 2',


}


  ]

  constructor() { }

  ngOnInit(): void {
  }

}
