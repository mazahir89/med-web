import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpecialitesService {

  constructor(private http: HttpClient) { }

  getSpecialitesData(): Observable<any> {

    return this.http.get("assets/specialites.txt", {responseType: 'text' as 'json'}).pipe(map((data: any) => data));
  }

  getTest() {
    return this.http.get('assets/specialites.txt').subscribe(data => {
      console.log(data);
  })
  }
}
