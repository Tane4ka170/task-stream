import { Card } from "@/components/ui/card";
import React from "react";

function RightSideBar() {
  return (
    <Card className="shadow-none p-6 rounded-3xl max-h-[640px]">
      <div className="flex flex-col gap-0">
        <ProjectSelectionDropdown />
        <CircularProgress />
        <TaskStats />
      </div>
    </Card>
  );
}

export default RightSideBar;
