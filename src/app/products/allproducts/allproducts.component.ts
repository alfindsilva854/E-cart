import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {

  allProducts:any=[]
  categoryProducts:any=[]

  searchString:any=""

  constructor(private ds: DataService) { }

  ngOnInit(): void {
    this.ds.getAllproducts().subscribe({
      next: (result: any) => {
        this.allProducts = result
        // console.log(this.allProducts);
        this.categoryProducts=this.allProducts


      }
    })
    this.ds.search.subscribe((data:any)=>{
      this.searchString=data
    })

  }

  categoryProduct(catId:any){
    this.categoryProducts=this.allProducts.filter((item:any)=>
      item["categoryId"]==catId || catId=="")
      // console.log(this.categoryProducts);
      
  }

}
