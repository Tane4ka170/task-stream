import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CircleX, Ellipsis, Pencil } from "lucide-react";
import React from "react";

type MenuItem = {
  icon: JSX.Element;
  label: string;
  className: string;
  separator?: undefined;
};

function TasksDropDown() {
  const menuItems: MenuItem[] = [
    {
      icon: <Pencil />,
      label: "Edit Task",
      className: "",
    },
    {
      icon: <CircleX />,
      label: "Delete Task",
      className: "text-red-200",
    },
  ];
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"ghost"} className="h-8 w-8 p-0">
            <Ellipsis className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          {menuItems.map((item, index) =>
            item.separator ? (
              <DropdownMenuSeparator key={index} />
            ) : (
              <DropdownMenuItem
                key={index}
                className={`flex items-center gap-1 p-[10px] ${item.classsName}`}
              >
                {item.icon}
                span
              </DropdownMenuItem>
            )
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default TasksDropDown;
