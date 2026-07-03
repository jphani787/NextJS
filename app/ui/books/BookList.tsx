import { BookCard } from "./BookCard";

export function BookList({ books }: any) {
  return (
    <>
      {books.map((book: any) => {
        return <BookCard key={book.id} book={book} />;
      })}
    </>
  );
}
