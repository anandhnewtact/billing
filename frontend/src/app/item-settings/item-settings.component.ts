import { Component, OnInit,TemplateRef  } from '@angular/core';
import { ItemSettingsService } from './items/item-add/item-settings.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'; 


@Component({
  selector: 'app-item-settings',
  templateUrl: './item-settings.component.html',
  styleUrls: ['./item-settings.component.css']
})
export class ItemSettingsComponent implements OnInit {
  modalRef: BsModalRef
  product_details: any;
  product_list:any;
  prod: Object;
  product_id: any;
  editobject_send: any;
  search='';
  page: number;

  constructor(private productaddservice:ItemSettingsService,
    private modalService: BsModalService) { }


    addNewProduct(template: TemplateRef<any>) {  
      this.modalRef = this.modalService.show(  
        template,  
        Object.assign({}, { class: 'gray modal-lg' })  
      );  
    }  


    editdetails(template: TemplateRef<any>) {  
      this.modalRef = this.modalService.show(  
        template,  
        Object.assign({}, { class: 'gray modal-lg' })  
      );  
    }  
 


  ngOnInit(): void {
    this.getProducts();
  }

  newproduct_details(prod){
    this.product_details={
      "product_code":prod.product_code,
      "product_name":prod.product_name,
      "unit":prod.unit,
      "tamil_name":prod.tamil_name,
      "price":prod.price,
      "old_price":prod.old_price,
      "price_update":prod.price_update,
      "product_added_date":prod.product_added_date,
    }
    console.log(this.product_details)

    this.productaddservice.productadd(this.product_details).subscribe(
      data=>{
        console.log(data)
        this.getProducts()
      },error=>{
        console.log(error)
      }
    )
  }

getProducts(){
  this.productaddservice.productsget(this.search).subscribe(
    data=>{
      this.product_list=data
      console.log(data)
      console.log(this.product_list)
    },error=>{
      console.log(error)
    }
  )
}

editobject:object={};

editProducts(editprod){
  this.editobject = editprod
  }


editproduct_details(edit_product){
  this.product_id=edit_product.product_code
  this.editobject_send=edit_product
  this.productaddservice.editdataget(this.product_id,this.editobject_send).subscribe(
    data=>{
      console.log(data)
    },error=>{
      console.log(error)
    }
  )

}

//search product
onSearchChange(value):void{
  this.search=value
  this.productaddservice.productsget(this.search).subscribe(
    data=>{
      this.product_list=data
    },error=>{
      console.log(error)
    }
  )

}

}
