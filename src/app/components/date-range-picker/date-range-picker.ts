import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-date-range-picker',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './date-range-picker.html',
  styleUrl: './date-range-picker.scss'
})
export class DateRangePicker {
  rangeForm = new FormGroup({
    range: new FormGroup({
      start: new FormControl<Date | null>(null, Validators.required),
      end: new FormControl<Date | null>(null, Validators.required),
    })
  });
}
