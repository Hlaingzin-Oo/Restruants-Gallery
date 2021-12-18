import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  url = "http://localhost:3000/restruants";
  registerurl = "http://localhost:3000/";


  constructor(private http: HttpClient) { }
  getList() {
    return this.http.get(this.url);
  }
  saveRest(data: any) {
    // console.warn("Service",data);
    return this.http.post(this.url, data)
  }
  deleteRest(id: any) {
    id: Number;
    return this.http.delete(this.url + '/' + id);
  }
  editRest(data:any){
    return this.http.post(this.url,data);
  }
  register(data: any) {
  return this.http.post(this.registerurl+"users", data)
  }
}
