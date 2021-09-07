import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-fruit-list [fruits]="data"></app-fruit-list>
    <button (click)="onClickChange()">Change List</button>
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  data = ['Apple', 'Orange', 'Plum'];

  ngOnInit(): void {}

  onClickChange() {
    this.data = ['Banana', 'Kiwi', 'Grape'];
  }
}
