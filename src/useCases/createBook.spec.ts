import { describe, expect, it } from "vitest";
import { Book } from "../entities/book";

describe("Create Book", () => {
  it("should be able to create an book", () => {
    const book = new Book("An book title", "An author", "An owner");
    expect(book).toBeInstanceOf(Book);
    expect(book.title).toBe("An book title");
  });
});
