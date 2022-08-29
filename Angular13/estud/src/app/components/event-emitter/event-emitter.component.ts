import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-emitter',
  templateUrl: './event-emitter.component.html',
  styleUrls: ['./event-emitter.component.less']
})
export class EventEmitterComponent implements OnInit {
  numero!: number;
  constructor() { }

  alterarNumero(): void {
    this.numero = Math.random() * 10;
  }

  ngOnInit(): void {
  }

}
