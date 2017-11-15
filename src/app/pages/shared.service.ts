import { Injectable } from '@angular/core';
import { PAGES } from './shared/mock-pages';

@Injectable()
export class SharedService {

  getPages() {
    return PAGES;
  }

}
