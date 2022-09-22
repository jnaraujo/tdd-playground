import { Book } from "../entities/book";

interface CreateBookRequest {
  title: string;
  author: string;
  owner: string;
}

export class CreateBook {
  async execute({ title, author, owner }: CreateBookRequest): Promise<Book> {
    const book = new Book(title, author, owner);
    return book;
  }
}
