import React, { ReactNode } from "react";

type MusicType = {
  children: ReactNode;
  sidebar: ReactNode;
};

const MusicLayout = ({ children, sidebar }: MusicType) => {
  return (
    <div className="flex">
      {sidebar}
      <div></div>
      {children}
    </div>
  );
};

export default MusicLayout;
