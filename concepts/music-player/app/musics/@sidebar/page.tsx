import Home from "@/app/page";
import React from "react";
import { Clock, HomeIcon, TrendingUp } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-[#111111] text-white flex flex-col justify-between p-4 min-h-screen">
      <section>
        <h2 className="text-xl font-bold">MENU</h2>
        <nav className="mt-4">
          <ul>
            <li className="flex items-center gap-2 p-2 hover:bg-[#171717] rounded-md cursor-pointer">
              <HomeIcon /> Discover
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-[#171717] rounded-md cursor-pointer">
              <TrendingUp /> Trending
            </li>
            <li className="flex items-center gap-2 p-2 hover:bg-[#171717] rounded-md cursor-pointer">
              <Clock /> Recent
            </li>
          </ul>
        </nav>
      </section>

      <section>
        <h2 className="mt-6 text-xl font-bold">FAVORITE</h2>
        <ul className="mt-2 mb-[2rem]">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex mt-[2rem] gap-4">
              <div className="h-15 w-15 bg-gray-700 rounded-md"></div>
              <div>
                <p className="text-white">Random</p>
                <p className="text-sm text-gray-400">Person</p>
              </div>
            </div>
          ))}
        </ul>
      </section>
    </aside>
  );
};

export default Sidebar;
