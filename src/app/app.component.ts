import { Component } from '@angular/core';
import { Api } from 'chessground/api'
import { ViewChild, ChangeDetectionStrategy } from '@angular/core'
import { NgxChessgroundComponent } from 'ngx-chessground'
import * as basics from './units/basics'
import { Unit } from './units/unit'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'chess-project';
  list: Unit[] = [
    basics.defaults
  ]

  @ViewChild('chess') ngxChessgroundComponent!: NgxChessgroundComponent;

  public onClick(runFn: (el: HTMLElement) => Api){
    this.ngxChessgroundComponent.runFn = runFn;
  }

}
