import { Injectable } from '@angular/core';
import { Stock } from './stock';

// 导入 Angular 的 Http 模板
import { Http } from '@angular/http';

// 导入 rxjs 的 Observable
import { Observable } from 'rxjs';

@Injectable()
export class StockService {
  // 注入 http 的服务
  constructor(public http: Http) {
  }
  // 把本地的数据 改成由 HTTP 获取的数据
  getStocks(): Observable<Stock[]> {
    return this.http.get('/api/stock').map(res => res.json());
  }
  getStock(id: number): Observable<Stock> {
    return this.http.get('api/stock/' + id).map( res => res.json())
  }
}
