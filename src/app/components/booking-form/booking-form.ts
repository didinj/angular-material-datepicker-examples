import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-booking-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule
  ],
  templateUrl: './booking-form.html',
  styleUrl: './booking-form.scss'
})
export class BookingForm {
  submitted = false;

  bookingForm = new FormGroup({
    stayPeriod: new FormGroup({
      checkin: new FormControl<Date | null>(null, Validators.required),
      checkout: new FormControl<Date | null>(null, Validators.required),
    }),
    alternativeDate: new FormControl<Date | null>(null)
  });

  submitBooking() {
    if (this.bookingForm.valid) {
      this.submitted = true;
      console.log('Booking submitted:', this.bookingForm.value);
    }
  }
}
