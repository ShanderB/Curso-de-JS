import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/interfaces/Animal';
@Component({
  selector: 'app-lista-render',
  templateUrl: './lista-render.component.html',
  styleUrls: ['./lista-render.component.less']
})
export class ListaRenderComponent implements OnInit {
  animais: Animal[] = [
    {nome: "Macaco", tipo: "sla"},
    {nome: "Ajax", tipo: "asd"},
    {nome: "Luzas", tipo: "11111"},
    {nome: "Podsa", tipo: "456"},
  ]
  showType!: boolean;

  constructor() { }
  mostrarTipo(): void {
    this.showType = !this.showType;
  }
  ngOnInit(): void {
  }

}
