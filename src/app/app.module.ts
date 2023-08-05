import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { Page1Component } from './components/page1/page1.component';
import { Page2Component } from './components/page2/page2.component';
import { Page3Component } from './components/page3/page3.component';
import { Page4Component } from './components/page4/page4.component';
import { Page5Component } from './components/page5/page5.component';
import { Page6Component } from './components/page6/page6.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    Page4Component,
    Page5Component,
    Page6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
