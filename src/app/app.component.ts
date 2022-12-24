import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  data: null;

  data1 = [
    { key: '1 წელი', value: 193 },
    { key: '2 წელი', value: 119 },
    { key: '3 წელი', value: 43 },
    { key: '4 წელი', value: 23 },
    { key: '4-6 წელი', value: 8 },
    { key: '6-9 წელი', value: 3 },
  ];

  data2 = [
    { key: '3 თვე', value: 1 },
    { key: '1 წელი', value: 193 },
    { key: '2 წელი', value: 193 },
    { key: '3 წელი', value: 43 },
    { key: '4 წელი', value: 23 },
    { key: '5 წელი', value: 8 },
    { key: '6-9 წელი', value: 3 },
  ];

  set2019data() {
    console.log('2019');
    this.data = this.data1;
  }

  set2020data() {
    console.log('2020');
    this.data = this.data2;
  }
}
