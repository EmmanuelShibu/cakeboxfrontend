import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class CakeService {

  baseUrl=`http://127.0.0.1:8000/api`
  headers=new HttpHeaders({
    'content-type':'application/json'
  })

  constructor(private http:HttpClient) {  

   }

   createAccount(data:any){ 
    return this.http.post(`${this.baseUrl}/register/`,data,{headers:this.headers})
   }

   authorize(data:any){
    return this.http.post(`${this.baseUrl}/token/`,data)
   }

   getAllCakes(){
    let header=new HttpHeaders({
      'content-type':'application/json',
      'Authorization':localStorage.getItem('token')??''
    })
    return this.http.get(`${this.baseUrl}/cakes/`,{headers:header})
   }

   getCakeDetail(id:any){
    let header=new HttpHeaders({
      'content-type':'application/json',
      'Authorization':localStorage.getItem('token')??''
    })
    
    return this.http.get(`${this.baseUrl}/cakes/${id}/`,{headers:header})
   }

  //  url:'http://127.0.0.1:8000/api/cakes/:id/add_to_cart/' 
   addToCart(id:any){
    let header=new HttpHeaders({
      'content-type':'application/json',
      'Authorization':localStorage.getItem('token')??''
    })

    return this.http.post(`${this.baseUrl}/cakes/${id}/add_to_cart/`,null,{headers:header})
   }

   listCart(){
    let header=new HttpHeaders({
      'content-type':'application/json',
      'Authorization':localStorage.getItem('token')??''
    })
    return this.http.get(`${this.baseUrl}/carts/`,{headers:header})
   }

   placeOrder(id:any,data:any){
    return this.http.post(`${this.baseUrl}/cakes/${id}/place_order/`,data)
   }

   listOrder(){
    return this.http.get(`${this.baseUrl}/orders/`)
   }

   addReview(id:any,data:any){
    return this.http.post(`${this.baseUrl}/cakes/${id}/add_review/`,data)
   }

   isAuthenticated(){
    return 'token' in localStorage
   }

   
}
