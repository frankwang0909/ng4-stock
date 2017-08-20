import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stock } from '../stock';
import { StockService } from '../stock.service';
import { FormControl } from '@angular/forms';

import 'rxjs/Rx';

// 导入 rxjs 的 Observable
import { Observable } from 'rxjs';

@Component({
  selector: 'app-stock-manager',
  templateUrl: './stock-manager.component.html',
  styleUrls: ['./stock-manager.component.css']
})
export class StockManagerComponent implements OnInit {
  // private stocks: Array<Stock>;
  private stocks: Observable<Stock[]>;
  private nameFilter: FormControl = new FormControl();
  private keyword: string;

  // 注入 stockService 服务
  constructor(
    public router: Router,
     private stockService: StockService
    ) { }

  // 初始化时 从 stockService 服务中获取股票数据
  ngOnInit() {
    this.stocks = this.stockService.getStocks();
    this.nameFilter.valueChanges
        .debounceTime(500)
        .subscribe(value => this.keyword = value)
  }

  // 创建新的股票信息
  create() {
    this.router.navigateByUrl('/stock/0');
  }

  // 更新已有股票信息
  update(stock: Stock) {
    this.router.navigateByUrl('/stock/' + stock.id);
  }

}
