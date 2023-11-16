import React from "react";
import Navbar from "./navbar";

export default function Baselayout({ children }: any) {
  return (
    <div className="flex flex-col overflow-hidden">
      <div className="w-full overflow-hidden ">
        <Navbar />
      </div>
      <div className="overflow-hidden text-black">{children}</div>
    </div>
  );
}
