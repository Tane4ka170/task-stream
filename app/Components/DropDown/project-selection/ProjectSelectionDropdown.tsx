import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Baby, Activity } from "lucide-react";
import React, { type FC, SVGProps, useState } from "react";
import ProjectCommandItem from "./ProjectCommandItem";

export type IconType = FC<SVGProps<SVGSVGElement>>;

export type Project = {
  id: string;
  name: string;
  icon: IconType;
  createdAt: Date;
  tasks: string[];
};

export const projects: Project[] = [
  {
    id: "1",
    name: "Project 1",
    icon: Baby,
    createdAt: new Date(),
    tasks: [],
  },
  {
    id: "2",
    name: "Project 2",
    icon: Activity,
    createdAt: new Date(),
    tasks: [],
  },
];

function ProjectSelectionDropdown() {
  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"ghost"}
          className="w-full flex justify-between py-9 rounded-xl bg-gray-200"
        >
          <div className="flex items-start flex-col text-[16px] gap-1">
            <p className="text[13px] text-slate-800">PROJECT</p>
            <p className="font-bold">{selectedProject.name}</p>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-2 rounded-xl">
        <ProjectCommandItem
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />
      </PopoverContent>
    </Popover>
  );
}

export default ProjectSelectionDropdown;
