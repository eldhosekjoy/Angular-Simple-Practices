import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ItemProfileDisplayCardComponent } from './item-profile-display-card/item-profile-display-card.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ItemProfileDisplayCardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
