import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { ITable } from './../models/Table';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  constructor(private http: HttpClient) {}

  private ITableUrl: string = 'https://fakerapi.it/api/v1/users';

  getTable(): Observable<ITable[]> {
    return this.http
      .get<ITable[]>(this.ITableUrl)
      .pipe(catchError(this.errorHandler));
  }

  getGenderTable(term: string): Observable<ITable[]> {
    term = term.trim();
    const options = term ? { params: new HttpParams().set('name', term) } : {};
    return this.http
      .get<ITable[]>(this.ITableUrl, options)
      .pipe(retry(2), catchError(this.errorHandler));
  }

  // getFemaleTable(): Observable<ITable[]> {
  //   return this.http
  //     .get<ITable[]>('https://fakerapi.it/api/v1/users?_gender=female')
  //     .pipe(catchError(this.errorHandler));
  // }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server Error');
  }
}
