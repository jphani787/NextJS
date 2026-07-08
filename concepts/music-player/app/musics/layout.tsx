import React, { ReactNode } from "react";

type MusicType = {
  children: ReactNode;
  sidebar: ReactNode;
  songs: ReactNode;
};

const MusicLayout = ({ children, sidebar, songs }: MusicType) => {
  return (
    <div className="flex">
      {sidebar}
      {songs}
      <div></div>
      {children}
    </div>
  );
};

export default MusicLayout;
