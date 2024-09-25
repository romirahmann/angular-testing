import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  numbers: any = [];
  numberAdd!: any;
  average!: number;
  sortNumber: any = [];

  indexListNumber!: number;
  constructor() {}
  ngOnInit() {}

  validateInput(event: KeyboardEvent): void {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
      alert('Hanya angka yang diperbolehkan!');
    }
  }

  addNumber() {
    this.numbers.push(parseInt(this.numberAdd));
    this.sortNumber.push(parseInt(this.numberAdd));
    this.calculateAverage();
    this.sortNumbers();
    this.numberAdd = '';
    console.log(this.numbers);
  }

  // Fungsi untuk mengurutkan array
  sortNumbers() {
    this.sortNumber.sort((a: any, b: any) => a - b); // Urutkan array dari kecil ke besar
  }

  calculateAverage() {
    const sum = this.numbers.reduce((a: any, b: any) => a + b, 0);
    this.average = sum / this.numbers.length;
  }

  deleteNumber() {
    this.numbers.splice(this.indexListNumber, 1);
    this.sortNumber.splice(this.indexListNumber, 1);
    this.calculateAverage();
    this.sortNumbers();
    this.openModal(null);
  }

  openModal(i: any) {
    const modalRemove = document.querySelector('#removeModal');
    modalRemove?.classList.toggle('hidden');
  }
}
