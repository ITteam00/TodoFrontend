import { Component } from '@angular/core';

@Component({
  selector: 'app-result-area',
  templateUrl: './result-area.component.html',
  styleUrl: './result-area.component.css',
})
export class ResultAreaComponent {
  results = [
    { label: '666', checked: false },
    { label: '777', checked: false },
    { label: '8888888888888', checked: true },
  ];

  onCheckboxChange(index: number, event: Event): void {
    this.results[index].checked = (event.target as HTMLInputElement).checked;
    console.log(
      `Result ${this.results[index].label} checked:`,
      this.results[index].checked
    );
  }
}
