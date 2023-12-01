import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';

import { personSelectComponent } from './person-select/person-select.component';
import { ExponentialStrengthPipe } from '../pipe/valueString.pipe';

@NgModule({
  declarations: [personSelectComponent, ExponentialStrengthPipe],
  imports: [NzInputModule, ReactiveFormsModule, FormsModule, CommonModule],
  exports: [personSelectComponent],
})
export class ShareModule {}
