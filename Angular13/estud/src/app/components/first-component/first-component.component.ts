import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.less']
})
export class FirstComponentComponent implements OnInit {
  @Input() name!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
