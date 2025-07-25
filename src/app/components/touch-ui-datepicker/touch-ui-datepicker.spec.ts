import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouchUiDatepicker } from './touch-ui-datepicker';

describe('TouchUiDatepicker', () => {
  let component: TouchUiDatepicker;
  let fixture: ComponentFixture<TouchUiDatepicker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TouchUiDatepicker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TouchUiDatepicker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
