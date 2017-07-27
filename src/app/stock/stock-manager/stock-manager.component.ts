import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-stock-manager',
  templateUrl: './stock-manager.component.html',
  styleUrls: ['./stock-manager.component.css']
})
export class StockManagerComponent implements OnInit {
  private stocks: Array<Stock>;
  constructor(public router: Router) { }

  ngOnInit() {
    this.stocks = [
      new Stock(1, '新东方', 1.99, 4.0, '在美国上市的中国第一教育股，新东方集团', ['教育股', '中概股']),
      new Stock(2, '好未来', 3.00, 3.5, '在美国上市的中国第二教育股，好未来学而思', ['教育股', '中概股']),
      new Stock(3, '腾讯', 300, 5.0, '腾讯科技，中国最大的社交软件', ['IT股', '港股', '社交']),
      new Stock(4, '阿里巴巴', 200, 4.5, '阿里巴巴集团，中国电商老大', ['IT股', '中概股', '电商'])
    ];
  }
  create() {
    this.router.navigateByUrl('/stock/1');
  }
  update(stock: Stock) {
    this.router.navigateByUrl('/stock/' + stock.id);
  }

}
export class Stock {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) { }
}
