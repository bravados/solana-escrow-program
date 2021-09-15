import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ScrowInitializerComponent } from './scrow-initializer/scrow-initializer.component';
import { ScrowTakerComponent } from './scrow-taker/scrow-taker.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrowInitializerComponent,
    ScrowTakerComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
