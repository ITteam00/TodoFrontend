import { Component, DestroyRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../item.service';
import { Item } from '../models/item.model';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.css',
})
export class ItemDetailComponent implements OnInit {
  itemId: string | undefined;
  item: Item = {
    id: "",
    description: "",
    done: false,
  }

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService
  ) {}

  ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get('id') ?? "";

    const itemRe = this.itemService.getItemById(this.itemId);
    if (itemRe) {
      this.item = itemRe;
    }
  }
}
