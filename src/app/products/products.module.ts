import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { SingleviewComponent } from './singleview/singleview.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { HttpClientModule } from '@angular/common/http' 
import { SiteLayoutModule } from '../site-layout/site-layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';


@NgModule({
  declarations: [
    ProductsComponent,
    AllproductsComponent,
    SingleviewComponent,
    AddComponent,
    EditComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SiteLayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProductsModule { }
