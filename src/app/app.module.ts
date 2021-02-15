import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BoardViewerComponent } from './board-viewer/board-viewer.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NxAccordionModule } from '@aposin/ng-aquila/accordion';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, BoardViewerComponent],
  entryComponents: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NxAccordionModule
  ],
  providers: []
})
export class AppModule { }