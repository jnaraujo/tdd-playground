export class Book {
  private _title: string;
  private _author: string;
  private _owner: string;

  get title(): string {
    return this._title;
  }

  get author(): string {
    return this._author;
  }

  get owner(): string {
    return this._owner;
  }

  constructor(title: string, author: string, owner: string) {
    this._title = title;
    this._author = author;
    this._owner = owner;
  }
}
