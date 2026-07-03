import { getAllBooks, getBookById } from "../lib/fakeData";
import { BookList } from "../ui/books/BookList";
export default function BookListPage() {
  const books = getAllBooks();

  return <BookList books={books} />;
}
