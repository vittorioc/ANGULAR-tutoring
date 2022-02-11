import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private logger: NGXLogger) {
    this.logger.trace('FooterComponent');
  }

  ngOnInit(): void {
    this.logger.trace('FooterComponent.ngOnInit');
  }

}
