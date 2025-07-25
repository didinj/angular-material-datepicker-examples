import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveDatepicker } from './reactive-datepicker';

describe('ReactiveDatepicker', () => {
  let component: ReactiveDatepicker;
  let fixture: ComponentFixture<ReactiveDatepicker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveDatepicker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveDatepicker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
