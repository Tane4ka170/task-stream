import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowDownAZ, ArrowDownZA } from "lucide-react";
import React from "react";

const options = ["A-Z", "Z-A"];

function SortingDropDown() {
  const [selectedOption, setSelectedOption] = React.useState("A-Z");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"}>
          <span className="font-medium text-sm">{selectedOption}</span>
          {selectedOption === "A-Z" ? (
            <ArrowDownAZ className="text-sm" />
          ) : (
            <ArrowDownZA className="text-sm" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-20">
        {options.map((option, index) => (
          <DropdownMenuCheckboxItem
            key={index}
            className="h-9"
            checked={selectedOption === option}
            onCheckedChange={() => setSelectedOption(option)}
          >
            {option}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default SortingDropDown;
