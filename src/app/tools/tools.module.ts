import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolListComponent } from './tool-list/tool-list.component';

@NgModule({
  declarations: [ToolListComponent],
  imports: [CommonModule],
  exports: [ToolListComponent],
})
export class ToolsModule {}
