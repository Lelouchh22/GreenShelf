import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatGridListModule} from '@angular/material/grid-list';
import { BookComponent } from "../book/book.component";
import { Book } from '../../model/model';
import { BookService } from '../../services/book-service/book.service';
import { CommonModule } from '@angular/common'; 
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FilterPipe } from "../../filter.pipe";
import { ToolbarComponent } from "../toolbar/toolbar.component";
import { FooterComponent } from "../../footer/footer.component";
@Component({
  selector: 'app-librery',
  imports: [FormsModule, ReactiveFormsModule, MatIconModule, MatInputModule, RouterLink, MatGridListModule, BookComponent, CommonModule, MatFormFieldModule, FilterPipe, ToolbarComponent, FooterComponent],
  templateUrl: './librery.component.html',
  styleUrl: './librery.component.scss'
})
export class LibreryComponent implements OnInit{
searchtext:any;
currentPage: number = 1;
totalBooks: number = 0;
booksPerPage: number = 18;
totalPages: number = 0;
booksList: Book[] = [];

  constructor(private bookService: BookService, private fb: FormBuilder) {}

  ngOnInit(): void {
    
    this.loadBooks()
  }

  loadBooks() {
    this.bookService.getBooks(this.currentPage, this.booksPerPage).subscribe(
      // data => {
      //   this.booksList = data.items;
      //   console.log(this.booksList)
      // },

      data => {
        if (data.reading_log_entries && data.reading_log_entries.length > 0) {
          this.booksList = data.reading_log_entries;
          this.totalBooks = data.numFound;
        this.totalPages = Math.ceil(this.totalBooks / this.booksPerPage); // Calcola il numero di pagine
          // console.log(this.booksList)
        } else {
          console.log('No books found');
          this.booksList = [];
        }
      },
      err => console.log('There is an error', err)
    );
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      console.log('Current Page (next):', this.currentPage);  // Verifica la pagina corrente
      this.loadBooks();  // Carica i libri per la nuova pagina
    }
  }

  // Passa alla pagina precedente
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      console.log('Current Page (previous):', this.currentPage);  // Verifica la pagina corrente
      this.loadBooks();  // Carica i libri per la pagina precedente
    }
  }
  




  


  


  
}
