import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http:HttpClient) { }
  //post drugform1 creation
drugform1(data:any):Observable<any>{
  return this.http.post('http://localhost:8089/auth/drugform1',data)
}
drugforms2(data:any):Observable<any>{
  return this.http.post('http://localhost:8089/auth/drugform2',data)
}

}

