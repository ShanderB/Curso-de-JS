import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-render',
  templateUrl: './lista-render.component.html',
  styleUrls: ['./lista-render.component.less']
})
export class ListaRenderComponent implements OnInit {
  animais = [
    {nome: "Macaco", tipo: "sla"},
    {nome: "Ajax", tipo: "asd"},
    {nome: "Luzas", tipo: "11111"},
    {nome: "Podsa", tipo: "456"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
