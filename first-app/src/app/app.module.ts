import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HederComponent } from './heder/heder.component';
import { RecipiesComponent } from './recipies/recipies.component';
import { RecipiesListComponent } from './recipies/recipies-list/recipies-list.component';
import { RecipieDetailComponent } from './recipies/recipie-detail/recipie-detail.component';
import { RecipieItemComponent } from './recipies/recipies-list/recipie-item/recipie-item.component';
import { ShoppigListComponent } from './shoppig-list/shoppig-list.component';
import { ShoppingEditComponent } from './shoppig-list/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HederComponent,
    RecipiesComponent,
    RecipiesListComponent,
    RecipieDetailComponent,
    RecipieItemComponent,
    ShoppigListComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
