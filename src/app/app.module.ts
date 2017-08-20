import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// 导入 angular 路由模块
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { StockManagerComponent } from './stock/stock-manager/stock-manager.component';
import { StarsComponent } from './stars/stars.component';
import { HomeComponent } from './home/home.component';

import { AppRoutingModule } from './app-routing.module';
import { StockFormComponent } from './stock/stock-form/stock-form.component'
import { StockService } from './stock/stock.service';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { StockFilterPipe } from './stock/stock-filter.pipe';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    SidebarComponent,
    FooterComponent,
    ContentComponent,
    StockManagerComponent,
    StarsComponent,
    HomeComponent,
    StockFormComponent,
    StockFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule, // 响应式表单模块,
    HttpModule, // Http 模块
    AppRoutingModule
  ],
  providers: [ StockService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
