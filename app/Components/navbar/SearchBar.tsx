import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

function SearchBar() {
  const { theme } = useTheme();

  const bgColor = theme === "dark" ? "bg-transparent" : "bg-white";
  return (
    <div className="relative">
      <Search className="absolute text-2xl left-3 top-2 text-gray-400" />
      <Input
        className={`${bgColor} rounded-3xl h-10 pl-11 shadow-none`}
        placeholder="Search..."
      />
    </div>
  );
}

export default SearchBar;
