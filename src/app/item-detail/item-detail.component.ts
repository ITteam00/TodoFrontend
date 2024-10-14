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
    // 获取路由参数
    this.itemId = this.route.snapshot.paramMap.get('id') ?? "";

    // 获取 item 详细信息
    const itemRe = this.itemService.getItemById(this.itemId);
    if (itemRe) {
      this.item = itemRe;
    }
  }
}
