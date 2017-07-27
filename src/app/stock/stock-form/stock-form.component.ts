import { Component, OnInit } from '@angular/core';
import { Stock } from 'app/stock/stock-manager/stock-manager.component';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {
  stock: Stock;
  constructor() { }

  ngOnInit() {
    this.stock = new Stock(1, '新东方', 1.99, 4.0, '在美国上市的中国第一教育股，新东方集团', ['教育股', '中概股'])
  }
}
