import { Component, ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { CommonModalComponent } from './common-modal/common-modal.component';

@Component({
  selector: 'my-app',
  template: `
    <div class="app-container">
      <button mat-button (click)="launch()">Launch!</button>
    </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private modalService: MatDialog) {}

  launch() {
    let dialogRef = this.modalService.open(CommonModalComponent, {});
  }
}
