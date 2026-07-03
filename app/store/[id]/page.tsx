"use server";
import { use } from "react";

type Props = {
  params: Promise<{ id: number }>;
};

export default async function BookDetailsPage({ params }: Props) {
  const { id } = await params;
  return <div>BookDetailsPage {id}</div>;
}
