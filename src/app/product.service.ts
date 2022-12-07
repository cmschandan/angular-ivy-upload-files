import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = '';
  constructor(private http: HttpClient) {}

  uploadImage(formData) {
    return ajax.post(`${this.apiUrl}api/upload`, formData);
  }

  deleteImage(formData) {
    return this.http
      .post<any>(`${this.apiUrl}api/deleteImage`, formData)
      .pipe(catchError(this.handleError));
  }

  saveProduct(formData) {
    return this.http.post<any>(`{this.apiUrl}api/saveProduct`, formData);
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client side or network error occured . Handle it accordingly
      console.error('An error occured: ', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}` + `body was : ${error.error}`
      );
    }
    return throwError('Something bad happened . please try again later.');
  }
}
