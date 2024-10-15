import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Item } from '../models/item.model';
import { ItemService } from '../item.service';
import { HttpErrorResponse } from '@angular/common/http';
import { delay } from 'rxjs';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrl: './item-page.component.css',
})
export class ItemPageComponent {
  constructor(private location: Location, private itemService: ItemService) {}
  @Input() result: Item = {
    id: '',
    description: '',
    done: false,
  };

    loading = false;


  onDeleteClick(): void {
    const confirmDelete = confirm('Do you want to delete?');
    if (confirmDelete === true) {
      console.log('delete');
      this.itemService.deleteItem(this.result.id);
    }
  }

  onSaveClick(): void {
    this.loading = true;

    console.log('onSaveClick');
    console.log(this.result);
    const confirmSave = confirm('Do you want to save?');
    if (confirmSave === true) {
      if (this.result.id) {
        console.log('update');
        this.itemService.updateItem(this.result).pipe(delay(3000)).subscribe(
          (data: Item) => {
            console.log('Item updated successfully:', data);
            this.loading = false;
          },
          (error: HttpErrorResponse) => {
            console.log('Item updated  response error');
            console.log(error);
          }
        );
      } else {
        console.log('create');
        this.itemService.createItem(this.result);
      }
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
