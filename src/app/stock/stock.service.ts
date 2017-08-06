import { Injectable } from '@angular/core';
import { Stock } from './stock';

@Injectable()
export class StockService {
  private stocks: Stock [] = [
      new Stock(1, '新东方', 1.99, 4, '在美国上市的中国第一教育股，新东方集团', ['教育', '互联网']),
      new Stock(2, '好未来', 3.00, 3, '在美国上市的中国第二教育股，好未来学而思', ['教育', '互联网']),
      new Stock(3, '腾讯', 300, 5, '腾讯科技，中国最大的社交软件', ['互联网', '社交']),
      new Stock(4, '阿里巴巴', 200, 2, '阿里巴巴集团，中国电商老大', ['互联网', '电商'])
    ];
  constructor() { }
  // 返回 Stock 类型的数组的数据
  getStocks(): Stock [] {
    return this.stocks;
  }
  // 根据 id 查找某个 stock 的数据并返回
  getStock(id: number): Stock {
    let st: Stock = this.stocks.find(stock => stock.id == id); // === stockForm组件会报错？
    if (!st) {
      st = new Stock(0, '', 0, 0, '' , []);
    }
    return st;
  }
}
