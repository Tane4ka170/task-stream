import { Cog } from "lucide-react";
import React from "react";

function AppNameAndLogo() {
  return (
    <div className="flex items-center gap-2">
      {" "}
      <div className="bg-primary size-10 text-lg text-white rounded-xl flex justify-center items-center">
        <Cog />
      </div>
      <div className="flex gap-1 items-center text-xl">
        <span className="font-bold text-xl">Task</span>
        <span className="text-xl">Stream</span>
      </div>
    </div>
  );
}

export default AppNameAndLogo;
