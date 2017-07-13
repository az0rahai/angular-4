import { Injectable } from '@angular/core';

@Injectable()
export class AuthorService {

  constructor() { }

  getAuthors(){
    return ["Dan Brown", "J K Rowling", "Michael Crichton"];
  }


}


