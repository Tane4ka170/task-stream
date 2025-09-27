import { Card } from "@/components/ui/card";
import React from "react";
import ProjectsAreaHeader from "./projectsAreaHeader/ProjectsAreaHeader";
import ProjectsAreaTaskBoard from "./ProjectsAreaBoards/ProjectsAreaTaskBoard";

function ProjectsArea() {
  return (
    <Card className="shadow-none p-7 rounded-3xl px-7 flex flex-col gap-8">
      <ProjectsAreaHeader />
      <ProjectsAreaTaskBoard />
    </Card>
  );
}

export default ProjectsArea;
