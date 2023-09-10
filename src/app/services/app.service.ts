import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { IResponse } from '../interfaces/IResponse';
import { IMercancia } from '../interfaces/IMercancia';
import { IResponsee } from '../interfaces/IResponsee';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getmercancias(): Observable<IResponse> {
    return this.http.get<IResponse>(`${environment.api}mercancias`);
  }

  deletePersona(id: number) {
    return this.http.delete<IResponse>(`${environment.api}mercancia/${id}`);
  }

  postmercancia(mercancia: IMercancia): Observable<IMercancia> {
    return this.http.post<IMercancia>(
      `${environment.api}mercancia`,
      mercancia
    );
  }
  getmercancia(id: number): Observable<IResponsee> {
    return this.http.get<IResponsee>(`${environment.api}mercancia/${id}`);
  }

   putActualizarMercancia(id: number,idUser: number, mercancia: IMercancia): Observable<IResponse> {
    return this.http.put<IResponse>(
      `${environment.api}mercancia/${id}/${idUser}`,
      mercancia
    );
  }

}
