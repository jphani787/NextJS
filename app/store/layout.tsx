import React from "react";
import type { Metadata } from "next";
import Sidebar from "../ui/sidebar/sidebar";

export const metadata: Metadata = {
  title: "LitLoop - Buy or Rent Books",
  description: "An Online BookStore to Sell and Rent Used Books",
};

export default function BookStoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row min-h-screen">
      <div className="flex flex-wrap p-2 justify-center w-full">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}
