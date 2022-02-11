import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { environment } from 'src/environments/environment';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LOCALE_ID } from "@angular/core";
import { registerLocaleData } from '@angular/common';
import localeDeAt from '@angular/common/locales/it';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

registerLocaleData(localeDeAt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LoggerModule.forRoot({
      // serverLoggingUrl: '/api/logs',
      // serverLogLevel: NgxLoggerLevel.ERROR,
      level: NgxLoggerLevel.TRACE,
      enableSourceMaps: true,
      //disableFileDetails: true,
      disableConsoleLogging: environment.production,

      // TRACE|DEBUG|INFO|LOG|WARN|ERROR|FATAL|OFF
      colorScheme: ['deepskyblue', 'purple', 'yellow', 'lime', 'orange', 'red', 'red'],
      // @ts-ignore
      timestampFormat: ' ',
      //timestampFormat: "HH:mm:ss.SSS"
    }),
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: "it-IT" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
