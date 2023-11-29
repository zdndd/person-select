import { Component, forwardRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { map } from 'lodash';

import {
  ReactiveFormsModule,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ExponentialStrengthPipe } from '../../pipe/valueString.pipe';

@Component({
  selector: 'app-persion-select',
  standalone: true,
  imports: [NzInputModule, ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './persion-select.component.html',
  styleUrl: './persion-select.component.less',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PersionSelectComponent),
      multi: true,
    },
  ],
})
export class PersionSelectComponent implements ControlValueAccessor, OnInit {
  _personValue: string | null = '';
  private _onChange = (_: any) => {};
  private _onTouched = (_: any) => {};

  modelChange(e: any) {
    console.log('change', e);
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

  ngOnInit() {
    console.log(this.personValue);
  }
}
