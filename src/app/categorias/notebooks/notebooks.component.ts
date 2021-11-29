import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notebooks',
  templateUrl: './notebooks.component.html',
  styleUrls: ['./notebooks.component.css']
})
export class NotebooksComponent implements OnInit {
  atacadaotech : any =
[
  {
    pathImage: 'assets/Notebooks/ChromebookAcer.jpg',
    name: ' Chromebook Acer',
    
},{
     pathImage: 'assets/Notebooks/NotebookAcer.jpg',
    name: ' Notebook Acer',  

},{
    pathImage: 'assets/Notebooks/NotebookDell2em1.jpg',
    name: ' Notebook Dell 122',
    
},{
    pathImage: 'assets/Notebooks/NotebookDellUltrafino.jpg',
    name: ' Notebook Dell Ultra fino',
    
},{
    pathImage: 'assets/Notebooks/NotebookGamerAcer.jpg',
    name: ' Notebook Gamer Acer',
    
},{
     
     pathImage: 'assets/Notebooks/NotebookGamerDell.jpg',
    name: ' Notebook Gamer Dell',
    

},{
     pathImage: 'assets/Notebooks/NotebookGamerLenovo.jpg',
    name: ' Notebook Gamer Lenovo',
    

},{
     pathImage: 'assets/Notebooks/NotebookPositivo.jpg',
    name: ' Notebook Gamer Positivo',
    

},{
     pathImage: 'assets/Notebooks/NotebookSamsung.jpg',
    name: ' Notebook Samsung',

},{
    pathImage: 'assets/Notebooks/NotebookAspireDell.jpg',
    name: ' Notebook Aspire Dell',

},


]

  constructor() { }

  ngOnInit(): void {
  }

}
