import { Button } from "@/components/ui/button";
import { ArrowDownAZ } from "lucide-react";
import React from "react";

function ProjectsAreaHeader() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-3 items-center">
        <span className="text-2xl font-bold">Projects</span>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex gap-1 items-center">
          <ArrowDownAZ className="text-xl text-gray-200" />
          <span className="text-sm text-gray-400">Projects</span>
        </div>

        <SortingDropDown />
        <Button className="px-4 rounded-3xl"></Button>
      </div>
    </div>
  );
}

export default ProjectsAreaHeader;
