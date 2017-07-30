import { Component, OnInit, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {
  @Input()
  rating = 0;
  stars: boolean[];
  @Input()
  readonly = true;
  // 输出属性
  @Output()
  ratingChange: EventEmitter<number> = new EventEmitter();
  constructor() { }

  // ngOnInit() {
  //   this.stars = [];
  //   for (let i = 1; i <= 5; i++ ) {
  //     this.stars.push(i > this.rating);
  //   }
  // }
  // clickStar(index: number) {
  //   if (!this.readonly) {
  //     this.rating = index + 1;
  //     this.stars = [];
  //     for (let i = 1; i <= 5; i++ ) {
  //       this.stars.push(i > this.rating);
  //     }
  //     this.ratingChange.emit(this.rating);
  //   }
  // }
  ngOnInit() {
  }
  // onChanges 钩子
  ngOnChanges() {
    this.stars = [];
    for (let i = 1; i <= 5; i++ ) {
      this.stars.push(i > this.rating);
    }
  }
  clickStar(index: number) {
    if (!this.readonly) {
      this.rating = index + 1;
      this.ratingChange.emit(this.rating);
    }
  }
}
