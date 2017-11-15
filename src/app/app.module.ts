import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import {routing} from './app.routing';
import {SharedService} from './pages/shared.service'
import { PageListComponent } from './pages/page-list/page-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    PageListComponent
  ],
  imports: [
    BrowserModule,
    routing

   
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
