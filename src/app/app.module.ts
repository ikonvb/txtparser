import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ParserComponent } from './components/parser/parser.component';
import { ResultComponent } from './components/result/result.component';

@NgModule({
  declarations: [AppComponent, NavComponent, ParserComponent, ResultComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
