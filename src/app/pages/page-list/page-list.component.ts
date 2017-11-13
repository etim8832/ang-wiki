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

  constructor() { }

  ngOnInit() {
    this.pages = [
      {
        "id": 1,
        "title": "test page#1",
        "content": "TEST PAGE CONTENT#1"
      },
      {
        "id": 2,
        "title": "test page#2",
        "content": "TEST PAGE CONTENT#2"
      },
      {
        "id": 3,
        "title": "test page#3",
        "content": "TEST PAGE CONTENT#3"
      }
    ]
  }
  }


