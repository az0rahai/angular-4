import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthorsComponentComponent } from './authors-component/authors-component.component';
import {AuthorService} from "./author.service";

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    AuthorService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
