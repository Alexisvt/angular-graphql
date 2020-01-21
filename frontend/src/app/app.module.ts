import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { ListComponent } from './list/list.component';
import { MaterialModule } from './material/material.module';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [AppComponent, ListComponent, ItemComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    GraphQLModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
