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

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    SearchAreaComponent,
    ResultAreaComponent,
    CreateItemComponent,
    HomePageComponent,
    ItemPageComponent,
    ItemDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
