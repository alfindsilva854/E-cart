import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  //model form for add
  addFormModel = this.fb.group({
    id: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    productName: ['', [Validators.required, Validators.pattern("[a-zA-Z ']+")]],
    categoryId: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    description: ['', [Validators.required, Validators.pattern("[0-9a-zA-Z .,']+")]],
    price: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    // https://i.postimg.cc/3NWGLVJM/portrait-female-legs-jeans.jpg
    // https://i.postimg.cc/02BhrjVG/71a-Y-mf-Ixi-L.jpg
    image: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9:/._-]+')]],
    rating: ['', [Validators.required, Validators.pattern('[0-9.]+')]],
    review: ['', [Validators.required, Validators.pattern('[0-9.]+')]],
    warranty: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    is_available: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    vendor_name: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]+')]]
  })

  constructor(private fb: FormBuilder,private ds:DataService,private rout:Router) { }

  ngOnInit(): void {

  }
  addNewProduct() {
    const path = this.addFormModel.value
    let productData = {
      id:path.id,
      productName:path.productName ,
      categoryId:path.categoryId ,
      description:path.description ,
      price:path.price ,
      // https://i.postimg.cc/3NWGLVJM/portrait-female-legs-jeans.jpg
      image:path.image ,
      rating:path.rating,
      review:path.review ,
      warranty:path.warranty ,
      is_available:path.is_available,
      vendor_name: path.vendor_name
    }
    this.ds.addProduct(productData).subscribe({
      next:(result:any)=>{
        alert("new product added")
        this.rout.navigateByUrl("")
      }
    })

  }
}
