import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tool } from '../shared/tool.model';
import { ToolService } from '../shared/tool.service';

@Component({
  selector: 'app-tool-list',
  template: `
    <ul *ngIf="tools$ | async as tools">
      <li *ngFor="let tool of tools">
        <h3>{{ tool.name }}</h3>
        <p>{{ tool.description }}</p>
        <button *ngFor="let step of tool.steps">
          {{ step.name }}
        </button>
      </li>
    </ul>
  `,
  styles: [],
})
export class ToolListComponent implements OnInit {
  tools$: Observable<Tool[]> = new Observable();
  constructor(private toolService: ToolService) {}

  ngOnInit(): void {
    this.tools$ = this.toolService.getAll();
  }
}
