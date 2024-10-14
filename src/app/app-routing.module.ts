import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateItemComponent } from './create-item/create-item.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ItemPageComponent } from './item-page/item-page.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'create-item', component: CreateItemComponent },
  { path: 'item/:id', component: ItemDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
