import { Component, OnInit } from '@angular/core';
import { Page} from '../shared/page.model';
import {SharedService} from '../shared.service';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent implements OnInit {


  pages:Page[];

  constructor( private pageService : SharedService) { }

  ngOnInit() {
  this.getPages();

    }

    getPages(){
      this.pages   = this.pageService.getPages();
    }
  }


