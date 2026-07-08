import Link from "next/link";
import React from "react";

const Members = () => {
  // if (2 < 5) {
  //   throw new Error("Error..");
  // }
  return (
    <div className="border p-[10rem] w-[30rem]">
      Members salaries <Link href="/salaries">click here</Link>
    </div>
  );
};

export default Members;
