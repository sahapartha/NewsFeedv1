import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LatestNewsService {


  constructor(private http: HttpClient) { }
 
getNewsList(): Observable<any> {
    return this.http.get('https://newsfeed-adminpanel.herokuapp.com/api/newsList/')
      .pipe(map((res: any) => {

        return res;
      }));
}

getThreeNews(): Observable<any> {
  return this.http.get('https://newsfeed-adminpanel.herokuapp.com/api/newsList?numArticles=3/')
    .pipe(map((res: any) => {
      
      return res;
    }));
}


}
