import { Component, OnInit } from '@angular/core';
import { Stock } from '../stock';
import { StockService } from 'app/stock/stock.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {
  formModel: FormGroup;
  // 给stock 设置初始值，以避免报错。
  stock: Stock = new Stock(0, '', 0, 0, '', []);
  categories = ['互联网', '教育', '电商', '社交'];
  constructor(
    private router: Router,
    private routeInfo: ActivatedRoute,
    private stockService: StockService
  ) { }

  ngOnInit() {
    const stockId = this.routeInfo.snapshot.params['id'];
    // this.stockService.getStock(stockId);
    const fb = new FormBuilder();
    // 初始化为空
    this.formModel = fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      price: ['', Validators.required],
      desc: [''],
      categories: fb.array([
        new FormControl(false),
        new FormControl(false),
        new FormControl(false),
        new FormControl(false)
      ], this.categoriesSelecteValidator)
    })
    // 订阅这个数据流, 返回的数据赋值给 stock。
    this.stockService.getStock(stockId).subscribe(
      data => {
        this.stock = data;
        // 更新 formModel 数据
        this.formModel.reset({
          name: data.name,
          price: data.price,
          desc: data.desc,
          categories: [
            data.categories.indexOf(this.categories[0]) !== -1,
            data.categories.indexOf(this.categories[1]) !== -1,
            data.categories.indexOf(this.categories[2]) !== -1,
            data.categories.indexOf(this.categories[3]) !== -1
          ]
        })
      }
    );
  }
  cancel() {
    this.router.navigateByUrl('/stock');
  }
  save() {
    // console.log(this.stock)
    // this.router.navigateByUrl('/stock');
    let categoriesString: string[] = [];
    for (let i = 0; i < this.categories.length; i++) {
      if (this.formModel.value.categories[i]) {
        categoriesString.push(this.categories[i]);
        this.router.navigateByUrl('/stock');
      }
    }
    this.formModel.value.categories = categoriesString;
    this.formModel.value.rating = this.stock.rating;
    console.log(this.formModel.value);
  }
  categoriesSelecteValidator(control: FormArray) {
    let valid = false;
    control.controls.forEach(control => {
      if (control.value) {
        valid = true;
      }
    });
    if (valid) {
      return null;
    } else {
      return {categoriesLength: true}
    }
  }
}

