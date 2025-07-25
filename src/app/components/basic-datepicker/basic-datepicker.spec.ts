import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDatepicker } from './basic-datepicker';

describe('BasicDatepicker', () => {
  let component: BasicDatepicker;
  let fixture: ComponentFixture<BasicDatepicker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicDatepicker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicDatepicker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
