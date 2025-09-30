import React, { type FC, SVGProps } from "react";

export type IconType = FC<SVGProps<SVGSVGElement>>;

export type Project = {
  id: string;
  name: string;
  icon: IconType;
  createdAt: Date;
  tasks: string[];
};

function ProjectSelectionDropdown() {
  return <div>ProjectSelectionDropdown</div>;
}

export default ProjectSelectionDropdown;
