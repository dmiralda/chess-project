import { Component, OnInit } from '@angular/core';

declare var PGNV: any;

@Component({
  selector: 'app-board-viewer',
  templateUrl: './board-viewer.component.html',
  styleUrls: ['./board-viewer.component.css']
})
export class BoardViewerComponent implements OnInit {

  board: any;
  pgn = '[Event \"Live Chess\"]\n[Site \"Chess.com\"]\n[Date \"2020.04.09\"]\n[Round \"-\"]\n[White \"dmiralda\"]\n[Black \"arikanda61\"]\n[Result \"1-0\"]\n[CurrentPosition \"2kr1b2/ppp1n1p1/8/8/3nP1Pq/PP1PKr2/3P4/2R2Q2 w - -\"]\n[Timezone \"UTC\"]\n[ECO \"A00\"]\n[ECOUrl \"https://www.chess.com/openings/Vant-Kruijs-Opening-1...e5\"]\n[UTCDate \"2020.04.09\"]\n[UTCTime \"21:08:48\"]\n[WhiteElo \"1174\"]\n[BlackElo \"990\"]\n[TimeControl \"600\"]\n[Termination \"dmiralda won by resignation\"]\n[StartTime \"21:08:48\"]\n[EndDate \"2020.04.09\"]\n[EndTime \"21:20:44\"]\n[Link \"https://www.chess.com/live/game/4700539039\"]\n\n1. e3 {[%clk 0:09:54.7]} 1... e5 {[%clk 0:09:58.6]} 2. a3 {[%clk 0:09:53.5]} 2... d5 {[%clk 0:09:54.9]} 3. g3 {[%clk 0:09:51.3]} 3... d4 {[%clk 0:09:47.5]} 4. Nf3 {[%clk 0:09:44.1]} 4... Bg4 {[%clk 0:09:39.1]} 5. Bg2 {[%clk 0:09:24.8]} 5... Qd5 {[%clk 0:09:22.1]} 6. h3 {[%clk 0:09:19.9]} 6... Bxf3 {[%clk 0:08:47.1]} 7. Bxf3 {[%clk 0:09:10.5]} 7... e4 {[%clk 0:08:45.5]} 8. Bg4 {[%clk 0:08:54.5]} 8... d3 {[%clk 0:08:24.8]} 9. Nc3 {[%clk 0:08:45]} 9... Qc4 {[%clk 0:08:09.5]} 10. b3 {[%clk 0:08:36.8]} 10... Qc6 {[%clk 0:07:49]} 11. Nxe4 {[%clk 0:08:34.2]} 11... Qxe4 {[%clk 0:07:46.6]} 12. f3 {[%clk 0:08:22.3]} 12... Qc6 {[%clk 0:07:33.9]} 13. cxd3 {[%clk 0:08:14.8]} 13... f5 {[%clk 0:07:19.7]} 14. Bxf5 {[%clk 0:08:08.5]} 14... Ne7 {[%clk 0:07:13.5]} 15. Bg4 {[%clk 0:07:54.6]} 15... h5 {[%clk 0:07:07.5]} 16. Bxh5+ {[%clk 0:07:47.3]} 16... Rxh5 {[%clk 0:07:03.7]} 17. g4 {[%clk 0:07:39.9]} 17... Rh8 {[%clk 0:06:40.9]} 18. Bb2 {[%clk 0:07:33.7]} 18... Qd6 {[%clk 0:06:30.4]} 19. Bd4 {[%clk 0:06:57.5]} 19... Qg3+ {[%clk 0:06:22.3]} 20. Ke2 {[%clk 0:06:41.4]} 20... Qg2+ {[%clk 0:06:19.7]} 21. Ke1 {[%clk 0:06:20.7]} 21... Qxh1+ {[%clk 0:06:18]} 22. Ke2 {[%clk 0:06:15.7]} 22... Qg2+ {[%clk 0:06:14.8]} 23. Ke1 {[%clk 0:05:53.7]} 23... Qg3+ {[%clk 0:06:09.7]} 24. Ke2 {[%clk 0:05:42.5]} 24... Nbc6 {[%clk 0:06:07.6]} 25. e4 {[%clk 0:05:36.7]} 25... Nxd4+ {[%clk 0:06:04.9]} 26. Ke3 {[%clk 0:05:26]} 26... O-O-O {[%clk 0:05:55.4]} 27. Rc1 {[%clk 0:05:05.3]} 27... Rxh3 {[%clk 0:05:49.1]} 28. Qg1 {[%clk 0:05:00.7]} 28... Qh4 {[%clk 0:05:11.1]} 29. Qf1 {[%clk 0:04:03.1]} 29... Rxf3+ {[%clk 0:05:03.6]} 1-0';

  constructor() { }

  ngOnInit(): void {
    this.board = PGNV.pgnView('board', {pgn: this.pgn});
  }

}
