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
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzModalRef, NzModalService, NZ_MODAL_DATA } from 'ng-zorro-antd/modal';

import { PersionSelectComponent } from './component/persion-select/persion-select.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    PersionSelectComponent,
    NzModalModule,
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

  createModal(): void {
    this.modal.create({
      nzTitle: 'Modal Title',
      nzContent: 'string, will close after 1 sec',
      nzClosable: false,
      nzOnOk: () => {
        console.log(111);
        const person: any = [
          { value: 'della', id: '11' },
          { value: 'you', id: '22' },
        ];
        this.validateForm.patchValue({ person: person });
      },
    });
  }

  constructor(
    private fb: NonNullableFormBuilder,
    private modal: NzModalService
  ) {}
}
