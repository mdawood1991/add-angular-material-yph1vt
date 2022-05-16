import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

export interface IModalConfig {
  title: string;
  dismissButtonLabel?: string;
  closeButtonLabel?: string;
  shouldClose?(): Promise<boolean> | boolean;
  shouldDismiss?(): Promise<boolean> | boolean;
  onClose?(): Promise<boolean> | boolean;
  onDismiss?(): Promise<boolean> | boolean;
  disableCloseButton?(): boolean;
  disableDismissButton?(): boolean;
  hideCloseButton?(): boolean;
  hideDismissButton?(): boolean;
}

@Component({
  selector: 'app-common-modal',
  templateUrl: './common-modal.component.html',
  styleUrls: ['./common-modal.component.css'],
})
export class CommonModalComponent implements OnInit {
  @Input() public modalConfig: IModalConfig;
  @Input() public formModal: FormGroup;

  constructor() {}

  ngOnInit() {}

  onSave() {
    // TODO: POST TO SERVER, HANDLE VALIDATION ERRORS, HANDLE SUCCESS!
  }
}
