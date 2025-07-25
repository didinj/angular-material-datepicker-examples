import { Component, signal } from '@angular/core';
import { DateRangePicker } from "./components/date-range-picker/date-range-picker";

@Component({
  selector: 'app-root',
  imports: [DateRangePicker],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App { }
