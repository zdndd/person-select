import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, ControlValueAccessor } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-persion-select',
  standalone: true,
  imports: [NzInputModule, ReactiveFormsModule, CommonModule],
  templateUrl: './persion-select.component.html',
  styleUrl: './persion-select.component.less',
})
export class PersionSelectComponent implements ControlValueAccessor {
  writeValue(value: any): void {}
  registerOnChange(fn: (_: any) => void): void {}
  registerOnTouched(fn: any): void {}
  setDisabledState(isDisabled: boolean): void {}
}
