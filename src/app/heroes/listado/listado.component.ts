import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit(): void {
  }

  heroes: string[] = ['Spiderman', 'Ironman','Hulk','Thor','Capitan America'];
  heroeBorrado: string = '';

  borrarHeroe(){
  //console.log('Borrando...');

  this.heroeBorrado  = this.heroes.shift() || '';
    //console.log(heroeBorrado);
  }



}
