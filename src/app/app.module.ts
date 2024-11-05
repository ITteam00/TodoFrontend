import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { SearchAreaComponent } from './search-area/search-area.component';
import { FormsModule } from '@angular/forms';
import { ResultAreaComponent } from './result-area/result-area.component';
import { CreateItemComponent } from './create-item/create-item.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ItemPageComponent } from './item-page/item-page.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { provideHttpClient } from '@angular/common/http';
import { LoaderComponent } from './loader/loader.component';
import { TodoItemListComponent } from './todo-item-list/todo-item-list.component';
import { InputHeaderComponent } from './input-header/input-header.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    SearchAreaComponent,
    ResultAreaComponent,
    CreateItemComponent,
    HomePageComponent,
    ItemPageComponent,
    ItemDetailComponent,
    LoaderComponent,
    TodoItemListComponent,
    InputHeaderComponent,
    TodoItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
