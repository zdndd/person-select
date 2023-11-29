import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';

import { PersionSelectComponent } from './component/persion-select/persion-select.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    PersionSelectComponent,
    NzFormModule,
    ReactiveFormsModule,
    CommonModule,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  validateForm: FormGroup<{
    userName: FormControl<string>;
    person: FormControl<string>;
  }> = this.fb.group({
    userName: ['della', [Validators.required]],
    person: ['haha', [Validators.required]],
  });

  submitForm(): void {
    console.log('submit', this.validateForm.value);
  }

  constructor(private fb: NonNullableFormBuilder) {}
}
