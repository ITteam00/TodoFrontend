import { Injectable } from '@angular/core';
import { Item } from './models/item.model';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private items: Item[] = [
    { Id: '1', Description: '666', Done: false },
    { Id: '2', Description: '777', Done: false },
    { Id: '3', Description: '8888888888888', Done: true },
  ];
  getItems(): Item[] {
    return this.items;
  }

  getItemById(id: string): Item | undefined {
    return this.items.find((item) => item.Id === id);
  }

  constructor() {}
}
