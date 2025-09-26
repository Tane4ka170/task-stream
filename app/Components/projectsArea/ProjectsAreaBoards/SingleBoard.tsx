import { useTheme } from "next-themes";
import React from "react";

export type Board = {
  name: string;
  createdAt: Date;
  tasks: string[];
};

function SingleBoard({ board }: { board: Board }) {
  const { name: boardName, tasks } = board;
  const { theme } = useTheme();
  const numberTasks = tasks.length;

  const bgColor = theme === "dark" ? "bg-black" : "bg-gray-50";
  return (
    <div className="w-full h-full border p-4 rounded-2xl">
      {/* header */}
      <div
        className={`flex justify-between ${bgColor} p-4 rounded-lg items-center`}
      >
        {/* header name */}
        <span className="font-medium text-md">{boardName}</span>
        {/* container for task number */}
        <div className="size-6 rounded-full bg-primary text-white flex items-center justify-center">
          <span className="text-sm mt-[2px]">{numberTasks}</span>
        </div>
      </div>
    </div>
  );
}

export default SingleBoard;
