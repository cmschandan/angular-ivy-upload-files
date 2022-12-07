import {
  Component,
  OnInit,
  Renderer2,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  productForm: FormGroup;
  error: string;
  uploadError: string;

  @ViewChild('image') private image: ElementRef;
  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.productForm = this.fb.group({
      productName: [''],
      price: [''],
      sku: [''],
    });
  }

  onSelectedFile(event){
    if(event.target.files.length > 0){
      const productImage = event.target.files[0];

      const formData = new FormData();
      formData.append('productImage',productImage);
    }
  }
}
