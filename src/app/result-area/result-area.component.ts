import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../models/item.model';
import { ItemService } from '../item.service';
import { HttpErrorResponse, HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-result-area',
  templateUrl: './result-area.component.html',
  styleUrl: './result-area.component.css',
})
export class ResultAreaComponent implements OnInit {
  constructor(private router: Router, private itemService: ItemService) { }
  results: Item[] = [];
  ngOnInit(): void { 
    this.itemService.getItems().subscribe((data) => {
      // todo 不确定是不是要这样把东西放在内存
      this.results = data;
      this.itemService.setData(data);
      console.log("get data!", data);
      console.log("re:", this.results);
    },
      (error:HttpErrorResponse) => {
        console.log("666");
        console.log(error,error.error?.message,error.message);
      
    });
  }

  onCheckboxChange(index: number, event: Event): void {
    this.results[index].done = (event.target as HTMLInputElement).checked;
    console.log(this.results[index]);
  }
  goToDetail(id: string) {
    this.router.navigate(['/item', id]);
  }
}
