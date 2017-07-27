import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  currentMenuId: number;
  menus: Array<Menu>;
  constructor(public router: Router) {}
  ngOnInit() {
    this.menus = [
      new Menu(1, '首页', 'home'),
      new Menu(2, '股票管理', 'stock'),
    ]
    this.currentMenuId = 1;
  }
  setActive(menu) {
    this.currentMenuId = menu.id;
  }
}

export class Menu {
  constructor (
    public id: number,
    public name: string,
    public link: string,
  ) { }

}
