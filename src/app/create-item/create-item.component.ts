import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrl: './create-item.component.css',
})
export class CreateItemComponent {
  constructor(private location: Location) {
    
  }
  public result = { label: '111111111111', checked: true };
  onDeleteClick(): void {
    console.log("delete"+this.result);

  }
  onSaveClick(): void { 
    console.log('onSaveClick' + this.result);


  }
  onBackClick(): void { 
    this.location.back();
    

  }
  onCheckboxChange(event: Event): void {
    this.result.checked = (event.target as HTMLInputElement).checked;
    console.log(this.result);
  }
  onLabelChange(): void {
    console.log(this.result);
  }
}
