import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { Mercancia } from '../interfaces/Mercancia';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getmercancias(): Observable<Mercancia[]> {
    return this.http.get<Mercancia[]>(`${environment.api}/mercancias`);
  }


}
