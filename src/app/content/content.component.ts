import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  pageTitle = '';
  pageDes = '';
  constructor(public router: Router ) {
    router.events
          .filter(event => event instanceof NavigationEnd)
          .subscribe((event: NavigationEnd) => {
            if (event.url === '/home') {
              this.pageTitle = '首页';
              this.pageDes = 'this is home page';
            } else if (event.url === '/stock') {
              this.pageTitle = '股票管理';
              this.pageDes = '这是股票管理页面';
            }
          })
  }

  ngOnInit() {
  }

}
