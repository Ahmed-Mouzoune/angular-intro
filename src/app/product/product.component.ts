import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() title: string | undefined;
  @Input() description: string | undefined;
  @Input() price: string | undefined;
  @Input() image: string | undefined;
  @Input() rate: string | undefined;
  @Input() count: string | undefined;
  @Input() category: string | undefined;
  
  constructor() { }

  ngOnInit(): void {
  }

}
