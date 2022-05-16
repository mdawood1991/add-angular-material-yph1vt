import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// Import of the angular-material angular module
import { AngularMaterialModule } from '../angular-material/angular-material.module';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material';
import { MyFormComponent } from './my-form/my-form.component';
import { CommonModalComponent } from './common-modal/common-modal.component';
import { CommonInputComponent } from './common-input/common-input.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AngularMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  //exports: [MyFormComponent, CommonModalComponent, CommonInputComponent],

  entryComponents: [
    MyFormComponent,
    CommonModalComponent,
    CommonInputComponent,
  ],
  declarations: [
    AppComponent,
    MyFormComponent,
    CommonModalComponent,
    CommonInputComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
