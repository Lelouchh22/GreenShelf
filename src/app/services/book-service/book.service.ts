import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Book } from '../../model/model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  get(arg0: string) {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) { }

  readonly BASE_URL = 'assets/books.json';

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.BASE_URL);
  }
}
