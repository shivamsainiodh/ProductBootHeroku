import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'https://product-boot.herokuapp.com';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(`${baseUrl}/products`);
  }

  get(id): Observable<any> {
    return this.http.get(`${baseUrl}/productById/${id}`);
  }

  create(data): Observable<any> {
    return this.http.post(`${baseUrl}/addProduct`, data);
  }

  update(id, data): Observable<any> {
    return this.http.put(`${baseUrl}/update/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${baseUrl}/delete/${id}`);
  }
}