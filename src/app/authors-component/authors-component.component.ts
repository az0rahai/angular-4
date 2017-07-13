import { Component, OnInit } from '@angular/core';
import {AuthorService} from "../author.service";

@Component({
  selector: 'app-authors-component',
  templateUrl: './authors-component.component.html',
  styleUrls: ['./authors-component.component.css']
})
export class AuthorsComponentComponent  {

  authors;

  constructor(service: AuthorService) {
    this.authors = service.getAuthors();
    console.log(this.authors);
  }


}
