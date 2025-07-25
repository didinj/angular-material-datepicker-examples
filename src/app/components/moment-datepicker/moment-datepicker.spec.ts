import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentDatepicker } from './moment-datepicker';

describe('MomentDatepicker', () => {
  let component: MomentDatepicker;
  let fixture: ComponentFixture<MomentDatepicker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MomentDatepicker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MomentDatepicker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
