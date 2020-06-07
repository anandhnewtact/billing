import { Injectable } from '@angular/core';
import { BaseUrl } from 'app/shared/baseurl/baseurl';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemSettingsService {
  baseUrl:any;
  constructor(private url:BaseUrl,
    private http:HttpClient) {
      this.baseUrl=this.url.url
     }
 
productadd(new_prod){
  console.log(new_prod)
  return this.http.post(this.baseUrl+"/itemsettings/productscrud/",new_prod)
}
productsget(search){
let param = new HttpParams().set('search',search)
 return this.http.get(this.baseUrl+"/itemsettings/productsview",{params:param})
}
editdataget(id,product_object){
return this.http.put(this.baseUrl+"/itemsettings/productscrud/"+id+"/",product_object)

}


}

