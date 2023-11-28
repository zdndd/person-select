import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersionSelectComponent } from './persion-select.component';

describe('PersionSelectComponent', () => {
  let component: PersionSelectComponent;
  let fixture: ComponentFixture<PersionSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersionSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersionSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
