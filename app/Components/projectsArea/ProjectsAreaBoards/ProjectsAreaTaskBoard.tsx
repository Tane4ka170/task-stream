import React from "react";
import SingleBoard, { Board } from "./SingleBoard";

function ProjectsAreaTaskBoard() {
  const boards: Board[] = [
    { name: "Not Started", createdAt: new Date(), tasks: [] },
    { name: "Ongoing", createdAt: new Date(), tasks: [] },
    { name: "Finished", createdAt: new Date(), tasks: [] },
  ];
  return (
    <div className="h-full rounded-2xl flex items-center mt-4 gap-3">
      {boards.map((board, index) => (
        <SingleBoard key={index} board={board} />
      ))}
    </div>
  );
}

export default ProjectsAreaTaskBoard;
