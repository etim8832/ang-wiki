import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import {routing} from './app.routing';
<<<<<<< HEAD
// import { Routes, RouterModule } from '@angular/router';

// const appRoutes:Routes =[
//   {path:"", component:HeaderComponent}

// ]
=======
import { Routes, RouterModule } from '@angular/router';
import { PageListComponent } from './pages/page-list/page-list.component';


>>>>>>> ba2fea247c8e9f34baaf4f5273630d257fc66088
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
<<<<<<< HEAD
    // RouterModule.forRoot(appRoutes)
=======
>>>>>>> ba2fea247c8e9f34baaf4f5273630d257fc66088
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
