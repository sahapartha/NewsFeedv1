import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  constructor(private http: HttpClient) { }

  
  addContactUsQuery(email : String, query: String) : Observable<any> {
    
    const headers = { 'contact-type': 'application/json'}
    const url = 'https://newsfeed-adminpanel.herokuapp.com/api/contactus/';

  //  console.log(email , query);
  
    const test = `{"email": "${email}", "msg": "${query}"}`;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    //console.log(test)
    return this.http.post(url, test, httpOptions);

  }

}
