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
  stock: Stock;
  categories = ['互联网', '教育', '电商', '社交'];
  constructor(
    private router: Router,
    private routeInfo: ActivatedRoute,
    private stockService: StockService
  ) { }

  ngOnInit() {
    const stockId = this.routeInfo.snapshot.params['id'];
    this.stock = this.stockService.getStock(stockId);

    let fb = new FormBuilder();
    this.formModel = fb.group({
      name: [this.stock.name, [Validators.required, Validators.minLength(2)]],
      price: [this.stock.price, Validators.required],
      desc: [this.stock.desc],
      categories: fb.array([
        new FormControl(this.stock.categories.indexOf(this.categories[0]) !== -1),
        new FormControl(this.stock.categories.indexOf(this.categories[1]) !== -1),
        new FormControl(this.stock.categories.indexOf(this.categories[2]) !== -1),
        new FormControl(this.stock.categories.indexOf(this.categories[3]) !== -1)
      ], this.categoriesSelecteValidator)
    })
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
      }
    }
    this.formModel.value.categories = categoriesString;
    this.formModel.value.rating = this.stock.rating;
    console.log(this.formModel.value);
  }
  categoriesSelecteValidator(control: FormArray) {
    let valid = false;
    control.controls.forEach( control => {
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

