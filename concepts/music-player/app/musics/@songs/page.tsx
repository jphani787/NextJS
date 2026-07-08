import React from "react";

const SongsList = () => {
  const songs = [
    {
      id: 1,
      artist: "Fumes",
      title: "(Zone 2) Trizzac",
      time: "2:19",
    },
    {
      id: 2,
      artist: "Joyner",
      title: "(Zone 3) Joyner",
      time: "3:29",
    },
    {
      id: 3,
      artist: "Laddskii",
      title: "(Zone 3) Laddskii",
      time: "1:39",
    },
  ];
  return (
    <div className="w-[96%] mx-auto px-4">
      <h2 className="text-3xl text-white mt-8 font-bold mb-6">
        Songs Collection
      </h2>
    </div>
  );
};

export default SongsList;
