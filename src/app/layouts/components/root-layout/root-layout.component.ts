import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { APP_NAME, TITLE_SUFFIX } from 'src/app/app.consts';

@Component({
  selector: 'app-root-layout',
  templateUrl: './root-layout.component.html',
  styleUrls: ['./root-layout.component.scss']
})
export class RootLayoutComponent implements OnInit {

  get title(): string {
    const title = this.titleService.getTitle();
    return title.replace(TITLE_SUFFIX, '');
  }

  set title(title: string) {
    const newTitle = title ? `${title}${TITLE_SUFFIX}` : APP_NAME;
    this.titleService.setTitle(newTitle);
  }

  constructor(private titleService: Title) { }

  ngOnInit() {
  }
}
