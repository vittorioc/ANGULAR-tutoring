import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string;

  constructor(private logger: NGXLogger) {
    this.logger.trace('HeaderComponent');

    this.title = 'Company Management';
    this.logger.trace('this.title:', this.title);
  }

  ngOnInit(): void {
    this.logger.trace('HeaderComponent.ngOnInit');
  }
}
