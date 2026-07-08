import React from "react";

const Comments = async () => {
  await new Promise((reslove) => {
    setTimeout(() => reslove("Lodaing.."), 4000);
  });
  return <div className="border p-[10rem] w-[30rem]">Comments</div>;
};

export default Comments;
