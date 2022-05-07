import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';

interface Response {
  result: string,
  data: Object
}

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  url = "/api/";
  constructor(private http:HttpClient) { }

  Submit(a:number, b:number, method:string): Observable<any>
  {
    let body = new HttpParams()
    .set("a", a)
    .set("b", b)
    .set("method", method)

    return this.http.post<Response>(this.url + "submit", body).pipe(map(response => response['data']));
  }

}
