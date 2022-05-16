import { Component, ViewChild, ElementRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { CommonModalComponent } from './common-modal/common-modal.component';
import { MyFormComponent } from './my-form/my-form.component';

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
    let dialogRef = this.modalService.open(MyFormComponent, {
      width: '250px',
    });
  }
}
