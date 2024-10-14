import { Injectable, OnInit } from '@angular/core';
import { Item } from './models/item.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../env';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemService implements OnInit {
  private apiUrl = environment; // todo
  constructor(private http: HttpClient) {}
  private items: Item[] = [];
  ngOnInit(): void {
    this.items = [
      { Id: '1', Description: 'fake 6666666666', Done: false },
      { Id: '2', Description: 'fake aaaaaaaaaaaaaaaa', Done: false },
      { Id: '3', Description: 'fake 8888888888888', Done: true },
    ];
  }

  // getItems(): Item[] {
  //   return this.items;
  // }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.apiUrl}/api/v1/TodoItems`);
  }

  getItemById(id: string): Item | undefined {
    return this.items.find((item) => item.Id === id);
  }
}
