import { Book } from "../../entities/book";
import { BookRepository } from "../bookRepository";

export class InMemoryBookRepository implements BookRepository {
  private books: Book[] = [];

  async create(book: Book): Promise<Book> {
    this.books.push(book);
    return book;
  }

  async findByTitle(title: string): Promise<Book | null> {
    const book = this.books.find((book) => book.title === title);

    return book || null;
  }

  async doesBookExist(book: Book): Promise<boolean> {
    const foundBook = await this.findByTitle(book.title);

    return !!foundBook;
  }
}
