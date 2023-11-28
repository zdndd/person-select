import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PersionSelectComponent } from './component/persion-select/persion-select.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersionSelectComponent, CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {}
