import { Card } from "@/components/ui/card";
import React from "react";

function ProjectsArea() {
  return (
    <Card className="shadow-none p-7 rounded-xl px-7 flex flex-col gap-8">
      <ProjectsAreaHeader />
      <ProjectsAreaBoards />
    </Card>
  );
}

export default ProjectsArea;
