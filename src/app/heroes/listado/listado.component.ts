import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['Spiderman','Ironman','Thor','Hulk','Eye Hawk'];

  heroeDeleted: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  delete(): void {
    this.heroeDeleted = this.heroes.splice(0,1)[0] || '';
  }
}
