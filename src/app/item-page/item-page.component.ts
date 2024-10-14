import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Item } from '../models/item.model';
import { ItemService } from '../item.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrl: './item-page.component.css',
})
export class ItemPageComponent {
  constructor(private location: Location, private itemService: ItemService) { }
  @Input() result: Item = {
    id: "",
    description: '',
    done: false
  };

  onDeleteClick(): void {
    console.log('delete');
    this.itemService.deleteItem(this.result.id);
  }

  onSaveClick(): void {
    console.log('onSaveClick');
    console.log(this.result);
    if (this.result.id) {
          this.itemService.updateItem(this.result).subscribe(
            (data: Item) => {
              console.log('Item updated successfully:', data);
            },
            (error: HttpErrorResponse) => {
              console.log('eee');
              console.log(error);
            }
          );
    } else {
      console.log("create");
      this.itemService.createItem(this.result);
    }



  }
  onBackClick(): void {
    this.location.back();
  }
  onCheckboxChange(event: Event): void {
    this.result!.done = (event.target as HTMLInputElement).checked;
    console.log(this.result);
  }
  onLabelChange(): void {
    // console.log(this.result);
  }
}
