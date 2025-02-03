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
  imports: [FormsModule, ReactiveFormsModule, MatIconModule, MatInputModule, RouterLink, MatGridListModule, BookComponent, CommonModule, MatFormFieldModule, FilterPipe, ToolbarComponent, FooterComponent],
  selector: 'app-librery',
  templateUrl: './librery.component.html',
  styleUrls: ['./librery.component.scss']
})
export class LibreryComponent implements OnInit {
  searchtext: any;
  currentPage: number = 1;
  totalBooks: number = 0;
  booksPerPage: number = 18;
  totalPages: number = 0;
  booksList: Book[] = [];

  constructor(private bookService: BookService) {
    
  }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks() {
    this.bookService.getBooks().subscribe(
      data => {
        console.log(data);
        this.booksList = data;
      },
      err => console.log('There is an error', err)
    );
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadBooks();
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadBooks();
    }
  }
}
