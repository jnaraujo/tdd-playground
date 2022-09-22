import { expect, test } from "vitest";
import { Book } from "./book";

test("create an book", () => {
  const book = new Book("An book title", "An author", "An owner");
  expect(book).toBeInstanceOf(Book);
  expect(book.title).toBe("An book title");
  expect(book.author).toBe("An author");
  expect(book.owner).toBe("An owner");
});
