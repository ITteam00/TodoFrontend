import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateItemComponent } from './create-item/create-item.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ItemPageComponent } from './item-page/item-page.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { AppComponent } from './app.component';


export const routes: Routes = [
  { path: 'all', component: AppComponent },
  { path: 'active', component: AppComponent },
  { path: 'completed', component: AppComponent },
  { path: '', redirectTo: '/all', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
