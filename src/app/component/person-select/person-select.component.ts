import { Component, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-person-select',
  standalone: false,
  templateUrl: './person-select.component.html',
  styleUrl: './person-select.component.less',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => personSelectComponent),
      multi: true,
    },
  ],
})
export class personSelectComponent implements ControlValueAccessor {
  _personValue: string | null = '';
  private _onChange = (_: any) => {};
  private _onTouched = (_: any) => {};

  modelChange(e: any) {
    this.personValue = e;
  }

  set personValue(value) {
    this._personValue = value;
    this._onChange(this._personValue);
  }

  get personValue() {
    return this._personValue;
  }

  writeValue(value: any): void {
    if (value !== undefined) this.personValue = value;
  }
  registerOnChange(fn: (_: any) => void): void {
    this._onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {}
}
