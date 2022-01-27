import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'counter';
  public count = 5;
  product: any;
  products: any;

  constructor(private httpClient: HttpClient) {}

  /**
   * fetchProducts
   */
  public fetchProducts() {
    this.httpClient.get('https://fakestoreapi.com/products')
      .subscribe((res: any) => {
        this.product = res[0];
        this.products = res.slice(0,6);
      });
  }
  /**
   * add
   */
  public add() {
    this.count++;
    console.log('this.count', this.count);
  }
  /**
   * minus
   */
  public minus() {
    this.count--;
    console.log('this.count', this.count);
  }
}
