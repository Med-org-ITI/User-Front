import { Component } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  products: any[] = [];
  categories: any[] = [];
  constructor(private service: ProductsService) { }
  ngOnInit(): void {
    this.getproducts();
    this.getCategories();
  }
  getproducts() {
    this.service.getAllProducts().subscribe(
      (res: any) => {
        this.products = res;
      }
    );
  }
  getCategories() {
    this.service.getAllCategories().subscribe(
      (res: any) => {
        console.log(res);
        this.categories = res;
      }
    );
  }
  filterCategory(event: any) {
    let value = event.target.value;
    if (value == "all") {
      this.getproducts()
    } else {
      this.getProductsCategory(value);

    }
  }
  getProductsCategory(keyword: string) {
    this.service.getProductsByCategory(keyword).subscribe((res: any) => {
      this.products = res;

    });
  }
}

