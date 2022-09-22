import { Book } from "../entities/book";
import { BookRepository } from "../repositories/bookRepository";

interface CreateBookRequest {
  title: string;
  author: string;
  owner: string;
}

export class CreateBook {
  constructor(private bookRepository: BookRepository) {}

  async execute({ title, author, owner }: CreateBookRequest): Promise<Book> {
    const book = new Book(title, author, owner);

    const doesAlreadyBookExist = await this.bookRepository.doesBookExist(book);

    if (doesAlreadyBookExist) {
      throw new Error("Book already exists");
    }

    await this.bookRepository.create(book);

    return book;
  }
}
