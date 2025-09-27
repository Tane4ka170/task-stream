import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowBigDown } from "lucide-react";
import React from "react";
import TasksDropDown from "../../DropDown/TasksDropDown";

function SingleTask() {
  return (
    <Card className="shadow-none">
      {/* Header */}
      <CardHeader className="p-4">
        <div className="flex items-center justify-between">
          <div className="p-1 py-[4px] bg-green-500/15 rounded-3xl px-2 pr-4 font-medium text-green-600 flex items-center gap-1 text-sm">
            <ArrowBigDown className="mb-[2px]" />
            <span className="text-[12px]">Low</span>
          </div>
          <TasksDropDown />
        </div>
      </CardHeader>
      {/* main content */}
      <CardContent className="flex flex-col gap-3 mt-1">
        <span className="font-bold text-lg">Watch tv</span>
        <span className="text-sm text-gray-800">
          Football matches day and night
        </span>
      </CardContent>
    </Card>
  );
}

export default SingleTask;
