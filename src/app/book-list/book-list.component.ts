import { Component } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  template: ` <h2>Könyvek</h2>
    <ul>
      <li *ngFor="let book of books">{{ book.title }} by {{ book.author }}</li>
    </ul>
    <h2>Szerzők</h2>
    <ul>
      <li *ngFor="let author of authors">{{ author.name }}</li>
    </ul>`,
})
export class BooksListComponent {
  books: any[] = [];
  authors: any[] = [];

  constructor(private bookService: BookService) {}
  ngOnInit() {
    this.bookService.getBooks().subscribe((data) => {
      this.books = data;
    });

    this.bookService.getAuthors().subscribe((data) => {
      this.authors = data;
    });
  }
}
