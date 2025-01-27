import { Component, Input } from '@angular/core';
import { Book } from '../../model/model';
import { MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';  
import { trigger, state, style, transition, animate } from '@angular/animations';
import { BookService } from '../../services/book-service/book.service';

@Component({
  selector: 'app-book',
  imports: [MatCardModule, CommonModule],
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],  // correggi da 'styleUrl' a 'styleUrls'
  animations: [
    trigger('hoverAnimation', [
      state('hovered', style({
        transform: 'scale(1.10)'
      })),
      state('notHovered', style({
        transform: 'scale(1)'
      })),
      transition('notHovered <=> hovered', animate('1ms ease-in-out'))
    ]),
    trigger('clickAnimation', [
      transition('notClicked <=> clicked', animate('400ms ease-in-out'))
    ])
  ]
})
export class BookComponent {
  
  @Input() book?: Book;


  isHovered: boolean = false;
  isClicked: boolean = false;

  // Aggiungi la variabile di istanza per il servizio
  constructor(private bookService: BookService) {}

  toggleHoverState() {
    if (!this.isClicked) {
      this.isHovered = !this.isHovered;
    }
  }

  toggleClickState() {
    this.isClicked = !this.isClicked;
  }

  resetCardState() {
    if (!this.isClicked) {
      this.isHovered = false;
    }
  }

  getImageUrl(coverId: number | undefined): string {
    return coverId !== undefined 
      ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`
      : 'path_to_default_image.jpg';  // Immagine di fallback se coverId è undefined
  }
  
}
