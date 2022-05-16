import {
  Component,
  Input,
  OnInit,
  Self,
  Optional,
  forwardRef,
} from '@angular/core';
import {
  ControlValueAccessor,
  NgControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

export interface IFieldInfo {
  name: string;
  label: string;
  type?: 'text' | 'number' | 'email' | 'password';
  disabled?: boolean;
  placeholder?: string;
}
const defaultFieldInfo: IFieldInfo = {
  name: null,
  label: null,
  type: 'text',
  disabled: false,
  placeholder: null,
};

@Component({
  selector: 'app-common-input',
  templateUrl: './common-input.component.html',
  styleUrls: ['./common-input.component.css'],
})
export class CommonInputComponent implements OnInit {
  @Input() fieldInfo: IFieldInfo;

  value!: any;

  constructor(
    // Retrieve the dependency only from the local injector,
    // not from parent or ancestors.
    @Self()
    // We want to be able to use the component without a form,
    // so we mark the dependency as optional.
    @Optional()
    public ngControl: NgControl
  ) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit() {
    this.fieldInfo = this.fieldInfo || defaultFieldInfo;
  }

  /**
   * Write form value to the DOM element (model => view)
   */
  writeValue(value: any): void {
    this.value = value;
  }

  /**
   * Write form disabled state to the DOM element (model => view)
   */
  setDisabledState(isDisabled: boolean): void {
    this.fieldInfo.disabled = isDisabled;
  }

  /**
   * Update form when DOM element value changes (view => model)
   */
  registerOnChange(fn: any): void {
    // Store the provided function as an internal method.
    this.onChange = fn;
  }

  /**
   * Update form when DOM element is blurred (view => model)
   */
  registerOnTouched(fn: any): void {
    // Store the provided function as an internal method.
    this.onTouched = fn;
  }

  public onChange(ev: any) {}
  public onTouched() {}

  getErrorMessage() {
    if (this.ngControl.errors.required) {
      return 'This field is required';
    }

    return this.ngControl.hasError('email')
      ? 'Invalid email'
      : 'Something is not right';
  }
}
