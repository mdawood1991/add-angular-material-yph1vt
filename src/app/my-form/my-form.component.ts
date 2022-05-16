import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IModalConfig } from '../common-modal/common-modal.component';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css'],
})
export class MyFormComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  formModal: FormGroup = this.formBuilder.group({
    name: this.formBuilder.control(null, [Validators.required]),
    nameOld: this.formBuilder.control(null, [Validators.required]),
  });
  modalConfig: IModalConfig;

  ngOnInit() {
    this.modalConfig = {
      title: 'Create Vehicle',
    };
  }
}
