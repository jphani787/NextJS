import React from "react";
import Sidebar from "../components/Sidebar";

const Games = () => {
  return (
    <div>
      <Sidebar />
      <div className="flex-1 bg-gray-100 p-5">
        <h1 className="text-2xl font-bold md-4">Featured Games</h1>
        <div className="flex gap-4"></div>
      </div>
    </div>
  );
};

export default Games;
