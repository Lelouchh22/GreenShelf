import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Book } from '../../model/model';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http: HttpClient) { }

  readonly BASE_URL = 'https://openlibrary.org/people/mekBot/books/want-to-read.json'

  getBooks(page:number, limit:number){
    return this.http.get<any>(`${this.BASE_URL}?page=${page}&limit=${limit}`)
  }

  
  

}
