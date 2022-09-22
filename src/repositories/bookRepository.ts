import { Book } from "../entities/book";

export interface BookRepository {
  create(book: Book): Promise<Book>;
  findByTitle(title: string): Promise<Book | null>;
  doesBookExist(book: Book): Promise<boolean>;
}
