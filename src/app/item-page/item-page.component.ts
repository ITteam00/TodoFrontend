import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Item } from '../models/item.model';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrl: './item-page.component.css',
})
export class ItemPageComponent {
  constructor(private location: Location) { }
  @Input() result: Item = {
    id: "",
    description: '',
    done: false
  };

  onDeleteClick(): void {
    console.log('delete' + this.result);
  }

  onSaveClick(): void {
    console.log('onSaveClick' + this.result);
  }
  onBackClick(): void {
    this.location.back();
  }
  onCheckboxChange(event: Event): void {
    this.result!.done = (event.target as HTMLInputElement).checked;
    console.log(this.result);
  }
  onLabelChange(): void {
    console.log(this.result);
  }
}
