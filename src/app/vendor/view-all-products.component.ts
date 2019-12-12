import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styles: []
})
export class ViewAllProductsComponent implements OnInit {

  constructor(private routes:Router) { }

  ngOnInit() {
  }

}
