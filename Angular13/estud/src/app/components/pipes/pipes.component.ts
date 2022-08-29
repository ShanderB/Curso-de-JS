import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.less']
})
export class PipesComponent implements OnInit {
  someText: string = "Test Pipe"

  constructor() { }

  ngOnInit(): void {
  }

}
