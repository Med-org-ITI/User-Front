import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  // ["Santanizer","aid kit","devices"]
  products: any[] = [];
  categories: any[] = [];
  constructor(private service: ProductsService) {}
  ngOnInit(): void {
    this.getproducts();
    this.getCategories();
  }
  getproducts() {
    this.service.getAllProducts().subscribe(
      (res: any) => {
        this.products = res;
      }
      // (error) => {
      //   alert('error');
      // }
    );
  }
  getCategories() {
    this.service.getAllCategories().subscribe(
      (res: any) => {
        console.log(res);
        this.categories = res;
      }
      // (error) => {
      //   alert('error');
      // }
    );
  }
  filterCategory(event: any) {
    let value = event.target.value;
    if(value=="all"){
      this.getproducts()
    }else{
        this.getProductsCategory(value);

    }
  }
  getProductsCategory(keyword: string) {
    this.service.getProductsByCategory(keyword).subscribe((res :any) => {
      this.products=res;

    });
 
 
  }

  // categoryClicked(categroy:string){
  //   this.service.getProductsByCategory()
  // }
}
