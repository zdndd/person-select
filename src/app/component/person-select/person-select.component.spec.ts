import { ComponentFixture, TestBed } from '@angular/core/testing';

import { personSelectComponent } from './person-select.component';

describe('personSelectComponent', () => {
  let component: personSelectComponent;
  let fixture: ComponentFixture<personSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [personSelectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(personSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
