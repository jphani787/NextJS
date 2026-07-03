import { use } from "react";
import { getBookById } from "../../lib/fakeData";
import BookDetails from "@/app/ui/books/BookDetails";
type Props = {
  params: Promise<{ id: string }>;
};

export default async function BookDetailsPage({ params }: Props) {
  const { id } = await params;
  const book = getBookById(id);
  return <BookDetails book={book} />;
}
