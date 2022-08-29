import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.less']
})
export class ChangeNumberComponent implements OnInit {
  @Output() mudarNumero: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  alterarNumero(): void {
    this.mudarNumero.emit();
  }

}
