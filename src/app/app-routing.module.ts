import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StockManagerComponent } from './stock/stock-manager/stock-manager.component';
import { StarsComponent } from './stars/stars.component';
import { HomeComponent } from './home/home.component';
import { StockFormComponent } from './stock/stock-form/stock-form.component';

// 路由配置表：路由定义（route definitions）的数组
const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'stock',
    component: StockManagerComponent
  },
  {
    path: 'stock/:id',
    component: StockFormComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

// 路由模块：负责管理视图的切换
@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
