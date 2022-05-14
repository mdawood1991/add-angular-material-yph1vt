import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// For components using angular-animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Imports of used components
import {
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatToolbarModule,
} from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatDialogModule,
  ],
  exports: [MatButtonModule, MatInputModule, MatCardModule, MatToolbarModule],
  declarations: [],
})
export class AngularMaterialModule {}
