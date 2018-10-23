import { Component } from '@angular/core';

@Component({
  selector: 'page-header',
  templateUrl: './pageHeader.component.html',
  styleUrls: ['./pageHeader.component.scss']
})

export class PageHeaderComponent {
  title: string = 'ROLODEX';
  constructor() {

  }
}