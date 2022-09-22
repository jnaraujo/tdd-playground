import { describe, expect, it } from "vitest";
import { Book } from "../entities/book";
import { InMemoryBookRepository } from "../repositories/inMemory/inMemoryBookRepository";
import { CreateBook } from "./createBook";

describe("Create Book", () => {
  it("should be able to create an book", () => {
    const bookRepository = new InMemoryBookRepository();
    const createBook = new CreateBook(bookRepository);

    expect(
      createBook.execute({
        title: "An book title",
        author: "Some book author",
        owner: "John Doe",
      })
    ).resolves.toBeInstanceOf(Book);
  });

  it("should be able to find an book", async () => {
    const bookRepository = new InMemoryBookRepository();
    const createBook = new CreateBook(bookRepository);

    const book = await createBook.execute({
      title: "An book title",
      author: "Some book author",
      owner: "John Doe",
    });

    const foundBook = await bookRepository.findByTitle(book.title);

    expect(foundBook).toBe(book);
  });

  it("should not be able to create an book with the same title", async () => {
    const bookRepository = new InMemoryBookRepository();
    const createBook = new CreateBook(bookRepository);

    const book = {
      title: "An book title",
      author: "Some book author",
      owner: "John Doe",
    };

    await createBook.execute(book);

    expect(createBook.execute(book)).rejects.toThrowError(
      "Book already exists"
    );
  });
});
